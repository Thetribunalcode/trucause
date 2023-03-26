import { ethers } from "ethers";
import SubContractJson from "../artifacts/contracts/SubContract.sol/SubContract.json";

const { abi } = SubContractJson;

const contractInstanceReturner = (address, signerOrProvider) => {
  const subContractInstance = new ethers.Contract(address, abi, signerOrProvider);
  return subContractInstance;
}

export { contractInstanceReturner };
