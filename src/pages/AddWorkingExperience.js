import React, { useState } from "react"
import { ethers } from "ethers"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"

const userAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"

const AddWorkingExperience = () => {
    const [nameOfCompany, setNameOfCompany] = useState()
    const [duration, setDuration] = useState()
    const [position, setPosition] = useState()
    const [showNotification, setShowNotification] = useState(false)

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    async function _intializeContract(init) {
        const contract = new ethers.Contract(userAddress, UserArtifact.abi, init)
        return contract
    }

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" })
    }

    // Add Working Experience
    async function addWorkingExperience() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.addWE(nameOfCompany, duration, position)
            await transaction.wait()

            // Show notification
            setShowNotification(true)
            // Hide notification after 5 seconds
            setTimeout(() => {
                setShowNotification(false)
            }, 5000)

            console.log(` Added Working Experience is:`)
            console.log(` Name of Company : ${nameOfCompany}`)
            console.log(` Duration : ${duration}`)
            console.log(` Position : ${position}`)
        }
    }

    return (
        <div class="px-72 py-20 bg-gray-200 pb-64">
            <h2 className="text-3xl font-bold underline text-center">Add Working Experience</h2>
            <div class="pt-6">
                <p class="font-bold text-xl">Name of Certificate : </p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setNameOfCompany(e.target.value)}
                    placeholder="Name of Company"
                />
            </div>
            <div class="pt-3">
                <p class="font-bold text-xl">Duration : </p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration"
                />
            </div>
            <div class="pt-3">
                <p class="font-bold text-xl">Position : </p>
                <input
                    class="ring-2 ring-sky-800 mt-3"
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="Position"
                />
            </div>
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 "
                onClick={addWorkingExperience}
            >
                {" "}
                Add{" "}
            </button>
            {showNotification && (
                <div class="bg-orange-600 py-3 rounded-lg outline-blue-500 outline-offset-2 text-center text-slate-100">
                    <p class="text-xl">Adding Working Experience completed!</p>
                    <p>Company: {nameOfCompany}</p>
                    <p>Duration: {duration}</p>
                    <p>Position: {position}</p>
                </div>
            )}
        </div>
    )
}
export default AddWorkingExperience
