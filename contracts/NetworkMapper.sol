// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NetworkMapper is Ownable {
    mapping(string => address) contractAddresses;

    constructor(address[] memory _contractAddresses) {
        // 0 is filecoinHyperspace
        contractAddresses["filecoinHyperspace"] = _contractAddresses[0];
        // 1 is gnosis
        contractAddresses["gnosis"] = _contractAddresses[1];
        // 2 is scroll
        contractAddresses["scroll"] = _contractAddresses[2];
        // 3 is optimism
        contractAddresses["optimism"] = _contractAddresses[3];
    }

    function changeAddressOfContract(
        string memory _networkName,
        address _contractAddress
    ) public onlyOwner {
        contractAddresses[_networkName] = _contractAddress;
    }

    function getAddressOfContract(string memory _networkName)
        public
        view
        returns (address)
    {
        return contractAddresses[_networkName];
    }
}
