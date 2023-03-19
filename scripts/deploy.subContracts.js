const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;
  const lockedAmount = hre.ethers.utils.parseEther("0.001");
  const subContract = await hre.ethers.getContractFactory("Lock");
  const subContractInstance = await subContract.deploy(unlockTime, { value: lockedAmount });

  const addressText = `${subContractInstance.address}\n`;

  fs.appendFile("contractAddresses.txt", addressText, err => { console.log(err) })

}

main().catch((error) => {
  console.error(error, "Error encountered");
  process.exitCode = 1;
});
