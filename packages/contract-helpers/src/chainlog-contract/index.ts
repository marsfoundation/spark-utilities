import { providers, utils } from 'ethers';
import BaseService from '../commons/BaseService';
import { ChainlogAbstract } from './typechain/ChainlogAbstract';
import { ChainlogAbstract__factory } from './typechain/ChainlogAbstract__factory';

export interface ChainlogServiceInterface {
    getAddress: (name: string) => Promise<string>;
}

export class ChainlogService extends BaseService<ChainlogAbstract> implements ChainlogServiceInterface {
    readonly chainlogAddress: string;

    constructor(provider: providers.Provider, chainlogAddress: string) {
        super(provider, ChainlogAbstract__factory);

        this.chainlogAddress = chainlogAddress;
    }

    public async getAddress(name: string): Promise<string> {
        const chainlogContract = this.getContractInstance(this.chainlogAddress);
        return chainlogContract.getAddress(utils.formatBytes32String(name));
    }
}
