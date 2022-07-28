// SPDX-License-Identifier: unlicensed
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Points is ERC20, Ownable {
  constructor(uint256 initialSupply) ERC20("LoyaltyPoints", "LTSP") {
    _mint(msg.sender, initialSupply);
  }

  function mintPoints(uint256 amount, address caller) public onlyOwner {
    _mint(caller, amount);
  }
}