import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { Points } from "../typechain-types/index"

describe('Points contract tests', () => {

  let points: Points;
  let owner: SignerWithAddress
  let user1: SignerWithAddress

  it('Should deploy', async () => {
    const Points = await ethers.getContractFactory("Points");
    const points = await Points.deploy("100")
    expect(await points.totalSupply()).to.equal("100");
  })

})