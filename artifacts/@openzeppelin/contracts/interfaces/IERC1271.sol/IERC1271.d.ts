// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IERC1271$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IERC1271",
  "sourceName": "@openzeppelin/contracts/interfaces/IERC1271.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "hash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "isValidSignature",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "magicValue",
          "type": "bytes4"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "IERC1271",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IERC1271$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/interfaces/IERC1271.sol:IERC1271",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IERC1271$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IERC1271",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IERC1271$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/interfaces/IERC1271.sol:IERC1271",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IERC1271$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IERC1271",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IERC1271$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/interfaces/IERC1271.sol:IERC1271",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IERC1271$Type["abi"]>>;
}
