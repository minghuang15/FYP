import "./App.css"
import { useEffect, useState } from "react"
import PersonalInformation from "./pages/PersonalInformation.js"
import Home from "./pages/Home.js"
import InformationManagement from "./pages/InformationManagement.js"
import AddEducation from "./pages/AddEducation.js"
import AddCertificate from "./pages/AddCertificate.js"
import AddWorkingExperience from "./pages/AddWorkingExperience.js"
import Layout from "./pages/Layout.js"
import CreateUser from "./pages/CreateUser.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserArtifact from "./artifacts/contracts/User.sol/User.json"
import { ethers } from "ethers"

// const userAddress = "0x61c36a8d610163660E21a8b7359e1Cac0C9133e1"

function App() {
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // const signer = provider.getSigner()

    const [isLogined, setIsLogined] = useState(false)
    const [userAddress, setUserAddress] = useState("")

    // const [isAllowView, setIsAllowView] = useState()
    // const [isAllowAddEdu, seIsAllowAddEdu] = useState()
    // const [isAllowAddCer, setIsAllowAddCer] = useState()
    // const [isAllowAddWE, setIsAllowAddWE] = useState()

    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // const signer = provider.getSigner()

    // async function _intializeContract(init) {
    //     const contract = new ethers.Contract(profileAddress, UserArtifact.abi, init)
    //     return contract
    // }
    // async function getIdentification() {
    //     const contract = await _intializeContract(signer)
    //     const isAllowView = await contract.isAllowView()
    //     console.log(isAllowView)
    //     setIsAllowView(isAllowView)
    // }

    // useEffect(() => {
    //     getIdentification()
    // }, [profileAddress])

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Layout isLogined={isLogined} userAddress={userAddress} />}
                >
                    <Route
                        path=""
                        element={
                            <Home setIsLogined={setIsLogined} setUserAddress={setUserAddress} />
                        }
                    />
                    <Route
                        path="PersonalInformation"
                        element={<PersonalInformation userAddress={userAddress} />}
                    />
                    <Route path="AddEducation" element={<AddEducation />} />
                    <Route path="AddCertificate" element={<AddCertificate />} />
                    <Route path="AddWorkingExperience" element={<AddWorkingExperience />} />
                    <Route path="InformationManagement" element={<InformationManagement />} />
                    <Route path="CreateUser" element={<CreateUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
