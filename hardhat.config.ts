import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
};

export default config;
