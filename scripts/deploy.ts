import { ethers } from "hardhat";

async function main() {
  const [ owner ] = await ethers.getSigners();
  const Points = await ethers.getContractFactory("Points");
  const points = await Points.deploy("0");

  await points.deployed();

  console.log("Contract deployed by: ", owner.address);
  console.log("Contract deployed to: ", points.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
