import { providers } from 'ethers';
import BigNumber from 'bignumber.js';
import BaseService from '../commons/BaseService';
import {
    eEthereumTxType,
    EthereumTransactionTypeExtended,
    tEthereumAddress,
    transactionType,
} from '../commons/types';
import { DEFAULT_APPROVE_AMOUNT, DEFAULT_NULL_VALUE_ON_TX, valueToWei } from '../commons/utils';
import { PsmValidator } from '../commons/validators/methodValidators';
import { isEthAddress } from '../commons/validators/paramValidators';
import { DssPsm } from './typechain/DssPsm';
import { DssPsm__factory } from './typechain/DssPsm__factory';
import { ERC20Service, IERC20ServiceInterface } from '../erc20-contract';
import { ChainlogService, ChainlogServiceInterface } from '../chainlog-contract';

export type PsmParamsType = {
    userAddress: tEthereumAddress;
    usr: tEthereumAddress;
    gemAmt: string;
};

export interface PsmServiceInterface {
    buyGem: (args: PsmParamsType) => Promise<EthereumTransactionTypeExtended[]>;
    sellGem: (args: PsmParamsType) => Promise<EthereumTransactionTypeExtended[]>;
    gemJoin: () => Promise<string>;
    tin: () => Promise<BigNumber>;
    tout: () => Promise<BigNumber>;
}

export class PsmService extends BaseService<DssPsm> implements PsmServiceInterface {
    readonly chainlogService: ChainlogServiceInterface;
    readonly erc20Service: IERC20ServiceInterface;
    readonly name: string;
    psmAddress: string;
    tokenAddress: string;
    daiAddress: string;

    constructor(provider: providers.Provider, chainlogAddress: string, name: string) {
        super(provider, DssPsm__factory);

        this.chainlogService = new ChainlogService(provider, chainlogAddress);
        this.erc20Service = new ERC20Service(provider);
        this.name = name;
    }

    async loadContracts(): Promise<void> {
        if (this.psmAddress) return;

        this.psmAddress = await this.chainlogService.getAddress(`MCD_PSM_${this.name}_A`);
        this.tokenAddress = await this.chainlogService.getAddress(this.name);
        this.daiAddress = await this.chainlogService.getAddress('MCD_DAI');
    }

    @PsmValidator
    public async buyGem(
        @isEthAddress('userAddress')
        @isEthAddress('usr')
        { userAddress, usr, gemAmt }: PsmParamsType,
    ): Promise<EthereumTransactionTypeExtended[]> {
        await this.loadContracts();

        const txs: EthereumTransactionTypeExtended[] = [];
        const psmContract = this.getContractInstance(this.psmAddress);
        const { decimalsOf, isApproved, approve } = this.erc20Service;
        const decimals: number = await decimalsOf(this.tokenAddress);
        const convertedAmount: string = valueToWei(gemAmt, decimals);
        const approved: boolean = await isApproved({
            token: this.daiAddress,
            user: userAddress,
            spender: this.psmAddress,
            amount: gemAmt,
        });
        if (!approved) {
            const approveTx = approve({
                token: this.daiAddress,
                user: userAddress,
                spender: this.psmAddress,
                amount: DEFAULT_APPROVE_AMOUNT,
            });
            txs.push(approveTx);
        }

        const txCallback: () => Promise<transactionType> = this.generateTxCallback({
            rawTxMethod: async () =>
                psmContract.populateTransaction.buyGem(usr, convertedAmount),
            from: userAddress,
            value: DEFAULT_NULL_VALUE_ON_TX,
        });

        txs.push({
            tx: txCallback,
            txType: eEthereumTxType.PSM_ACTION,
            gas: this.generateTxPriceEstimation(txs, txCallback),
        });
        return txs;
    }

    @PsmValidator
    public async sellGem(
        @isEthAddress('userAddress')
        @isEthAddress('usr')
        { userAddress, usr, gemAmt }: PsmParamsType,
    ): Promise<EthereumTransactionTypeExtended[]> {
        await this.loadContracts();

        const txs: EthereumTransactionTypeExtended[] = [];
        const psmContract = this.getContractInstance(this.psmAddress);
        const { decimalsOf, isApproved, approve } = this.erc20Service;
        const decimals: number = await decimalsOf(this.tokenAddress);
        const convertedAmount: string = valueToWei(gemAmt, decimals);
        const gemJoinAddress: string = await this.gemJoin();
        const approved: boolean = await isApproved({
            token: this.tokenAddress,
            user: userAddress,
            spender: gemJoinAddress,
            amount: gemAmt,
        });
        if (!approved) {
            const approveTx = approve({
                token: this.tokenAddress,
                user: userAddress,
                spender: gemJoinAddress,
                amount: DEFAULT_APPROVE_AMOUNT,
            });
            txs.push(approveTx);
        }

        const txCallback: () => Promise<transactionType> = this.generateTxCallback({
            rawTxMethod: async () =>
                psmContract.populateTransaction.sellGem(usr, convertedAmount),
            from: userAddress,
            value: DEFAULT_NULL_VALUE_ON_TX,
        });

        txs.push({
            tx: txCallback,
            txType: eEthereumTxType.PSM_ACTION,
            gas: this.generateTxPriceEstimation(txs, txCallback),
        });
        return txs;
    }

    @PsmValidator
    public async gemJoin(): Promise<string> {
        await this.loadContracts();

        const psmContract = this.getContractInstance(this.psmAddress);
        return psmContract.gemJoin();
    }

    @PsmValidator
    public async tin(): Promise<BigNumber> {
        await this.loadContracts();

        const psmContract = this.getContractInstance(this.psmAddress);
        return new BigNumber((await psmContract.tin())._hex).div(1e18).plus(1);
    }

    @PsmValidator
    public async tout(): Promise<BigNumber> {
        await this.loadContracts();

        const psmContract = this.getContractInstance(this.psmAddress);
        return new BigNumber((await psmContract.tout())._hex).div(1e18).plus(1);
    }
}
