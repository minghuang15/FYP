// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./User.sol";

contract UserFactory {
    mapping(address => User) _users;

    function createUser(
        string memory _name,
        string memory _sex,
        string memory _phoneNumber,
        uint _height,
        string memory _birthday,
        string memory _email,
        string memory _linkedInURL
    ) public {
        require(address(_users[msg.sender]) == address(0), "already have User");
        _users[msg.sender] = new User(
            msg.sender,
            _name,
            _sex,
            _phoneNumber,
            _email,
            _linkedInURL,
            _birthday,
            _height
        );
    }

    function getUserAddress(address caller) public view returns (address) {
        require(address(_users[caller]) != address(0));
        return address(_users[caller]);
    }

    function IsHaveProfile(address caller) public view returns (bool) {
        return (address(_users[caller]) != address(0));
    }
}
