/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ChainlogAbstractInterface extends ethers.utils.Interface {
  functions: {
    "count()": FunctionFragment;
    "deny(address)": FunctionFragment;
    "get(uint256)": FunctionFragment;
    "getAddress(bytes32)": FunctionFragment;
    "ipfs()": FunctionFragment;
    "keys()": FunctionFragment;
    "list()": FunctionFragment;
    "rely(address)": FunctionFragment;
    "removeAddress(bytes32)": FunctionFragment;
    "setAddress(bytes32,address)": FunctionFragment;
    "setIPFS(string)": FunctionFragment;
    "setSha256sum(string)": FunctionFragment;
    "setVersion(string)": FunctionFragment;
    "version()": FunctionFragment;
    "wards(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [string]): string;
  encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "ipfs", values?: undefined): string;
  encodeFunctionData(functionFragment: "keys", values?: undefined): string;
  encodeFunctionData(functionFragment: "list", values?: undefined): string;
  encodeFunctionData(functionFragment: "rely", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "setIPFS", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSha256sum",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setVersion", values: [string]): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [string]): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ipfs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keys", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setIPFS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSha256sum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;

  events: {};
}

export class ChainlogAbstract extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ChainlogAbstractInterface;

  functions: {
    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    "count()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    deny(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deny(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    "get(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    getAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    ipfs(overrides?: CallOverrides): Promise<[string]>;

    "ipfs()"(overrides?: CallOverrides): Promise<[string]>;

    keys(overrides?: CallOverrides): Promise<[string[]]>;

    "keys()"(overrides?: CallOverrides): Promise<[string[]]>;

    list(overrides?: CallOverrides): Promise<[string[]]>;

    "list()"(overrides?: CallOverrides): Promise<[string[]]>;

    rely(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "rely(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeAddress(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAddress(
      arg0: BytesLike,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAddress(bytes32,address)"(
      arg0: BytesLike,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIPFS(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setIPFS(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSha256sum(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setSha256sum(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVersion(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setVersion(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;

    "version()"(overrides?: CallOverrides): Promise<[string]>;

    wards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  count(overrides?: CallOverrides): Promise<BigNumber>;

  "count()"(overrides?: CallOverrides): Promise<BigNumber>;

  deny(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deny(address)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string, string]>;

  "get(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  getAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getAddress(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  ipfs(overrides?: CallOverrides): Promise<string>;

  "ipfs()"(overrides?: CallOverrides): Promise<string>;

  keys(overrides?: CallOverrides): Promise<string[]>;

  "keys()"(overrides?: CallOverrides): Promise<string[]>;

  list(overrides?: CallOverrides): Promise<string[]>;

  "list()"(overrides?: CallOverrides): Promise<string[]>;

  rely(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "rely(address)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeAddress(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeAddress(bytes32)"(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAddress(
    arg0: BytesLike,
    arg1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAddress(bytes32,address)"(
    arg0: BytesLike,
    arg1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIPFS(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setIPFS(string)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSha256sum(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setSha256sum(string)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVersion(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setVersion(string)"(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  "version()"(overrides?: CallOverrides): Promise<string>;

  wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "wards(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    "count()"(overrides?: CallOverrides): Promise<BigNumber>;

    deny(arg0: string, overrides?: CallOverrides): Promise<void>;

    "deny(address)"(arg0: string, overrides?: CallOverrides): Promise<void>;

    get(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    "get(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    getAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    ipfs(overrides?: CallOverrides): Promise<string>;

    "ipfs()"(overrides?: CallOverrides): Promise<string>;

    keys(overrides?: CallOverrides): Promise<string[]>;

    "keys()"(overrides?: CallOverrides): Promise<string[]>;

    list(overrides?: CallOverrides): Promise<string[]>;

    "list()"(overrides?: CallOverrides): Promise<string[]>;

    rely(arg0: string, overrides?: CallOverrides): Promise<void>;

    "rely(address)"(arg0: string, overrides?: CallOverrides): Promise<void>;

    removeAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    "removeAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setAddress(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAddress(bytes32,address)"(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setIPFS(arg0: string, overrides?: CallOverrides): Promise<void>;

    "setIPFS(string)"(arg0: string, overrides?: CallOverrides): Promise<void>;

    setSha256sum(arg0: string, overrides?: CallOverrides): Promise<void>;

    "setSha256sum(string)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVersion(arg0: string, overrides?: CallOverrides): Promise<void>;

    "setVersion(string)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;

    "version()"(overrides?: CallOverrides): Promise<string>;

    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    "count()"(overrides?: CallOverrides): Promise<BigNumber>;

    deny(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deny(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "get(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddress(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ipfs(overrides?: CallOverrides): Promise<BigNumber>;

    "ipfs()"(overrides?: CallOverrides): Promise<BigNumber>;

    keys(overrides?: CallOverrides): Promise<BigNumber>;

    "keys()"(overrides?: CallOverrides): Promise<BigNumber>;

    list(overrides?: CallOverrides): Promise<BigNumber>;

    "list()"(overrides?: CallOverrides): Promise<BigNumber>;

    rely(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "rely(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeAddress(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAddress(
      arg0: BytesLike,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAddress(bytes32,address)"(
      arg0: BytesLike,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIPFS(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setIPFS(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSha256sum(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setSha256sum(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVersion(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setVersion(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;

    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "count()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deny(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deny(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "get(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ipfs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ipfs()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keys(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "keys()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    list(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "list()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rely(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "rely(address)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeAddress(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeAddress(bytes32)"(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAddress(
      arg0: BytesLike,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAddress(bytes32,address)"(
      arg0: BytesLike,
      arg1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIPFS(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setIPFS(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSha256sum(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setSha256sum(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVersion(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setVersion(string)"(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}