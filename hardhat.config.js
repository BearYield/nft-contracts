require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity:  {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: process.env.MAINNET_ARCHIVE_RPC,
      }
    },
    mainnet: {
      chainId: 1,
      url: process.env.MAINNET_DEPLOY_RPC,
      accounts: [ process.env.MAINNET_DEPLOYER_KEY ]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
