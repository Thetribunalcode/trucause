// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NetworkMapper is Ownable {
    mapping(string => address) public contractAddresses;

    mapping(address => string) public NGOToNetworkMapping; // maps each NGO to a particular network, used to authenticate and route the NGO to their chain-specific contract

    // location parameter for both ngo and user to match

    struct userMetadata {
        string name;
        uint256 balance;
        uint8 age;
    }

    mapping(address => userMetadata) public userMapping; // user metadata for auth and verification

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

    function setNGONetworkMapping(
        string memory _networkName,
        address _NGOAddress
    ) public onlyOwner {
        NGOToNetworkMapping[_NGOAddress] = _networkName;
    }

    function setUserMapping(
        string memory _name,
        uint8 _age,
        uint256 _balance,
        address _userAddress
    ) public onlyOwner {
        userMapping[_userAddress] = userMetadata(_name, _balance, _age);
    }
}
