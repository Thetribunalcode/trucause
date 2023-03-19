const hre = require("hardhat");

async function main() {

  const NetworkMapper = await hre.ethers.getContractFactory("NetworkMapper");
  const networkMapperInstance = await NetworkMapper.deploy();
  await networkMapperInstance.deployed();

  console.log(`Contract NetworkMapper.sol deployed to ${networkMapperInstance.address}, contains addresses of other contracts on each chain`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
