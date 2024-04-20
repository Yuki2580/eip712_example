// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ShortStrings$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ShortStrings",
  "sourceName": "@openzeppelin/contracts/utils/ShortStrings.sol",
  "abi": [
    {
      "inputs": [],
      "name": "InvalidShortString",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "str",
          "type": "string"
        }
      ],
      "name": "StringTooLong",
      "type": "error"
    }
  ],
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cfec0fdf9ffd764137a8d2e0ca2307a36b05be155fbb680fced6c37e5277843964736f6c63430008180033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cfec0fdf9ffd764137a8d2e0ca2307a36b05be155fbb680fced6c37e5277843964736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ShortStrings",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ShortStrings$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/utils/ShortStrings.sol:ShortStrings",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ShortStrings$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ShortStrings",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ShortStrings$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/utils/ShortStrings.sol:ShortStrings",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ShortStrings$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ShortStrings",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ShortStrings$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/utils/ShortStrings.sol:ShortStrings",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ShortStrings$Type["abi"]>>;
}