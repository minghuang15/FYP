import React, { useState } from "react"
import { ethers } from "ethers"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"

const userAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

const InformationManagement = () => {
    const [name, setName] = useState()
    const [sex, setSex] = useState()
    const [height, setHeight] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [birthday, setBirthday] = useState()
    const [linkedInURL, setLinkedInURL] = useState()
    const [allowView, setAllowView] = useState()
    const [noAllowView, setNoAllowView] = useState()
    const [allowAddEdu, setAllowAddEdu] = useState()
    const [noAllowAddEdu, setNoAllowAddEdu] = useState()
    const [allowAddCer, setAllowAddCer] = useState()
    const [noAllowAddCer, setNoAllowAddCer] = useState()
    const [allowAddWE, setAllowAddWE] = useState()
    const [noAllowAddWE, setNoAllowAddWE] = useState()

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    async function _intializeContract(init) {
        const contract = new ethers.Contract(userAddress, UserArtifact.abi, init)
        return contract
    }

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" })
    }
    async function setUserName() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setName(name)
            await transaction.wait()
            console.log(`User Name is ${name}`)
        }
    }
    async function setUserSex() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setSex(sex)
            await transaction.wait()
            console.log(`User Sex is ${sex}`)
        }
    }
    async function setUserHeight() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setHeight(height)
            await transaction.wait()
            console.log(`User Height is ${height}`)
        }
    }
    async function setUserEmail() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setEmail(email)
            await transaction.wait()
            console.log(`User Email is ${email}`)
        }
    }
    async function setUserPhoneNumber() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setPhoneNumber(phoneNumber)
            await transaction.wait()
            console.log(`User Phone Number is ${phoneNumber}`)
        }
    }
    async function setUserBirthday() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setBirthday(birthday)
            await transaction.wait()
            console.log(`User Birthday is ${birthday}`)
        }
    }
    async function setUserLinkedInURL() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setLinkedInURL(linkedInURL)
            await transaction.wait()
            console.log(`User LinkedIn URL is ${linkedInURL}`)
        }
    }
    // set Address as Allowed View Address
    async function SetAllowView() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setAllowView(allowView)
            await transaction.wait()
            console.log(`Address has already set as Allowed View Address`)
        }
    }

    async function SetNoAllowView() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.noAllowView(noAllowView)
            await transaction.wait()
            console.log(`Address has already set as Not Allowed View Address`)
        }
    }
    // set Address Allowed Add Education
    async function SetAllowAddEdu() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setAllowAddEdu(allowAddEdu)
            await transaction.wait()
            console.log(`Address has already set as Allowed Add Education Address`)
        }
    }

    async function SetNoAllowAddEdu() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.noAllowAddEdu(noAllowAddEdu)
            await transaction.wait()
            console.log(`Address has already set as Not Allowed Add Education Address`)
        }
    }
    // set Address Allowed Add Certificate
    async function SetAllowAddCer() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setAllowAddCer(allowAddCer)
            await transaction.wait()
            console.log(`Address has already set as Allowed Add Certificate Address`)
        }
    }

    async function SetNoAllowAddCer() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.noAllowAddCer(noAllowAddCer)
            await transaction.wait()
            console.log(`Address has already set as Not Allowed Add Certificate Address`)
        }
    }
    // set Address Allowed Add Working Experience
    async function SetAllowAddWE() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.setAllowAddWE(allowAddWE)
            await transaction.wait()
            console.log(`Address has already set as Allowed Add Working Experience Address`)
        }
    }

    async function SetNoAllowAddWE() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.noAllowAddWE(noAllowAddWE)
            await transaction.wait()
            console.log(`Address has already set as Not Allowed Add Working Experience Address`)
        }
    }

    return (
        <div class="px-72 py-20 bg-gray-200">
            <h2 className="text-3xl font-bold underline text-center ">
                Personal Information Management
            </h2>
            <div class="pt-6">
                <p class="font-bold text-xl">Name : </p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="User Name"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 "
                    onClick={setUserName}
                >
                    Store
                </button>
            </div>
            <div class="pt-3">
                <p class="font-bold text-xl">Sex : </p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setSex(e.target.value)}
                    placeholder="User Sex"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={setUserSex}
                >
                    Store
                </button>
            </div>
            <div class="pt-3">
                <p class="font-bold text-xl">Height : </p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="User Height"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={setUserHeight}
                >
                    Store
                </button>
            </div>
            <div class="pt-3">
                <p class="font-bold text-xl">Email :</p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="User Email"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={setUserEmail}
                >
                    Store
                </button>
            </div>
            <div class="pt-3">
                <p class="font-bold text-xl">Phone :</p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="User Phone Number"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={setUserPhoneNumber}
                >
                    Store
                </button>
            </div>
            <div class="pt-3">
                <p class="font-bold text-xl">Birthday : (Year / Month / Day)</p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setBirthday(e.target.value)}
                    placeholder="User Birthday"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={setUserBirthday}
                >
                    Store
                </button>
            </div>
            <div class="pt-3">
                <p class="font-bold text-xl">Linkedin :</p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setLinkedInURL(e.target.value)}
                    placeholder="User LinkedIn URL"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={setUserLinkedInURL}
                >
                    Store
                </button>
            </div>
            <div class="pt-6">
                <h2 className="text-3xl font-bold underline text-center ">Permission Setting</h2>
            </div>
            {/* View Permission */}
            <div class="pt-6">
                <p class="font-bold text-xl">Authorize third-party to view profile</p>
                <p class="pt-1">(It means this address can view your profile !)</p>
                <input
                    class="ring-2 ring-sky-800 mt-5"
                    onChange={(e) => setAllowView(e.target.value)}
                    placeholder="Set Address Permissions"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={SetAllowView}
                >
                    Set Permission
                </button>
            </div>

            <div class="pt-3">
                <p class="font-bold text-xl">Delete Viewing Permission </p>
                <input
                    class="ring-2 ring-sky-800 mt-5"
                    onChange={(e) => setNoAllowView(e.target.value)}
                    placeholder="Set Address Permissions"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={SetNoAllowView}
                >
                    Set Permission
                </button>
            </div>

            {/* Add Education */}
            <div class="pt-3">
                <p class="font-bold text-xl">Authorize third-party to adding Eduaction</p>
                <p class="pt-1">(It means this address can add Education into your profile !)</p>
                <input
                    class="ring-2 ring-sky-800 mt-5"
                    onChange={(e) => setAllowAddEdu(e.target.value)}
                    placeholder="Set Address Permissions"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={SetAllowAddEdu}
                >
                    Set Permission
                </button>
            </div>

            <div class="pt-3">
                <p class="font-bold text-xl">Delete Adding Education Permission </p>
                <input
                    class="ring-2 ring-sky-800 mt-5"
                    onChange={(e) => setNoAllowAddEdu(e.target.value)}
                    placeholder="Set Address Permissions"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={SetNoAllowAddEdu}
                >
                    Set Permission
                </button>
            </div>
            {/* Add Certificate */}
            <div class="pt-3">
                <p class="font-bold text-xl">Authorize third-party to adding Certificate</p>
                <p class="pt-1">(It means this address can add certificate into your profile !)</p>
                <input
                    class="ring-2 ring-sky-800 mt-5"
                    onChange={(e) => setAllowAddCer(e.target.value)}
                    placeholder="Set Address Permissions"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={SetAllowAddCer}
                >
                    Set Permission
                </button>
            </div>

            <div class="pt-3">
                <p class="font-bold text-xl">Delete Adding Certificate Permission </p>
                <input
                    class="ring-2 ring-sky-800 mt-5"
                    onChange={(e) => setNoAllowAddCer(e.target.value)}
                    placeholder="Set Address Permissions"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={SetNoAllowAddCer}
                >
                    Set Permission
                </button>
            </div>
            {/* Add Working Experience */}
            <div class="pt-3">
                <p class="font-bold text-xl">Authorize third-party to adding Working Experience</p>
                <p class="pt-1">
                    (It means this address can add working experience into your profile !)
                </p>
                <input
                    class="ring-2 ring-sky-800 mt-5"
                    onChange={(e) => setAllowAddWE(e.target.value)}
                    placeholder="Set Address Permissions"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={SetAllowAddWE}
                >
                    Set Permission
                </button>
            </div>

            <div class="pt-3">
                <p class="font-bold text-xl">Delete Adding Working Experience Permission </p>
                <input
                    class="ring-2 ring-sky-800 mt-5"
                    onChange={(e) => setNoAllowAddWE(e.target.value)}
                    placeholder="Set Address Permissions"
                />
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8"
                    onClick={SetNoAllowAddWE}
                >
                    Set Permission
                </button>
            </div>
        </div>
    )
}

export default InformationManagement
