import React, { useState, useEffect } from "react"
import { ethers } from "ethers"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"

const userAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"

const AddEducation = () => {
    const [school, setSchool] = useState()
    const [degree, setDegree] = useState()
    const [major, setMajor] = useState()
    const [showNotification, setShowNotification] = useState(false)
    const [walletConnected, setWalletConnected] = useState(false)

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    async function _intializeContract(init) {
        const contract = new ethers.Contract(userAddress, UserArtifact.abi, init)
        return contract
    }

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" })
    }

    // Add Education
    async function addEducation() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.addEdu(school, degree, major)
            await transaction.wait()

            // Show notification
            setShowNotification(true)
            // Hide notification after 5 seconds
            setTimeout(() => {
                setShowNotification(false)
            }, 5000)

            console.log(` Added Education is:`)
            console.log(` School : ${school}`)
            console.log(` Degree : ${degree}`)
            console.log(` Major : ${major}`)
        }
    }

    useEffect(() => {
        // Check if wallet is connected
        if (typeof window.ethereum !== "undefined") {
            setWalletConnected(true)
        }
    }, [])

    return (
        <div class="px-72 py-20 bg-gray-200 pb-64">
            <h2 className="text-3xl font-bold underline text-center">Add Education</h2>
            <div class="pt-6">
                <div>
                    <p class="font-bold text-xl">School : </p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setSchool(e.target.value)}
                        placeholder="School"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Degree : </p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setDegree(e.target.value)}
                        placeholder="Degree"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Major : </p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setMajor(e.target.value)}
                        placeholder="Major"
                    />
                </div>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 "
                    onClick={addEducation}
                >
                    {" "}
                    Add{" "}
                </button>
                {showNotification && (
                    <div class="bg-orange-600 py-3 rounded-lg outline-blue-500 outline-offset-2 text-center text-slate-100">
                        <p class="text-xl">Adding Education completed!</p>
                        <p>Shool: {school}</p>
                        <p>Degree: {degree}</p>
                        <p>Major: {major}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default AddEducation
