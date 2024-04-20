// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Arrays$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Arrays",
  "sourceName": "@openzeppelin/contracts/utils/Arrays.sol",
  "abi": [],
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220793c6ad83d827c73127614b422a36d96b65e8ad196c643c779862d80a47df69664736f6c63430008180033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220793c6ad83d827c73127614b422a36d96b65e8ad196c643c779862d80a47df69664736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Arrays",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Arrays$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/utils/Arrays.sol:Arrays",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Arrays$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Arrays",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Arrays$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/utils/Arrays.sol:Arrays",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Arrays$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Arrays",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Arrays$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/utils/Arrays.sol:Arrays",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Arrays$Type["abi"]>>;
}