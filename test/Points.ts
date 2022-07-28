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
    const pointsDeploy = await Points.deploy("100")
    await pointsDeploy.deployed()
    expect(await pointsDeploy.totalSupply()).to.equal("100");
  })

  describe('Contract function tests', () => {

    describe('Basic tests', () => {
      beforeEach(async () => {
        [ owner, user1 ] = await ethers.getSigners();
        const Points = await ethers.getContractFactory("Points");
        points = await Points.deploy("100")
        await points.deployed()
      })

      it('should return the balance of a given address', async () => {
        expect(await points.balanceOf(owner.address)).to.equal("100");
      })

      it('should mint points when requested', async () => {
        await points.mintPoints("1000", user1.address)
        expect(await points.balanceOf(user1.address)).to.equal("1000");
      })

      it('should only mint points from contract owners address', () => {
        expect(points.mintPoints("1000", user1.address)).to.be.rejectedWith(/revert/)
      })

    })
  })

})