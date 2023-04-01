// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {
    string private _name;
    string private _sex;
    string private _phoneNumber;
    uint private _height;
    string private _birthday;
    string private _email;
    string private _linkedInURL;
    address private _owner;

    //Owner Permission
    function isOwenr() public view returns (bool) {
        return (msg.sender == _owner);
    }

    modifier onlyOwner() {
        require(isOwenr(), "Only Owner");
        _;
    }

    //Set View Permission
    mapping(address => bool) public AllowView;

    function setAllowView(address _address) public onlyOwner {
        AllowView[_address] = true;
    }

    function noAllowView(address _address) public onlyOwner {
        AllowView[_address] = false;
    }

    function isAllowView() public view returns (bool) {
        return AllowView[msg.sender];
    }

    modifier onlyView() {
        require(isAllowView(), "Not Allow View");
        _;
    }
    //Set Add Permission--Education
    mapping(address => bool) public AllowAddEdu;

    function setAllowAddEdu(address _address) public onlyOwner {
        AllowAddEdu[_address] = true;
    }

    function noAllowAddEdu(address _address) public onlyOwner {
        AllowAddEdu[_address] = false;
    }

    function isAllowAddEdu() public view returns (bool) {
        return AllowAddEdu[msg.sender];
    }

    modifier onlyAddEdu() {
        require(isAllowAddEdu(), "Not Allow Add Education");
        _;
    }
    //Set Add Permission--Certificate
    mapping(address => bool) public AllowAddCer;

    function setAllowAddCer(address _address) public onlyOwner {
        AllowAddCer[_address] = true;
    }

    function noAllowAddCer(address _address) public onlyOwner {
        AllowAddCer[_address] = false;
    }

    function isAllowAddCer() public view returns (bool) {
        return AllowAddCer[msg.sender];
    }

    modifier onlyAddCer() {
        require(isAllowAddCer(), "Not Allow Add Certificate");
        _;
    }
    //Set Add Permission--Working Experience
    mapping(address => bool) public AllowAddWE;

    function setAllowAddWE(address _address) public onlyOwner {
        AllowAddWE[_address] = true;
    }

    function noAllowAddWE(address _address) public onlyOwner {
        AllowAddWE[_address] = false;
    }

    function isAllowAddWE() public view returns (bool) {
        return AllowAddWE[msg.sender];
    }

    modifier onlyAddWE() {
        require(isAllowAddCer(), "Not Allow Add Certificate");
        _;
    }

    constructor(
        address owner,
        string memory name,
        string memory sex,
        string memory phoneNumber,
        string memory email,
        string memory linkedInURL,
        string memory birthday,
        uint height
    ) public {
        _owner = owner;
        _name = name;
        _sex = sex;
        _phoneNumber = phoneNumber;
        _height = height;
        _birthday = birthday;
        _email = email;
        _linkedInURL = linkedInURL;
        AllowView[_owner] = true;
    }

    struct Education {
        string _school;
        string _degree;
        string _major;
    }
    Education[] private education;

    function addEdu(
        string memory school,
        string memory degree,
        string memory major
    ) public onlyAddEdu {
        education.push(Education(school, degree, major));
    }

    function getEdu() public view onlyView returns (Education[] memory) {
        return education;
    }

    struct Certificate {
        string _nameOfcertificate;
        string _grade;
        string _date;
    }
    Certificate[] private certificate;

    function addCer(
        string memory nameOfCertificate,
        string memory grade,
        string memory date
    ) public onlyAddCer {
        certificate.push(Certificate(nameOfCertificate, grade, date));
    }

    function getCer() public view onlyView returns (Certificate[] memory) {
        return certificate;
    }

    struct WorkingExperience {
        string _nameOfCompany;
        string _duration;
        string _position;
    }
    WorkingExperience[] private workingExperience;

    function addWE(
        string memory nameOfCompany,
        string memory duration,
        string memory position
    ) public onlyAddWE {
        workingExperience.push(WorkingExperience(nameOfCompany, duration, position));
    }

    function getWE() public view onlyView returns (WorkingExperience[] memory) {
        return workingExperience;
    }

    function getName() public view onlyView returns (string memory) {
        return _name;
    }

    function getSex() public view onlyView returns (string memory) {
        return _sex;
    }

    function getPhoneNumber() public view onlyView returns (string memory) {
        return _phoneNumber;
    }

    function getHeight() public view onlyView returns (uint) {
        return _height;
    }

    function getBirthday() public view onlyView returns (string memory) {
        return _birthday;
    }

    function getEmail() public view onlyView returns (string memory) {
        return _email;
    }

    function getLinkedInURL() public view onlyView returns (string memory) {
        return _linkedInURL;
    }

    function setName(string memory name) public onlyOwner {
        _name = name;
    }

    function setSex(string memory sex) public onlyOwner {
        _sex = sex;
    }

    function setPhoneNumber(string memory phoneNumber) public onlyOwner {
        _phoneNumber = phoneNumber;
    }

    function setHeight(uint height) public onlyOwner {
        _height = height;
    }

    function setBirthday(string memory birthday) public onlyOwner {
        _birthday = birthday;
    }

    function setEmail(string memory email) public onlyOwner {
        _email = email;
    }

    function setLinkedInURL(string memory linkedInURL) public onlyOwner {
        _linkedInURL = linkedInURL;
    }
}
