import { ethers } from "ethers"
import { useEffect, useState } from "react"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"
import GetEducation from "./GetEducation"
import GetCertificate from "./GetCertificate"
import GetWorkingExperience from "./GetWorkingExperience"

const userAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"

const PersonalInformation = (props) => {
    const [name, setName] = useState()
    const [sex, setSex] = useState()
    const [height, setHeight] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [birthday, setBirthday] = useState()
    const [linkedInURL, setLinkedInURL] = useState()
    const [walletConnected, setWalletConnected] = useState(false)

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    async function _intializeContract(init) {
        const contract = new ethers.Contract(userAddress, UserArtifact.abi, init)
        return contract
    }

    async function getInformation() {
        if (typeof window.ethereum !== "undefined") {
            const contract = await _intializeContract(signer)
            const name = await contract.getName()
            setName(name)
            console.log("User name: ", name)
            const sex = (await contract.getSex()).toString()
            setSex(sex)
            console.log("User sex : ", sex)
            const height = (await contract.getHeight()).toString()
            setHeight(height)
            console.log("User Height : ", height)
            const email = await contract.getEmail()
            setEmail(email)
            console.log("User Email : ", email)
            const birthday = await contract.getBirthday()
            setBirthday(birthday)
            console.log("User Birthday : ", birthday)
            const phoneNumber = await contract.getPhoneNumber()
            setPhoneNumber(phoneNumber)
            console.log("User Phone Number : ", phoneNumber)
            const linkedInURL = await contract.getLinkedInURL()
            setLinkedInURL(linkedInURL)
            console.log("User LinkedIn URL : ", linkedInURL)
        }
    }
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            getInformation()
        }
    }, [typeof window.ethereum !== "undefined"])

    useEffect(() => {
        // Check if wallet is connected
        if (typeof window.ethereum !== "undefined") {
            console.log("message here")
            setWalletConnected(true)
        }
    }, [])

    console.log(`wallet connect: ${walletConnected}`)
    return (
        <div>
            {walletConnected ? (
                <div class="px-72 py-20 space-y-4 divide-y-4 divide-dashed divide-blue-400 bg-gray-200">
                    <div>
                        <h2 className="text-3xl font-bold underline text-center">
                            Personal Information
                        </h2>
                        <p class="pt-6 font-bold text-xl">Profile Address: {props.userAddress} </p>
                        <p class="pt-6 font-bold text-xl">User Name: {name} </p>
                        <p class="pt-2 font-bold text-xl">User Sex: {sex} </p>
                        <p class="pt-2 font-bold text-xl">User Email: {email} </p>
                        <p class="pt-2 font-bold text-xl">User Phone Number: {phoneNumber} </p>
                        <p class="pt-2 font-bold text-xl">User LinkedIn URL: {linkedInURL} </p>
                        <p class="pt-2 font-bold text-xl">User Height: {height} </p>
                        <p class="pt-2 font-bold text-xl">
                            User Birthday (YYYY/MM/DD): {birthday}{" "}
                        </p>
                    </div>
                    <div class="py-5">
                        <GetEducation />
                    </div>
                    <div class="py-5">
                        <GetCertificate />
                    </div>
                    <div class="py-5">
                        <GetWorkingExperience />
                    </div>
                </div>
            ) : (
                <p>Please Connect Wallet First !</p>
            )}
        </div>
    )
}
export default PersonalInformation
