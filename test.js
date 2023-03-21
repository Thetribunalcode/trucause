// const { ethers } = require("ethers");
const { contractInstanceReturner, getSubContractAddressInNetwork } = require("./interfaces/networkMapperFunctions")
const { getProviderForNetwork, getSignerForNetwork } = require("./interfaces/signerAndProvider");
require('dotenv').config({ path: __dirname + '/.env.local' })

// const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.blockpi.network/v1/rpc/public", networks[`${mumbai}`])
// const pk = `0x${process.env.NEXT_PUBLIC_PRIVATEKEY}`;
// const signer = new ethers.Wallet(`0x${process.env.NEXT_PUBLIC_PRIVATEKEY}`, provider)


// const contractInstance = contractInstanceReturner(address, signer);

// smart contract interaction - read from main contract, get the address
// const testFunc = async () => {
//   const address = "0x5Ea910ce73A32f8DC961cdD218E53Ab640a434ae"
//   const signer = getSignerForNetwork("mumbai", null);
//   const contractInstance = contractInstanceReturner(address, signer);
//   const subContractAddressInNetworkGnosis = await getSubContractAddressInNetwork(contractInstance, "scroll");
//   console.log("gnosis", subContractAddressInNetworkGnosis);
// }


// get provider or signer for transactions
// const testFunc = async () => {
//   const provider = getProviderForNetwork("gnosis");
//   console.log("gnosis provider", provider);
//   const signer = getSignerForNetwork("gnosis", null);
//   console.log("gnosis signer", signer)
// }



// testFunc()
