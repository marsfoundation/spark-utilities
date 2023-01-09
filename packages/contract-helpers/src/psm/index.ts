import { providers } from 'ethers';
import BaseService from '../commons/BaseService';
import {
    eEthereumTxType,
    EthereumTransactionTypeExtended,
    tEthereumAddress,
    transactionType,
} from '../commons/types';
import {
    DEFAULT_NULL_VALUE_ON_TX,
} from '../commons/utils';
import { PsmValidator } from '../commons/validators/methodValidators';
import { isEthAddress } from '../commons/validators/paramValidators';
import { DssPsm } from './typechain/DssPsm';
import { DssPsm__factory } from './typechain/DssPsm__factory';

export type PsmParamsType = {
    userAddress: tEthereumAddress;
    usr: tEthereumAddress;
    gemAmt: tEthereumAddress;
};

export interface PsmInterface {
    buyGem: (args: PsmParamsType) => EthereumTransactionTypeExtended[];
    sellGem: (args: PsmParamsType) => EthereumTransactionTypeExtended[];
}

export class PsmService
    extends BaseService<DssPsm>
    implements PsmInterface {
    readonly psmAddress: string;

    constructor(provider: providers.Provider, psmAddress?: string) {
        super(provider, DssPsm__factory);

        this.psmAddress = psmAddress ?? '';
    }

    @PsmValidator
    public buyGem(
        @isEthAddress('userAddress')
        @isEthAddress('usr')
        { userAddress, usr, gemAmt }: PsmParamsType,
    ): EthereumTransactionTypeExtended[] {
        const psmContract = this.getContractInstance(this.psmAddress);
        const txCallback: () => Promise<transactionType> = this.generateTxCallback({
            rawTxMethod: async () =>
                psmContract.populateTransaction.buyGem(usr, gemAmt),
            from: userAddress,
            value: DEFAULT_NULL_VALUE_ON_TX,
        });

        return [
            {
                tx: txCallback,
                txType: eEthereumTxType.PSM_ACTION,
                gas: this.generateTxPriceEstimation([], txCallback),
            },
        ];
    }
}
