import { ethers } from "ethers"
import { useEffect, useState } from "react"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"

const userAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"

const GetEducation = (props) => {
    const [education, setEducation] = useState(Array(3).fill("Null"))

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    async function _intializeContract(init) {
        const contract = new ethers.Contract(userAddress, UserArtifact.abi, init)
        return contract
    }

    async function getEducation() {
        if (typeof window.ethereum !== "undefined") {
            const contract = await _intializeContract(signer)
            const education = await contract.getEdu()
            setEducation(education)
            console.log(education)
            education.forEach((edu) => {
                const school = edu.school
                const degree = edu.degree
                const major = edu.major
            })
        }
    }
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            getEducation()
        }
    }, [typeof window.ethereum !== "undefined"])

    return (
        <div>
            <h2 className="text-3xl font-bold underline text-center">Education</h2>
            <div class="pt-6 ">
                <table class="table-auto border-separate border-slate-500 border-indigo-600 border-4">
                    <thead>
                        <tr>
                            <th class="border border-slate-600 px-8 text-xl">School</th>
                            <th class="border border-slate-600 px-8 text-xl">Degree</th>
                            <th class="border border-slate-600 px-8 text-xl">Major</th>
                        </tr>
                    </thead>
                    <tbody>
                        {education.map((edu) => (
                            <tr key={edu.id}>
                                <td class="border border-slate-700 text-center font-bold">
                                    {edu.school}
                                </td>
                                <td class="border border-slate-700 text-center font-bold">
                                    {edu.degree}
                                </td>
                                <td class="border border-slate-700 text-center font-bold">
                                    {edu.major}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default GetEducation
