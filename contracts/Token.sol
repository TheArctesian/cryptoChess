// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Token{
    //Constructer 
    //Run whenever smart contract is deployed
    uint256 public totalSupply;

    function token () public{
        totalSupply = 1000000;
    }

    //because pulbic uses the getter and setter provided by solidity
    /*
        function totalSupply() public view returns (uint256)
    */
}