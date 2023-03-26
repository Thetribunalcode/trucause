// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {HyperlaneConnectionClient} from "@hyperlane-xyz/core/contracts/HyperlaneConnectionClient.sol";

contract SubContract is HyperlaneConnectionClient {
    // events that NGOs have can be of two types
    enum typeOfEvent {
        shortTermEvent, // 1 or 2 day event
        longTermEvent // usually week or month long
    }

    mapping(address => mapping(uint16 => uint8)) listOfVolunteerHashes; // each volunteer (address), for a particular event is assigned a hash

    // the activity structure that stores metadata about each event
    struct short_activity {
        string name; // name of the event
        string location;
        uint256 shiftStartTime; // when the shift starts, volunteer clocks in
        uint256 shiftEndTime; // when the shift ends, volunteer clocks out, or gets auto-clocked out
    }

    struct long_activity {
        string name; // name of the event
        string location;
        uint256 shiftStartTime; // when the shift starts, volunteer clocks in
        uint256 shiftEndTime; // when the shift ends, volunteer clocks out, or gets auto-clocked out
        string startDate;
        string endDate;
    }

    long_activity[] long_act;
    short_activity[] short_act;

    function addShortActivity( string memory name, uint256 shiftStartTime , uint256 shiftEndTime , string memory location ) public {          
            short_act.push(short_activity(name, location, shiftStartTime , shiftEndTime));
    }
    
    function getShortActivities() public view returns(short_activity[] memory) {
        // check if candidate exists
        return ( short_act );
    }

    function addLongActivity( string memory name, uint256 shiftStartTime , uint256 shiftEndTime , string memory location , string memory startDate , string memory endDate ) public {          
            long_act.push(long_activity(name, location, shiftStartTime , shiftEndTime , startDate , endDate));
    }

    function getLongActivities() public view returns(long_activity[] memory) {
        // check if candidate exists
        return ( long_act );
    }

    // each NGO has some metadata, like the owner address and the list of activities they have
    struct NGODetails {
        string name;
        short_activity[] short_activities;
        long_activity[] long_activities;
    }

    mapping(address => NGODetails) public listOfNGOs; // each NGO (owner address) is mapped to their own metadata and list of events

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
