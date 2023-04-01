import { ethers } from "ethers"
import { useEffect, useState } from "react"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"

const userAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"

const GetCertificate = (props) => {
    const [certificate, setCertificate] = useState(Array(3).fill("Null"))

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    async function _intializeContract(init) {
        const contract = new ethers.Contract(userAddress, UserArtifact.abi, init)
        return contract
    }

    async function getCertificate() {
        if (typeof window.ethereum !== "undefined") {
            const contract = await _intializeContract(signer)
            const certificate = await contract.getCer()
            setCertificate(certificate)
            console.log(certificate)
            certificate.forEach((cer) => {
                const nameOfcertificate = cer.nameOfcertificate
                const grade = cer.grade
                const date = cer.date
            })
        }
    }
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            getCertificate()
        }
    }, [typeof window.ethereum !== "undefined"])

    return (
        <div>
            <h2 className="text-3xl font-bold underline text-center">Certificate</h2>
            <div class="pt-6">
                <table class="table-auto border-separate border-slate-500 border-indigo-600 border-4">
                    <thead>
                        <tr>
                            <th class="border border-slate-600 px-8 text-xl">
                                Name Of Certificate
                            </th>
                            <th class="border border-slate-600 px-8 text-xl">Grade</th>
                            <th class="border border-slate-600 px-8 text-xl">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certificate.map((cer) => (
                            <tr key={cer.id}>
                                <td class="border border-slate-700 text-center font-bold">
                                    {cer.nameOfcertificate}
                                </td>
                                <td class="border border-slate-700 text-center font-bold">
                                    {cer.grade}
                                </td>
                                <td class="border border-slate-700 text-center font-bold">
                                    {cer.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default GetCertificate
