import React from "react";
import useAuth from "../hooks/useAuth";
import SignInModal from "./SignInModal";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import { AlignJustify, Grid3X3, House, Radio, Search, X } from "lucide-react";
import SocialLink from "./SocialLink";

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
    }, []);
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
        <div className={`fixed z-50 bottom-0 left-0 lg:hidden sm:w-full w-full border bg-gray-100 text-white px-12 py-3 rounded-md transition-transform duration-300 ${isHidden ? 'transform translate-y-full' : ''}`}>
            {/* Sidebar */}
            <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
            <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />

            <div className={`fixed top-0 left-0 h-full  bg-white  text-black transition-all duration-300 ${isSidebarOpen ? 'w-[80vw]' : 'w-0 overflow-x-hidden'}`} ref={ref}>
                <div className="mx-8 mt-4" >
                    {isLoggedIn &&
                        <div>
                            <Button text="Profile" onClick={() => navigate(`/activity`)} className="flex font-medium text-xl p-1 text-black   items-center" />
                            <Button text="Add fonds" onClick={() => navigate(`/activity`)} className="flex font-medium text-xl p-1 text-black   items-center" />
                        </div>
                    }
                    <Button text="Election" onClick={() => navigate(`/elections`)} className=" font-medium text-xl p-1 text-black   items-center" />
                    <Button text="Leadboard" onClick={() => navigate(`/leaderboard`)} className="flex font-medium text-xl p-1 text-black   items-center" />
                    <Button text="Activity" onClick={() => navigate(`/activity`)} className="flex font-medium text-xl p-1 text-black   items-center" />
                    <Button text="Resources" onClick={() => navigate(`/`)} className="flex font-medium text-xl p-1 text-black   items-center" />
                    <Button text="Rewards" onClick={() => navigate(`/`)} className="flex font-medium text-xl p-1 text-black   items-center" />

                    <div>
                        <SocialLink border={true} />
                    </div>
                </div>
                {!isLoggedIn ?
                    <div className="flex flex-col px-4 gap-2 ">
                        <Button text="Log In" onClick={handleInClick} className="flex w-full justify-center p-3 rounded-lg  font-medium text-lg text-black border-gray-300 border bg-white  hover:bg-gray-300" />
                        <Button text="Sign Up" onClick={handleUpClick} className="flex w-full justify-center p-3 rounded-lg  font-medium text-lg text-white  bg-blue-600 " />
                    </div>
                    :
                    <div className="flex flex-col mx-4 mt-4 gap-2 ">
                        <Button text="Log Out" onClick={handleLogout} className="flex w-full justify-center p-3 rounded-lg font-medium text-lg text-black border-gray-300 border bg-white  hover:bg-gray-300" />
                    </div>

                }

            </div>
            {/* Main Footer Buttons */}
            <div className="flex justify-between">
                <Button icon={<House size={18} />} text="Home" onClick={() => navigate(`/`)} className="flex flex-col p-1   items-center text-gray-500 hover:text-black" />
                <Button icon={<Grid3X3 size={18} />} text="Markets" onClick={() => navigate(`/markets`)} className="flex flex-col p-1   items-center text-gray-500 hover:text-black" />
                <Button icon={<Search size={18} />} text="Search" onClick={() => navigate(`/`)} className="flex flex-col p-1   items-center text-gray-500 hover:text-black" />
                <Button icon={<Radio size={18} />} text="Activity" onClick={() => navigate(`/activity`)} className="flex flex-col p-1   items-center text-gray-500 hover:text-black" />

                <Button onClick={toggleSidebar} className="flex flex-col text-sm p-1 items-center text-gray-500 hover:text-black"
                    text={isSidebarOpen ? "Close" : "More"}
                    icon={isSidebarOpen ? < X size={18} /> : <AlignJustify size={18} />}
                />

            </div >
        </div >
    )
};

export default MobileFooter;