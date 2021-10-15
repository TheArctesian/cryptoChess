// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Arc{
    //Constructer 
    //Run whenever smart contract is deployed
    uint256 public totalSupply;
    string public name;
    string public symbol;

    function _totalSupply() public{
        totalSupply = 10000000;
    }

    function _name() public{
        name = "ArchCoin";
    }
    function _symbol() public{
        symbol = "ARC";
    }
}