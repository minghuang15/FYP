import { useSlotProps } from "@mui/base"
import { useState, useEffect } from "react"
import { Outlet, Link } from "react-router-dom"
import { ethers } from "ethers"
import UserArtifact from "../artifacts/contracts/User.sol/User.json"

const Layout = (props) => {
    // const [isAllowView, setIsAllowView] = useState()
    // const [isAllowAddEdu, setIsAllowAddEdu] = useState()
    // const [isAllowAddCer, setIsAllowAddCer] = useState()
    // const [isAllowAddWE, setIsAllowAddWE] = useState()

    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // const signer = provider.getSigner()

    // async function _intializeContract(init) {
    //     const contract = new ethers.Contract(props.userAddress, UserArtifact.abi, init)
    //     return contract
    // }
    // async function getIdentification() {
    //     const contract = await _intializeContract(signer)
    //     const isAllowView = await contract.isAllowView()
    //     setIsAllowView(isAllowView)
    // }
    // useEffect(() => {
    //     getIdentification()
    // }, [])

    // check the authentication status

    // if logined, render the nav
    // else render empty bar

    // ensure that the user has logined
    const identity = "owner"

    if (props.isLogined) {
        const clickables = () => {
            if (identity === "owner") {
                return (
                    <ul class="flex ">
                        <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/"> Home </Link>
                        </li>
                        <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/PersonalInformation"> Profile </Link>
                        </li>
                        <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/InformationManagement"> InformationManagement </Link>
                        </li>
                        {/* <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/AddEducation"> Add Education </Link>
                        </li>
                        <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/AddCertificate"> Add Certificate </Link>
                        </li>
                        <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/AddWorkingExperience"> Add Working Experience </Link>
                        </li> */}
                    </ul>
                )
            } else if (identity === "University") {
                return (
                    <ul class="flex ">
                        <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/"> Home </Link>
                        </li>
                        <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/PersonalInformation"> Personal Information</Link>
                        </li>
                        <li class=" mr-14 text-xl text-gray-100">
                            <Link to="/AddEducation"> Add Education </Link>
                        </li>
                    </ul>
                )
            }
        }

        return (
            <div>
                <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
                    <div>{clickables()}</div>
                </nav>

                <Outlet />
            </div>
        )
    } else {
        return (
            <div>
                <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6"></nav>
                <Outlet />
            </div>
        )
    }
}

export default Layout
