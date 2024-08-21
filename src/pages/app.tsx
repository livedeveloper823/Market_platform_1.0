import React from "react";
import Button from "../components/Button/Button";
import { TrendingUp } from "lucide-react";
import SemiCircularProgressBar from "../components/feature/Circlar";

import TopEventCard from "../components/cards/TopEventCard";
import TopNavbar from "../components/TopNavbar";
import { content } from "../contents/landing";
import { event } from "../contents/event";
import UserProperty from "../components/cards/UserProperty";
import EventCard from "../components/event/EventCard";

import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import { getAllEvents } from "../store/reducers/events";
import Footer from "../components/Footer";
import { customers } from "../components/database";
import MobileFooter from "../components/MobileFooter";
import { useNavigate } from "react-router-dom";
const App = () => {

    const [selectedButton, setSelectedButton] = React.useState < string | null > ('top');
    const handleButtonClick = (value: string) => {
        setSelectedButton(value);
    };

    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
            <TopNavbar />
            <div className="xl:px-36 mt-36 justify-center overscroll-auto">
                {/* <SemiCircularProgressBar percentage={32} size={200} strokeWidth={20} /> */}
                 
                <div style={{ scrollbarWidth: 'none' }} className="mt-4 md:flex-row flex flex-col sm:overflow-x-scroll overflow-x-scroll md:gap-5 justify-center px-6 ">
                    {/* <div className=" flex  overflow-x-scroll gap-3 px-4"> */}
                    <TopEventCard text="2024 Election Forecast" btn_text="View" onClick={() => { }} className="w-full flex bg-gradient-to-r from-blue-600 to-blue-200" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fopen-ai.png&w=256&q=75 " />
                    <TopEventCard text="2024 Presidential Election" btn_text="Bet now" onClick={() => { }} className="w-full flex bg-gradient-to-r from-red-600 to-red-400" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fhurricanes.png&w=256&q=75
 " />
                    <TopEventCard text="U.S. Recession in 2024?" btn_text="Bet now" onClick={() => { }} className="w-full flex bg-gradient-to-r from-indigo-600 to-indigo-300" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2FDeposit.png&w=256&q=75 " />
                    <TopEventCard text="Trade Elections" btn_text="Sign Up" onClick={() => { }} className="w-full flex bg-gradient-to-r from-orange-500 to-orange-400" img_url="https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fhottest-record.png&w=256&q=75 " />
                </div>

                <div style={{ scrollbarWidth: 'none' }} className="flex overflow-x-scroll w-full gap-2 px-4 py-3">
                    <div className=" ">
                        <Button
                            text="Top"
                            value="top"
                            className={`${selectedButton === 'top' ? 'bg-blue-600  focus:text-white' : 'bg-gray-200 border-gray-200 text-black'}  flex font-medium px-3 py-2 outline-none text-nowrap  justify-center items-center text-center  gap-2 rounded-md border border-gray-200 after:bg-red-500 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700`}
                            onClick={() => handleButtonClick('top')} icon={<TrendingUp size={24} />}
                        />
                    </div>
                    {
                        content.filterBtns.all.map((item, index) =>
                            <div className="">
                                <Button key={index} value={item.value} onClick={() => handleButtonClick(`${item.value}`)}
                                    text={item.text} className={`${selectedButton === `${item.value}` ? 'bg-blue-600  focus:text-white' : 'bg-gray-200 text-black'}   font-medium p-2 outline-none text-nowrap  justify-center items-center text-center  rounded-md border border-gray-200 after:bg-red-500 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700`} />

                            </div>
                        )
                    }
                </div>

                <div style={{ scrollbarWidth: "none" }} className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 gap-2 ">
                    {/* <div style={{ scrollbarWidth: "none" }} className="flex flex-wrap  gap-2 "> */}
                    {event.eventList
                        // .filter((key) => key.content.toLowerCase().includes(selectedButton.toLowerCase())) // Filter by selectedButton
                        .map((key, index) => (
                            <EventCard
                                key={index}
                                img={key.img}
                                text={key.content}
                                state={key.state}
                                percentage={key.percentage}
                                betAmount={key.betAmount}
                            />
                        ))
                    }
                </div>
                {/* Events */}
                {/* {event.science_card.filter((item) => item.content.toLowerCase().includes(search)).filter((item) => item.content.toLowerCase().includes(filter)).map((item, index) =>
                    <Card key={index} img={item.img} text={item.content} state={item.state}
                        percentage={item.percentage} Bet_amount={item.Bet_amount} />)
                } */}

                <div className="flex mt-3 justify-center">
                    <Button className="rounded-md px-2 py-1 bg-blue-700 text-white" text="View all"></Button>
                </div>

                <div className=" lg:px-6 lg:flex sm:px-6 gap-8">
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <p className="flex items-center py-4 text-2xl font-medium text-gray-600">Recent Activity</p>
                            <Button onClick={() => { navigate('/activity') }} text="See all" className="rounded-full items-center px-2 border text-gray-600 border-gray-500 hover:bg-gray-200" />
                        </div>
                        {customers.map(({ eventName, username, laterTime, avatar, position, address, volume, isBet, isSold, price, count }, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-3 last:pb-2"
                            >
                                <div className="flex items-center gap-x-3">
                                    <img width={44} src={avatar} alt={eventName} className="rounded-md" />
                                    <div>
                                        {eventName &&
                                            <p className="font-semibold cursor-pointer" onClick={() => navigate('/event')}>
                                                {eventName}
                                            </p>
                                        }
                                        <div className="text-sm items-center flex gap-1">
                                            <div className="flex items-center text-base cursor-pointer gap-2" onClick={() => navigate('/profile')}>
                                                <p className=" font-semibold hover:underline underline-offset-4">
                                                    <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />
                                                </p>
                                            </div>
                                            <p className="text-base">{isSold === true ? 'sold' : 'bought'}</p>

                                            <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'}`}>
                                                {isBet ? 'Yes' : 'No'}</p>
                                            <p className={`${isBet === true ? 'text-green-600 font-bold items-center' : 'text-orange-600 font-bold items-center'}`}>
                                                {count}</p>
                                            <p className=" text-base">at</p>
                                            <p className="font-">{price}¢ (${(price / 110).toPrecision(5)})</p>
                                        </div>
                                    </div>
                                </div>
                                <p> {laterTime} ago</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <p className="flex items-center py-4 text-2xl font-medium text-gray-600">Top Volume This Week</p>
                            <Button onClick={() => { navigate('/rank') }} text="See all" className="rounded-full items-center px-2 border text-gray-600 border-gray-500 hover:bg-gray-200" />
                        </div>
                        {customers.map(({ username, avatar, position, address, volume }, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-2 last:pb-1 cursor-pointer"
                                onClick={() => navigate(`/profile?${index}`)}
                            >
                                <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />
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