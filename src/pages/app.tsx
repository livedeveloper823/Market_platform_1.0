import React from "react";
import Button from "../components/Button/Button";
import { TrendingUp } from "lucide-react";

import TopEventCard from "../components/cards/TopEventCard";
import TopNavbar from "../components/layouts/TopNavbar";
import { content } from "../contents/landing";
import { Tooltip } from "@material-tailwind/react";
// import { event } from "../contents/event";
import UserProperty from "../components/cards/UserProperty";
import EventCard from "../components/event/EventCard";

import { dispatch, useSelector } from "../store";
import { getUsersData } from "../store/reducers/users";
import { getAllEvents } from "../store/reducers/events";
import { customers } from "../components/database";

import Footer from "../components/layouts/Footer";
import MobileFooter from "../components/layouts/MobileFooter";
import { useNavigate } from "react-router-dom";


const App = () => {

    const [selectedButton, setSelectedButton] = React.useState < string | null > ('top');
    const handleButtonClick = (value: string) => {
        setSelectedButton(value);
    };

    const eventData = useSelector((state) => state.events.events)
    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-bgColor">
            <TopNavbar />
            <div className="dark:bg-dark xl:px-48 mt-36 sm:px-2 justify-center overscroll-auto">

                <div className="px-4">
                    <div style={{ scrollbarWidth: 'none' }} className="overflow-x-auto ">
                        {/* <div style={{ scrollbarWidth: 'none' }} className="gap-4 my-4  flex   overflow-x-auto justify-center px-4"> */}
                        {/* <div className="justify-between flex "> */}
                        <div className="flex space-x-4 lg:space-x-3 md:space-x-4">
                            {/* <div style={{ scrollbarWidth: 'none' }} className="  grid-cols-4 md:grid-cols-3 px-6 overflow-x-scroll my-4 "> */}
                            {/* <div className=" flex  overflow-x-scroll gap-3 px-4"> */}
                            <TopEventCard text="2024 Election Forecast" btn_text="View" onClick={() => { }} className="flex-none lg:w-1/4 md:w-1/3 sm:w-full bg-gradient-to-r from-blue-600 to-blue-200" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fopen-ai.png&w=256&q=75 " />
                            <TopEventCard text="U.S. Recession in 2024?" btn_text="Bet now" onClick={() => { }} className="flex-none lg:w-1/4 md:w-1/3 sm:w-full bg-gradient-to-r from-indigo-600 to-indigo-300" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2FDeposit.png&w=256&q=75 " />
                            <TopEventCard text="2024 Presidential Election" btn_text="Bet now" onClick={() => { }} className="flex-none lg:w-1/4 md:w-1/3 sm:w-full bg-gradient-to-r from-red-600 to-red-400" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fhurricanes.png&w=256&q=75
 " />
                            <TopEventCard text="Trade Elections" btn_text="Sign Up" onClick={() => { }} className="flex-none lg:w-1/4 md:w-1/3 sm:w-full bg-gradient-to-r from-orange-500 to-orange-400" img_url="https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fhottest-record.png&w=256&q=75 " />
                        </div>
                    </div>
                </div>

                <div style={{ scrollbarWidth: 'none' }} className="flex overflow-x-scroll w-full gap-2 py-3">
                    <div className=" ">
                        <Button
                            text="Top"
                            value="top"
                            className={`${selectedButton === 'top' ? 'bg-btnColor  focus:text-white' : 'bg-selectBtnBg  border-selectBtnBg'} border  text-textColor hover:border-btnHoverColor flex font-medium  px-3 py-1.5 text-nowrap  justify-center items-center text-center  gap-2 rounded-md border-selectBtnBg  `}
                            onClick={() => handleButtonClick('top')} icon={<TrendingUp className="" size={24} />}
                        />
                    </div>
                    {
                        content.filterBtns.all.map((item, index) =>
                            <div className="">
                                <Button key={index} value={item.value} onClick={() => handleButtonClick(`${item.value}`)}
                                    text={item.text} className={`${selectedButton === `${item.value}` ? 'bg-btnColor focus:text-white' : 'bg-selectBtnBg border-selectBtnBg'} border  text-textColor hover:border-btnHoverColor font-medium px-2 py-1.5  text-nowrap  justify-center items-center text-center  rounded-md `} />

                            </div>
                        )
                    }
                </div>

                <div style={{ scrollbarWidth: "none" }} className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 gap-4 ">
                    {/* <div style={{ scrollbarWidth: "none" }} className="flex flex-wrap  gap-2 "> */}
                    {eventData
                        // .filter((key) => key.content.toLowerCase().includes(selectedButton.toLowerCase())) // Filter by selectedButton
                        .map((item, index) => (
                            <EventCard
                                tid={item._id}
                                key={index}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                img={item.avatar}
                                state={0}
                                eventName={item.eventName}
                                // state={item.state}
                                // percentage={item.percentage}
                                volume={item.volume}
                            // chance={item.chance}
                            />
                        ))
                    }
                </div>

                <div className="flex my-6 justify-center">
                    <Button className="font-semibold rounded-md px-3 py-2 bg-blue-700 text-white dark:bg-darkBtn" text="View all"></Button>
                </div>

                <div className=" lg:flex  gap-8">
                    {/* <div className=" border-2 flex gap-8"> */}
                    <div className="w-full shadow-md">
                        <div className="flex items-center justify-between">
                            <p className="text-textColor flex items-center py-4 text-2xl font-medium ">Recent Activity</p>
                            <Button onClick={() => { navigate('/activity') }} text="See all" className="rounded-md items-center px-2 py-1 border font-semibold text-textColor border-gray-500 hover:bg-cardHoverBg" />
                        </div>
                        {customers.map(({ eventName, username, laterTime, avatar, toAvatar, position, address, volume, isBet, isSold, price, count }, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-3 last:pb-2"
                            >
                                <div className="flex justify-stretch gap-3">
                                    <img width={48} src={avatar} alt={eventName} className="rounded-md" />
                                    <div>

                                        <p className="text-textColor cursor-pointer " onClick={() => navigate('/event')}>
                                            {eventName}
                                        </p>

                                        <div className="text-sm items-center flex  gap-1">
                                            <Tooltip
                                                className="bg-bgColor border text-black z-50 rounded-lg"
                                                content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <img width={22} className="rounded-full" src={toAvatar} alt="" />
                                                    <p className="text-base font-semibold cursor-pointer text-textWhiteColor" onClick={() => navigate('/profile')}> {username}</p>
                                                </div>
                                            </Tooltip>

                                            <p className="text-base text-textWhiteColor">{isSold === true ? 'sold' : 'bought'}</p>

                                            <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'}`}>
                                                {isBet ? 'Yes' : 'No'}</p>
                                            <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'}`}>
                                                {count}</p>
                                            <p className="text-textWhiteColor text-base">at</p>
                                            <p className="text-textWhiteColor">{price}¢ (${(price / 110).toPrecision(5)})</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-textColor">
                                    {laterTime} ago
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full  shadow-md">
                        <div className="flex items-center justify-between">
                            <p className="text-textColor flex items-center py-4 text-2xl font-medium">Top Volume This Week</p>
                            <Button onClick={() => { navigate('/leaderboard') }} text="See all" className="rounded-md items-center px-2 py-1 border font-semibold text-textColor border-gray-500  hover:bg-cardHoverBg" />
                        </div>
                        {customers.map(({ username, laterTime, avatar, position, address, volume }, index) => (
                            <div
                                key={index}
                                className="flex  items-center py-2 gap-4 last:pb-1 cursor-pointer"
                                onClick={() => navigate(`/profile?${index}`)}
                            >
                                <div className="flex w-full items-center justify-between">
                                    <div className='flex w-full items-center  gap-3'>
                                        <Tooltip
                                            className="bg-bgColor text-textColor z-50 rounded-lg"
                                            content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                        >
                                            <div className="flex  gap-4">
                                                <button className="px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                                                    onClick={() => navigate(`/profile?${index}`)}
                                                >
                                                    <img width={48} src={avatar} className="rounded-full" />
                                                    <span className="absolute items-center inset-0 object-right-top left-10">
                                                        <div className="inline-flex items-center w-4 justify-center border border-white rounded-full text-xs font-semibold leading-4 bg-black text-white">
                                                            1
                                                        </div>
                                                    </span>
                                                </button>
                                                {/* <img width={48} src={avatar} className="rounded-full" /> */}
                                                <div className=" ">
                                                    <p className="text-textColor">{username}</p>
                                                    <p className="text-gray-500">${laterTime}</p>
                                                </div>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <MobileFooter />
            </div >
            <Footer />
        </div >
    )
}

export default App;