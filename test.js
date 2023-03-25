// const { ethers } = require("ethers");
const { contractInstanceReturner, getSubContractAddressInNetwork, authenticateNGOAgainstNetwork, authenticateUser } = require("./interfaces/networkMapperFunctions")
const { getProviderForNetwork, getSignerForNetwork } = require("./interfaces/signerAndProvider");
require('dotenv').config({ path: __dirname + '/.env.local' })

// const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.blockpi.network/v1/rpc/public", networks[`${mumbai}`])
// const pk = `0x${process.env.NEXT_PUBLIC_PRIVATEKEY}`;
// const signer = new ethers.Wallet(`0x${process.env.NEXT_PUBLIC_PRIVATEKEY}`, provider)


// const contractInstance = contractInstanceReturner(address, signer);

// smart contract interaction - read from main contract, get the address
const testFunc = async () => {
  const address = "0x4801A47dC417FeAC8B557BF785D7e46Bd00D24c5"
  const signer = getSignerForNetwork("mumbai", null);
  const provider = getProviderForNetwork("mumbai");
  console.log("provider", provider.call)
  const contractInstance = contractInstanceReturner(address, signer);
  const NGOAddress = "0x168a40fa5495Ff7F92fCEb743A10984E409bb444";
  // console.log("ngo address : ", NGOAddress);
  const NGOinNetworkGnosis = await authenticateNGOAgainstNetwork(contractInstance, "gnosis", NGOAddress);
  // console.log("ngo exists in network ? ", NGOinNetworkGnosis);
  const volunteerAddress = "0x68D3416b33d52390eA76923dCEbd3926Bd10BECF";
  // console.log("volunteer address : ", volunteerAddress);
  const volunteer = await authenticateUser(contractInstance, volunteerAddress);
  // console.log("volunteer exists ? ", volunteer);
}


// get provider or signer for transactions
// const testFunc = async () => {
//   const provider = getProviderForNetwork("gnosis");
//   console.log("gnosis provider", provider);
//   const signer = getSignerForNetwork("gnosis", null);
//   console.log("gnosis signer", signer)
// }



testFunc()
