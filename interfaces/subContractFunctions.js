import { ethers } from "ethers";
import SubContractJson from "../artifacts/contracts/Lock.sol/Lock.json";

const { abi } = SubContractJson;

const contractInstanceReturner = (address, signerOrProvider) => {
  const subContractInstance = new ethers.Contract(address, abi, signerOrProvider);
  return subContractInstance;
}

export { contractInstanceReturner };
