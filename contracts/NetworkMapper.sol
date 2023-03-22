// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import {HyperlaneConnectionClient} from "@hyperlane-xyz/core/contracts/HyperlaneConnectionClient.sol";
import {IMessageRecipient} from "@hyperlane-xyz/core/interfaces/IMessageRecipient.sol";

contract NetworkMapper is HyperlaneConnectionClient, IMessageRecipient {
    // a mapping to keep track of addresses of contracts on each chain
    mapping(string => address) public contractAddresses;

    // setup chain IDs for hyperlane, hardcoded values needed to validate if the chain is from the existing set
    mapping(uint32 => string) public domainIdentifiers;

    // a mapping to keep track of where a particular NGO's data is present
    mapping(string => string) public NGONetworkMapping;

    // event to be fired when subcontract from a chain recieves an NGO onboarding
    event subContractAddressReceived(
        uint32 _origin,
        bytes32 _sender,
        string _message
    );

    constructor(
        address[] memory _contractAddresses,
        uint32[] memory _chainIDArray
    ) {
        // 0 is filecoinHyperspace
        contractAddresses["filecoinHyperspace"] = _contractAddresses[0];
        domainIdentifiers[_chainIDArray[0]] = "filecoinHyperspace";
        // 1 is gnosis
        contractAddresses["gnosis"] = _contractAddresses[1];
        domainIdentifiers[_chainIDArray[1]] = "gnosis";
        // 2 is scroll
        contractAddresses["scroll"] = _contractAddresses[2];
        domainIdentifiers[_chainIDArray[2]] = "scroll";
        // 3 is optimism
        contractAddresses["optimism"] = _contractAddresses[3];
        domainIdentifiers[_chainIDArray[3]] = "optimism";
    }

    // ========================================== admin functions (change initial data)==========================================

    function changeAddressOfContract(
        string memory _networkName,
        address _contractAddress
    ) public onlyOwner {
        contractAddresses[_networkName] = _contractAddress;
    }

    function changeNetworkNameForChainID(
        string memory _networkName,
        uint32 _chainID
    ) public onlyOwner {
        domainIdentifiers[_chainID] = _networkName;
    }

    // ========================================== hyperlane receive function to receive NGO network onboarding requests ==========================================

    function handle(
        uint32 _origin,
        bytes32 _sender,
        bytes memory _message
    ) external override onlyMailbox {
        string memory NGOName = bytesArrayToString(_message);
        NGONetworkMapping[NGOName] = domainIdentifiers[_origin];
        emit subContractAddressReceived(_origin, _sender, NGOName);
    }

    function bytesArrayToString(bytes memory _bytes)
        internal
        pure
        returns (string memory)
    {
        return string(_bytes);
    }
}
