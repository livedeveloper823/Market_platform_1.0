import React from "react";
import useAuth from "../hooks/useAuth";
import SignInModal from "./SignInModal";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { AlignJustify, Grid3X3, House, Radio, Search, X } from "lucide-react";

const MobileFooter = () => {
    const navigate = useNavigate();
    const [isHidden, setIsHidden] = React.useState(false);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const [inOpen, setInOpen] = React.useState(false);
    const [upOpen, setUpOpen] = React.useState(false);
    const ref = React.useRef < HTMLDivElement | null > (null)
    const handleInClick = () => {
        setInOpen(!inOpen);
        setIsSidebarOpen(false)
    };
    const handleUpClick = () => {
        setUpOpen(!upOpen);
        setIsSidebarOpen(false)
    };
    const handleLogout = () => {
        navigate('/');
        logout()
    }
    const { isLoggedIn, logout } = useAuth();
 
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    const handleClickOutside = (event: MouseEvent) => {
        // Check if the click was outside the dropdown
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsSidebarOpen(false);
        }
    };

    React.useEffect(() => {
        // Add event listener for mouse down events
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsHidden(prevScrollPos > currentScrollPos && currentScrollPos > 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`fixed z-50 bottom-0 left-0 lg:hidden sm:w-full w-full border-2 bg-gray-100 text-white px-12 py-3 rounded-md transition-transform duration-300 ${isHidden ? 'transform translate-y-full' : ''}`}>
            {/* Sidebar */}
            <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
            <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />
            <div className={`fixed top-0 left-0 h-full  bg-white  text-black transition-all duration-300 ${isSidebarOpen ? 'w-[80vw]' : 'w-0 overflow-x-hidden'}`} ref={ref}>

                {/* <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}> */}


                <div className="mx-8 mt-4" >
                    {isLoggedIn &&
                        <div>
                            <Button onClick={() => navigate(`/activity`)} style={{ textTransform: 'none' }} className="flex flex-col shadow-none font-medium text-xl p-1 text-black outline-none items-center">
                                Profile
                            </Button>
                            <Button onClick={() => navigate(`/activity`)} style={{ textTransform: 'none' }} className="flex flex-col shadow-none font-medium text-xl p-1 text-black outline-none items-center">
                                Add fonds
                            </Button>
                        </div>
                    }
                    <Button onClick={() => navigate(`/elections`)} style={{ textTransform: 'none' }} className="flex flex-col shadow-none font-medium text-xl p-1 text-black outline-none items-center">
                        Election
                    </Button>
                    <Button onClick={() => navigate(`/leaderboard`)} style={{ textTransform: 'none' }} className="flex flex-col shadow-none font-medium text-xl p-1 text-black outline-none items-center">
                        Leadboard
                    </Button>
                    <Button onClick={() => navigate(`/activity`)} style={{ textTransform: 'none' }} className="flex flex-col shadow-none font-medium text-xl p-1 text-black outline-none items-center">
                        Activity
                    </Button>
                    <Button onClick={() => navigate(`/`)} style={{ textTransform: 'none' }} className="flex flex-col shadow-none font-medium text-xl p-1 text-black outline-none items-center">
                        Resources
                    </Button>
                    <Button onClick={() => navigate(`/`)} style={{ textTransform: 'none' }} className="flex flex-col shadow-none font-medium text-xl p-1 text-black outline-none items-center">
                        Rewards
                    </Button>
                </div>
                {!isLoggedIn ?
                    <div className="flex flex-col px-4 gap-2 ">
                        <Button onClick={handleInClick} style={{ textTransform: 'none' }} className="flex w-full justify-center font-medium text-lg shadow-none outline-none text-black border-gray-300 border bg-white  hover:bg-gray-300">
                            Log In
                        </Button>
                        <Button onClick={handleUpClick} style={{ textTransform: 'none' }} className="flex w-full justify-center font-medium text-lg shadow-none outline-none text-white  bg-blue-600 ">
                            Sign Up
                        </Button>
                    </div>
                    :
                    <div className="flex flex-col mx-4 mt-4 gap-2 ">

                        <Button onClick={handleLogout} style={{ textTransform: 'none' }} className="flex w-full justify-center font-medium text-lg shadow-none outline-none text-black border-gray-300 border bg-white  hover:bg-gray-300">
                            Log Out
                        </Button>

                    </div>

                }

            </div>
            {/* Main Footer Buttons */}
            <div className="flex justify-between">
                <Button onClick={() => navigate(`/`)} style={{ textTransform: 'none' }} className="flex flex-col shadow-none p-1 outline-none items-center text-gray-500 hover:text-black">
                    <House size={18} />
                    <p className="text-sm">Home</p>
                </Button>
                <Button style={{ textTransform: 'none' }} onClick={() => navigate(`/markets`)} className="flex flex-col text-sm shadow-none p-1 outline-none items-center text-gray-500 hover:text-black">
                    <Grid3X3 size={18} />
                    <p className="text-sm">Markets</p>
                </Button>
                <Button style={{ textTransform: 'none' }} onClick={() => { }} className="flex flex-col text-sm shadow-none p-1 outline-none items-center text-gray-500 hover:text-black">
                    <Search size={18} />
                    <p className="text-sm">Search</p>
                </Button>
                <Button onClick={() => navigate(`/activity`)} style={{ textTransform: 'none' }} className="flex flex-col text-sm shadow-none p-1 outline-none items-center text-gray-500 hover:text-black">
                    <Radio size={18} />
                    <p className="text-sm">Activity</p>
                </Button>
                <Button onClick={toggleSidebar} style={{ textTransform: 'none' }} className="flex flex-col text-sm shadow-none p-1 outline-none items-center text-gray-500 hover:text-black">
                    {isSidebarOpen ? (
                        <div className="flex flex-col items-center">
                            <X size={18} />
                            <p className="text-sm">Close</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <AlignJustify size={18} />
                            <p className="text-sm">More</p>
                        </div>
                    )}
                </Button>
            </div>
        </div>
    );
};

export default MobileFooter;