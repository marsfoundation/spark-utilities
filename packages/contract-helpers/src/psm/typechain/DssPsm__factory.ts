/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DssPsm, DssPsmInterface } from "./DssPsm";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "gemJoin_",
        type: "address",
      },
      {
        internalType: "address",
        name: "daiJoin_",
        type: "address",
      },
      {
        internalType: "address",
        name: "vow_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "BuyGem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "Deny",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "File",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "Rely",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "SellGem",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gemAmt",
        type: "uint256",
      },
    ],
    name: "buyGem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dai",
    outputs: [
      {
        internalType: "contract DaiAbstract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "daiJoin",
    outputs: [
      {
        internalType: "contract DaiJoinAbstract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gemJoin",
    outputs: [
      {
        internalType: "contract AuthGemJoinAbstract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "hope",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ilk",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "nope",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gemAmt",
        type: "uint256",
      },
    ],
    name: "sellGem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vat",
    outputs: [
      {
        internalType: "contract VatAbstract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vow",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class DssPsm__factory {
  static readonly abi = _abi;
  static createInterface(): DssPsmInterface {
    return new utils.Interface(_abi) as DssPsmInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DssPsm {
    return new Contract(address, _abi, signerOrProvider) as DssPsm;
  }
}