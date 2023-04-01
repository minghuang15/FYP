import { ethers } from "ethers"
import { useEffect, useState } from "react"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"

const userAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"

const GetWorkingExperience = (props) => {
    const [workingExperience, setWorkingExperience] = useState(Array(3).fill("Null"))

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    async function _intializeContract(init) {
        const contract = new ethers.Contract(userAddress, UserArtifact.abi, init)
        return contract
    }

    async function getWorkingExperience() {
        if (typeof window.ethereum !== "undefined") {
            const contract = await _intializeContract(signer)
            const workingExperience = await contract.getWE()
            setWorkingExperience(workingExperience)
            console.log(workingExperience)
            workingExperience.forEach((wor) => {
                const nameOfCompany = wor.nameOfCompany
                const duration = wor.duration
                const position = wor.position
            })
        }
    }
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            getWorkingExperience()
        }
    }, [typeof window.ethereum !== "undefined"])

    return (
        <div>
            <h2 className="text-3xl font-bold underline text-center">Working Experience</h2>
            <div class="pt-6">
                <table class="table-auto border-separate border-slate-500 border-indigo-600 border-4">
                    <thead>
                        <tr>
                            <th class="border border-slate-600 px-8 text-xl">Name Of Company</th>
                            <th class="border border-slate-600 px-8 text-xl">Duration</th>
                            <th class="border border-slate-600 px-8 text-xl">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workingExperience.map((wor) => (
                            <tr key={wor.id}>
                                <td class="border border-slate-700 text-center font-bold">
                                    {wor.nameOfCompany}
                                </td>
                                <td class="border border-slate-700 text-center font-bold">
                                    {wor.duration}
                                </td>
                                <td class="border border-slate-700 text-center font-bold">
                                    {wor.position}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default GetWorkingExperience
