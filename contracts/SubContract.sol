// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {HyperlaneConnectionClient} from "@hyperlane-xyz/core/contracts/HyperlaneConnectionClient.sol";

contract NetworkMapper is HyperlaneConnectionClient {
    // events that NGOs have can be of two types
    enum typeOfEvent {
        shortTermEvent, // 1 or 2 day event
        longTermEvent // usually week or month long
    }

    mapping(address => mapping(uint16 => uint8)) listOfVolunteerHashes; // each volunteer (address), for a particular event is assigned a hash

    // the activity structure that stores metadata about each event
    struct activity {
        string name; // name of the event
        string startDate; // start date of the event
        string endDate; // end date of the event
        uint256 shiftStartTime; // when the shift starts, volunteer clocks in
        uint256 shiftEndTime; // when the shift ends, volunteer clocks out, or gets auto-clocked out
        uint256 shiftBufferTime; // the shift can be started or ended by volunteer in this buffer window, + or - the start and end time respectively
        address[] listOfRegisteredVolunteers;
    }

    // each NGO has some metadata, like the owner address and the list of activities they have
    struct NGODetails {
        string name;
        activity[] activities;
    }

    mapping(address => NGODetails) listOfNGOs; // each NGO (owner address) is mapped to their own metadata and list of events

    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }

    function relayNGOMappingToMainContract(
        uint32 _destination,
        address _recipient,
        address _NGOAddress
    ) external {
        // so that the main contract can keep track of where each NGO is, i.e, which chain some particular NGO's information is
        bytes memory _message = abi.encodePacked(_NGOAddress);
        mailbox.dispatch(_destination, addressToBytes32(_recipient), _message);
    }
}
