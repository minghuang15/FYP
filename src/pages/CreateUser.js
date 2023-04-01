import React, { useState } from "react"
import { ethers } from "ethers"
import UserFactoryAddressArtifact from "../artifacts/contracts/UserFactory.sol/UserFactory.json"

const userFactoryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

const CreateUser = () => {
    const [name, setName] = useState()
    const [sex, setSex] = useState()
    const [height, setHeight] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [birthday, setBirthday] = useState()
    const [linkedInURL, setLinkedInURL] = useState()
    const [userAddress, setUseraddress] = useState()

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    async function _intializeContract(init) {
        const contract = new ethers.Contract(
            userFactoryAddress,
            UserFactoryAddressArtifact.abi,
            init
        )
        return contract
    }

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" })
    }

    async function Register() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.createUser(
                name,
                sex,
                phoneNumber,
                height,
                birthday,
                email,
                linkedInURL
            )
            await transaction.wait()
            console.log(`Create User contract successful !`)
        }
    }

    async function GetAddress() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const [account] = await window.ethereum.request({ method: "eth_requestAccounts" })
            const userAddress = (await contract.getUserAddress(account)).toString()
            setUseraddress(userAddress)
        }
    }

    return (
        <div class="px-72 py-20 bg-gray-200">
            <h2 className="text-3xl font-bold underline text-center"> Create User Profile</h2>
            <div>
                <div class="pt-6">
                    <p class="font-bold text-xl">Name : </p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="User Name"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Sex : </p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setSex(e.target.value)}
                        placeholder="User Sex"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Phone :</p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="User Phone Number"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Email :</p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="User Email"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Linkedin :</p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setLinkedInURL(e.target.value)}
                        placeholder="User LinkedIn URL"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Birthday : (Year / Month / Day)</p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setBirthday(e.target.value)}
                        placeholder="User Birthday"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Height : </p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="User Height"
                    />
                </div>

                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mt-8 ml-8"
                    onClick={Register}
                >
                    {" "}
                    Create{" "}
                </button>
            </div>
            <div>
                <p class="font-bold text-xl">User Contract Address: {userAddress}</p>
                <button onClick={GetAddress}>Get</button>
            </div>
        </div>
    )
}

export default CreateUser
