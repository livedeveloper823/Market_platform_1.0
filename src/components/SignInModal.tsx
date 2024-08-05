import React, { useState } from "react";
import instance from "../utils/axios";
import { ModalProps } from "../types";
import { GoogleIcon } from "./icons";
import useAuth from "../hooks/useAuth";
import useNotification from "../hooks/useNotification";



const SignInModal = ({ isOpen, onClose, title }: ModalProps) => {
    const { showNotification } = useNotification()

    const { login, register, isLoggedIn } = useAuth()

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    if (!isOpen) return null;
    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Prevent the onClose function from being called when clicking inside the modal content
        event.stopPropagation();
    };
    const handleClick = () => {
        if (title == "Sign In") {
            if (!isLoggedIn) {
                login(userData.email, userData.password)
                showNotification("Successfully logined!", "success")

            }
            onClose()
        } else {
            register(userData.email, userData.password, userData.firstName, userData.lastName)
            // instance.post("/auth/register", userData)
            //     .then().catch((error) => console.log(error))
            onClose()
        }
    }
    const googleSignIn = () => {
        instance.get("/auth/google")
        onClose()
    }
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <div onClick={handleModalClick}
                style={{
                    zIndex: 9999,
                    background: "white",
                    width: 550,
                    margin: "auto",
                    padding: "2%",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                <div className="flex flex-col gap-3 ">
                    <p className="text-center text-3xl font-bold">{title}</p>
                    <div className="cursor-pointer flex flex-row mt-5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg w-[100%] h-[80px]" onClick={() => googleSignIn()}>
                        <div className="flex items-center justify-center ml-2 my-auto w-[50px] h-[50px] bg-white rounded-lg">
                            <GoogleIcon />
                        </div>
                        <div className="flex flex-col my-auto ml-5">
                            <p className="text-white text-1xl font-bold ">Continue with Google</p>
                            <p className="text-white text-sm">Quick Sign-in</p>
                        </div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <input type="email" className="py-2 pl-3 border border-gray-300 rounded-lg w-[70%] bg-white " placeholder="Email address" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        <div className="ml-2 font-bold text-black bg-gray-200 w-[30%] rounded-lg text-1xl flex items-center justify-center cursor-pointer hover:bg-green-500" onClick={() => handleClick()}>Continue</div>
                    </div>
                    {title === "Sign Up" ?
                        <div className="flex flex-col gap-3 justify-between">
                            <div className="flex gap-2 flex-row justify-between">
                                <input type="text" className="w-full pl-3 border border-gray-300 rounded-lg bg-white py-2" placeholder="First Name" onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
                                <input type="text" className="w-full pl-3 border border-gray-300 rounded-lg bg-white py-2" placeholder="Last Name" onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                            </div>
                            <input type="password" className="pl-3 border border-gray-300 rounded-lg bg-white py-2" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </div> :
                        <div>
                            <input type="password" className=" w-full mt-2 pl-3 border border-gray-300 rounded-lg bg-white py-2" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </div>}
                    <p className="border-b-2 pb-2 text-center text-1xl mt-5"> Privacy Terms</p>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;