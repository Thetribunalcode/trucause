// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NetworkMapper is Ownable {
    mapping(string => address) contractAddresses;
    
    function changeAddressOfContract(
        string memory _networkName,
        address _contractAddress
    ) public onlyOwner {
        contractAddresses[_networkName] = _contractAddress;
    }

    function getAddressOfContract(string memory _networkName) public view 
        returns (address)
    {
        return contractAddresses[_networkName];
    }
}
