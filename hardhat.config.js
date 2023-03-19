require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: __dirname + '/.env.local' })
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY]
    },
    filecoinHyperspace: {
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY]
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY]
    },
    scroll: {
      url: "https://alpha-rpc.scroll.io/l2",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY]
    },
    polygonZK: {
      url: "https://rpc.public.zkevm-test.net",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY]
    },
    optimism: {
      url: "https://endpoints.omniatech.io/v1/op/goerli/public",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY]
    }
  },
};
