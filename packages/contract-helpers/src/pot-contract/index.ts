import { providers } from 'ethers';
import BigNumber from 'bignumber.js';
import BaseService from '../commons/BaseService';
import { PotAbstract } from './typechain/PotAbstract';
import { PotAbstract__factory } from './typechain/PotAbstract__factory';

export interface PotServiceInterface {
    getDaiSavingsRate: () => Promise<BigNumber>;
}

export class PotService extends BaseService<PotAbstract> implements PotServiceInterface {
    readonly potAddress: string;

    constructor(provider: providers.Provider, potAddress: string) {
        super(provider, PotAbstract__factory);

        this.potAddress = potAddress;
    }

    public async getChi(): Promise<BigNumber> {
        const potContract = this.getContractInstance(this.potAddress);
        return new BigNumber((await potContract.chi())._hex).div(1e27);
    }

    public async getDaiSavingsRate(): Promise<BigNumber> {
        BigNumber.config({ POW_PRECISION: 100 });   // Without this the computation will take too long
        const potContract = this.getContractInstance(this.potAddress);
        const dsr = new BigNumber((await potContract.dsr())._hex).div(1e27);
        return dsr.pow(60 * 60 * 24 * 365).minus(1);
    }
}
