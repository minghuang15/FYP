import React, { useEffect, useState } from "react"
import { Button } from "@material-ui/core"
import { ethers } from "ethers"

const provider = new ethers.providers.Web3Provider(window.ethereum)

const Home = (props) => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [userBalance, setUserBalance] = useState(null)

    const connectwalletHandler = () => {
        if (window.ethereum) {
            provider.send("eth_requestAccounts", []).then(async () => {
                await accountChangedHandler(provider.getSigner())
            })
        } else {
            setErrorMessage("Please Install MetaMask!!!")
        }
    }

    useEffect(() => {
        if (defaultAccount) {
            props.setIsLogined(true)
        }
    }, [defaultAccount])

    const accountChangedHandler = async (newAccount) => {
        const address = await newAccount.getAddress()
        setDefaultAccount(address)
        const balance = await newAccount.getBalance()
        setUserBalance(ethers.utils.formatEther(balance))
        await getuserBalance(address)
    }

    const getuserBalance = async (address) => {
        const balance = await provider.getBalance(address, "latest")
    }

    return (
        <div class="px-80 py-56 text-center bg-gray-200 ">
            <h1 class="text-3xl font-bold ">Welcome to Professional Profile Management System</h1>
            <Button
                class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded text-center mt-16"
                onClick={connectwalletHandler}
            >
                {defaultAccount ? "Connected!!" : "Connect"}
            </Button>
            <div>
                {defaultAccount ? (
                    <div class="py-20 px-20">
                        <h4 class="text-xl text-center font-bold"> Profile Address :</h4>
                        <input
                            class="ring-2 ring-sky-800 mt-3"
                            onchange={(e) => {
                                props.setUserAddress(e.target.value)
                            }}
                            placeholder={""}
                        />
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 ">
                            Visit
                        </button>
                        <h4 class="text-xl text-center font-bold mt-8">
                            Wallet Address : {defaultAccount}
                        </h4>
                        <div class="text-xl py-10 text-center font-bold">
                            <h3>Wallet Amount : {userBalance}</h3>
                        </div>
                    </div>
                ) : (
                    <p class="text-xl py-10 text-center font-bold">
                        {" "}
                        Please Connect Wallet First!
                    </p>
                )}
            </div>
            {errorMessage}
        </div>
    )
}
export default Home
