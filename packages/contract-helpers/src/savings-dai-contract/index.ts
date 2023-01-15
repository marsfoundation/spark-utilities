import { providers } from 'ethers';
import BigNumber from 'bignumber.js';
import {
    eEthereumTxType,
    EthereumTransactionTypeExtended,
    tEthereumAddress,
    transactionType,
} from '../commons/types';
import BaseService from '../commons/BaseService';
import { ISavingsDai } from './typechain/ISavingsDai';
import { ISavingsDai__factory } from './typechain/ISavingsDai__factory';
import { SavingsDaiValidator } from '../commons/validators/methodValidators';
import { DEFAULT_APPROVE_AMOUNT, DEFAULT_NULL_VALUE_ON_TX, valueToWei } from '../commons/utils';
import { isEthAddress } from '../commons/validators/paramValidators';
import { ERC20Service, IERC20ServiceInterface } from '../erc20-contract';

export type DepositParamsType = {
    userAddress: tEthereumAddress,
    receiver: tEthereumAddress,
    assets: string
};
export type RedeemParamsType = {
    userAddress: tEthereumAddress,
    receiver: tEthereumAddress,
    owner: tEthereumAddress,
    shares: string
};

export interface SavingsDaiServiceInterface {
    previewDeposit: (assets: string) => Promise<BigNumber>;
    deposit: (args: DepositParamsType) => Promise<EthereumTransactionTypeExtended[]>;
    previewRedeem: (shares: string) => Promise<BigNumber>;
    redeem: (args: RedeemParamsType) => Promise<EthereumTransactionTypeExtended[]>;
}

export class SavingsDaiService extends BaseService<ISavingsDai> implements SavingsDaiServiceInterface {
    readonly savingsDaiAddress: string;
    readonly erc20Service: IERC20ServiceInterface;
    daiAddress: string;

    constructor(provider: providers.Provider, savingsDaiAddress: string) {
        super(provider, ISavingsDai__factory);

        this.savingsDaiAddress = savingsDaiAddress;
        this.erc20Service = new ERC20Service(provider);
    }

    async loadContracts(): Promise<void> {
        if (this.daiAddress) return;

        const savingsDaiContract = this.getContractInstance(this.savingsDaiAddress);
        this.daiAddress = await savingsDaiContract.dai();
    }

    @SavingsDaiValidator
    public async previewDeposit(assets: string): Promise<BigNumber> {
        const convertedAmount: string = valueToWei(assets, 18);
        const savingsDaiContract = this.getContractInstance(this.savingsDaiAddress);
        return new BigNumber((await savingsDaiContract.previewDeposit(convertedAmount))._hex).div(1e18);
    }

    @SavingsDaiValidator
    public async deposit(
        @isEthAddress('userAddress')
        @isEthAddress('receiver')
        { userAddress, receiver, assets }: DepositParamsType,
    ): Promise<EthereumTransactionTypeExtended[]> {
        await this.loadContracts();

        const txs: EthereumTransactionTypeExtended[] = [];
        const { isApproved, approve } = this.erc20Service;
        const savingsDaiContract = this.getContractInstance(this.savingsDaiAddress);
        const convertedAmount: string = valueToWei(assets, 18);
        const approved: boolean = await isApproved({
            token: this.daiAddress,
            user: userAddress,
            spender: this.savingsDaiAddress,
            amount: convertedAmount,
        });
        if (!approved) {
            const approveTx = approve({
                token: this.daiAddress,
                user: userAddress,
                spender: this.savingsDaiAddress,
                amount: DEFAULT_APPROVE_AMOUNT,
            });
            txs.push(approveTx);
        }

        const txCallback: () => Promise<transactionType> = this.generateTxCallback({
            rawTxMethod: async () =>
                savingsDaiContract.populateTransaction.deposit(convertedAmount, receiver),
            from: userAddress,
            value: DEFAULT_NULL_VALUE_ON_TX,
        });

        txs.push({
            tx: txCallback,
            txType: eEthereumTxType.SAVINGS_DAI_ACTION,
            gas: this.generateTxPriceEstimation(txs, txCallback),
        });
        return txs;
    }

    @SavingsDaiValidator
    public async previewRedeem(shares: string): Promise<BigNumber> {
        const convertedAmount: string = valueToWei(shares, 18);
        const savingsDaiContract = this.getContractInstance(this.savingsDaiAddress);
        return new BigNumber((await savingsDaiContract.previewRedeem(convertedAmount))._hex).div(1e18);
    }

    @SavingsDaiValidator
    public async redeem(
        @isEthAddress('userAddress')
        @isEthAddress('receiver')
        @isEthAddress('owner')
        { userAddress, receiver, owner, shares }: RedeemParamsType,
    ): Promise<EthereumTransactionTypeExtended[]> {
        await this.loadContracts();

        const txs: EthereumTransactionTypeExtended[] = [];
        const savingsDaiContract = this.getContractInstance(this.savingsDaiAddress);
        const convertedAmount: string = valueToWei(shares, 18);

        const txCallback: () => Promise<transactionType> = this.generateTxCallback({
            rawTxMethod: async () =>
                savingsDaiContract.populateTransaction.redeem(convertedAmount, receiver, owner),
            from: userAddress,
            value: DEFAULT_NULL_VALUE_ON_TX,
        });

        txs.push({
            tx: txCallback,
            txType: eEthereumTxType.SAVINGS_DAI_ACTION,
            gas: this.generateTxPriceEstimation(txs, txCallback),
        });
        return txs;
    }
}
