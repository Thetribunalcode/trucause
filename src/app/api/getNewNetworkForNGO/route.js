import { ethers } from "ethers";
import axios from "axios";
// contract abis
import { contractInstanceReturner } from "../../../../interfaces/networkMapperFunctions";
import mainContractAbi from "../../../../artifacts/contracts/NetworkMapper.sol/NetworkMapper.json";
// func imports
import { getSignerForNetwork } from "../../../../interfaces/signerAndProvider.js";
import { NextResponse } from "next/server";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

const mainContractAddress = process.env.NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS;

export async function GET(request) {
  const signer = getSignerForNetwork("mumbai", null);
  const instance = await contractInstanceReturner(mainContractAddress, signer);
  // console.log("instqance", instance);
  const newNetwork = await instance.getNewNetwork();
  console.log("newNetwork", newNetwork);
  // const network = await axios.get(
  //   `${apiURL}/networks/getEnumMapping?network=${newNetwork}`
  // );
  return NextResponse.json(newNetwork);
}
