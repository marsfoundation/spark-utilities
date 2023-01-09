import { providers, BigNumber } from 'ethers';
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

export type PsmParamsType = {
    userAddress: tEthereumAddress;
    usr: tEthereumAddress;
    gemAmt: tEthereumAddress;
};

export interface PsmInterface {
    buyGem: (args: PsmParamsType) => Promise<EthereumTransactionTypeExtended[]>;
    sellGem: (args: PsmParamsType) => Promise<EthereumTransactionTypeExtended[]>;
    gemJoin: () => Promise<string>;
    tin: () => Promise<BigNumber>;
    tout: () => Promise<BigNumber>;
}

export class PsmService extends BaseService<DssPsm> implements PsmInterface {
    readonly psmAddress: string;
    readonly tokenAddress: string;
    readonly daiAddress: string;
    readonly erc20Service: IERC20ServiceInterface;

    constructor(provider: providers.Provider, psmAddress?: string, tokenAddress?: string, daiAddress?: string) {
        super(provider, DssPsm__factory);

        this.psmAddress = psmAddress ?? '';
        this.tokenAddress = tokenAddress ?? '';
        this.daiAddress = daiAddress ?? '';
        this.erc20Service = new ERC20Service(provider);
    }

    @PsmValidator
    public async buyGem(
        @isEthAddress('userAddress')
        @isEthAddress('usr')
        { userAddress, usr, gemAmt }: PsmParamsType,
    ): Promise<EthereumTransactionTypeExtended[]> {
        const txs: EthereumTransactionTypeExtended[] = [];
        const psmContract = this.getContractInstance(this.psmAddress);
        const { decimalsOf, isApproved, approve } = this.erc20Service;
        const decimals: number = await decimalsOf(this.tokenAddress);
        const convertedAmount: string = valueToWei(gemAmt, decimals);
        const decimalsDai: number = await decimalsOf(this.daiAddress);
        const convertedAmountDai: string = valueToWei(gemAmt, decimalsDai);
        const approved: boolean = await isApproved({
            token: this.daiAddress,
            user: userAddress,
            spender: this.psmAddress,
            amount: convertedAmountDai,
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
            amount: convertedAmount,
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
        const psmContract = this.getContractInstance(this.psmAddress);
        return psmContract.gemJoin();
    }

    @PsmValidator
    public async tin(): Promise<BigNumber> {
        const psmContract = this.getContractInstance(this.psmAddress);
        return psmContract.tin();
    }

    @PsmValidator
    public async tout(): Promise<BigNumber> {
        const psmContract = this.getContractInstance(this.psmAddress);
        return psmContract.tout();
    }
}
