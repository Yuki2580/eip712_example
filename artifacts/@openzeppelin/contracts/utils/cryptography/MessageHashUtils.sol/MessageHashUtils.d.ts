// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface MessageHashUtils$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "MessageHashUtils",
  "sourceName": "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol",
  "abi": [],
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bdf6ac08341bc2c8c72c89b479b09c45d1cc23f4b55e7965962b8679a082214a64736f6c63430008180033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bdf6ac08341bc2c8c72c89b479b09c45d1cc23f4b55e7965962b8679a082214a64736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "MessageHashUtils",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<MessageHashUtils$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol:MessageHashUtils",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<MessageHashUtils$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "MessageHashUtils",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<MessageHashUtils$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol:MessageHashUtils",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<MessageHashUtils$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "MessageHashUtils",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<MessageHashUtils$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol:MessageHashUtils",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<MessageHashUtils$Type["abi"]>>;
}
