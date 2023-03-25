const { ethers } = require("ethers");
const NetworkMapperJson = require("../artifacts/contracts/NetworkMapper.sol/NetworkMapper.json");
const { abi } = NetworkMapperJson;

const contractInstanceReturner = (address, signerOrProvider) => {
  const networkMapperContractInstance = new ethers.Contract(address, abi, signerOrProvider);
  return networkMapperContractInstance;
}

const getSubContractAddressInNetwork = (contractInstance, network) => {
  return contractInstance.contractAddresses(network);
}

const setSubContractAddressInNetwork = (contractInstance, network, address) => {
  return contractInstance.changeAddressOfContract(network, address);
}

const authenticateNGOAgainstNetwork = async (contractInstance, network, address) => {
  const networkReturned = await contractInstance.NGOToNetworkMapping(address);
  if (network === networkReturned)
    return true
  else
    return false
}

const authenticateUser = async (contractInstance, address) => {
  const userMetadataReturned = await contractInstance.userMapping(address);
  if (userMetadataReturned.name !== "")
    return true
  else
    return false
}

const getUserData = (contractInstance, address) => {
  return contractInstance.usersMapping(address);
}

module.exports = { contractInstanceReturner, getSubContractAddressInNetwork, setSubContractAddressInNetwork, authenticateNGOAgainstNetwork, authenticateUser, getUserData };
