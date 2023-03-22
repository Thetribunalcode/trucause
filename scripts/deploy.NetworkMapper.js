const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const NetworkMapper = await hre.ethers.getContractFactory("NetworkMapper");

  // prepare addresses array to pass to constructor
  const data = fs.readFileSync("contractAddresses.txt", "utf8");
  let lines = data.split("\n");
  if (lines[lines.length - 1] !== '' || lines[lines.length - 1] !== null) {
    lines = lines.slice(0, -1)
  }
  console.log("lines before transformation", lines)
  let address;
  lines = lines.map((line) => {
    address = line.substring((line.indexOf(":") + 1));
    return address == "" ? "0x0000000000000000000000000000000000000000" : address;
  })
  console.log("lines after transformation", lines);

  // prepare chainID array to pass to constructor
  const chainIDArray = [3141, 100, 534353, 420];

  const networkMapperInstance = await NetworkMapper.deploy(lines, chainIDArray);
  await networkMapperInstance.deployed();

  const addressText = `mumbai:${networkMapperInstance.address}\n`;
  fs.writeFile("contractAddresses.txt", addressText, err => { console.log(err) })
  console.log(`Contract NetworkMapper.sol deployed to ${addressText}, contains addresses of other contracts on each chain`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
