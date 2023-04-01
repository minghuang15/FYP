import React, { useState } from "react"
import { ethers } from "ethers"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"

const userAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"

const AddCertificate = () => {
    const [nameOfcertificate, setNameOfcertificate] = useState()
    const [grade, setGrade] = useState()
    const [date, setDate] = useState()
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

    // Add Education
    async function addCertificate() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount()
            const contract = await _intializeContract(signer)
            const transaction = await contract.addCer(nameOfcertificate, grade, date)
            await transaction.wait()

            // Show notification
            setShowNotification(true)
            // Hide notification after 5 seconds
            setTimeout(() => {
                setShowNotification(false)
            }, 5000)
            console.log(` Added Certificate is:`)
            console.log(` Name of Certificate : ${nameOfcertificate}`)
            console.log(` Grade : ${grade}`)
            console.log(` Date : ${date}`)
        }
    }

    return (
        <div class="px-72 py-20 bg-gray-200 pb-64">
            <h2 className="text-3xl font-bold underline text-center"> Add Certificate</h2>
            <div>
                <div class="pt-6">
                    <p class="font-bold text-xl">Name of Certificate : </p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setNameOfcertificate(e.target.value)}
                        placeholder="Name of Certificate"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Grade : </p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setGrade(e.target.value)}
                        placeholder="Grade"
                    />
                </div>
                <div class="pt-3">
                    <p class="font-bold text-xl">Date : (Year/ Month/ Day)</p>
                    <input
                        class="ring-2 ring-sky-800 mt-3"
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Date"
                    />
                </div>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 "
                    onClick={addCertificate}
                >
                    Add
                </button>
                {showNotification && (
                    <div class="bg-orange-600 py-3 rounded-lg outline-blue-500 outline-offset-2 text-center text-slate-100">
                        <p class="text-xl">Adding Certificate completed!</p>
                        <p>Certificate: {nameOfcertificate}</p>
                        <p>Grade: {grade}</p>
                        <p>Date: {date}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default AddCertificate
