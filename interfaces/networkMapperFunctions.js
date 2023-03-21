const { ethers } = require("ethers");
const NetworkMapperJson = require("../artifacts/contracts/NetworkMapper.sol/NetworkMapper.json");

const { abi } = NetworkMapperJson;

const contractInstanceReturner = (address, signerOrProvider) => {
  const networkMapperContractInstance = new ethers.Contract(address, abi, signerOrProvider);
  return networkMapperContractInstance;
}

const getSubContractAddressInNetwork = (contractInstance, network) => {
  return contractInstance.getAddressOfContract(network);
}

const setSubContractAddressInNetwork = (contractInstance, network, address) => {
  return contractInstance.changeAddressOfContract(network, address);
}

module.exports = { contractInstanceReturner, getSubContractAddressInNetwork, setSubContractAddressInNetwork };
