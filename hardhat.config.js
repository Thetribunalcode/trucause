require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: [process.env.PRIVATEKEY1]
    }
  },
};
