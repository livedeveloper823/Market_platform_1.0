import React from "react";
import { content } from "../contents/landing";
import Button from "./Button";
import { SearchIcon } from "./icons";
import SignInModal from "./SignInModal";

const Navbar = () => {
    const [inOpen, setInOpen] = React.useState(false);
    const [upOpen, setUpOpen] = React.useState(false);

    const handleInClick = () => {
        setInOpen(!inOpen);
    };
    const handleUpClick = () => {
        setUpOpen(!upOpen);
    };

    return (
        <div>
            <div className="flex justify-between items-center px-5 py-2">
                <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
                <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />
                <div className="flex w-[50vw] gap-5 px-2 py-1 items-center border border-gray-700 rounded-lg">
                    <SearchIcon color="black" />
                    <input type="text" className="w-full outline-none" placeholder="Search markets" />
                </div>
                <div className="flex gap-6 items-center">
                    <div className="flex gap-2">
                        {content.iconBtns.map((item, index) =>
                            <Button key={index} text={item.text} value={item.value} icon={<item.icon />} onClick={() => { }} className="flex flex-col items-center text-gray-600 hover:text-black text-xs hover:bg-gray-300  rounded-sm px-2 py-1" />)}
                    </div>
                    <div className="flex gap-3">
                        <Button text="Log In" value="login" className="text-blue-700 hover:bg-gray-300 px-3 py-1 rounded-md" onClick={handleInClick} icon />
                        <Button text="Sign Up" value="signup" className="bg-blue-700 hover:bg-blue-600 text-white px-3 rounded-md" onClick={handleUpClick} icon />
                    </div>
                </div>
            </div>
            {/* Navigates */}
            <div className="flex gap-3">
                {
                    content.menuBtns.map((item, index) => <Button key={index} text={item.text} value={item.value} onClick={() => { }} className="px-2 py-1 border-b-2 border-white hover:border-b-gray-500 focus:border-b-black rounded-sm" icon />)
                }
            </div>
        </div>
    )
}

export default Navbar;