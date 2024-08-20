import React from "react";
// import { Button } from "@material-tailwind/react";
import Button from "../components/Button";
import { ListFilter, Star, TrendingUp, List, Search } from "lucide-react";
import TopEventCard from "../components/cards/TopEventCard";
import TopNavbar from "../components/TopNavbar";
import { MarketsIcon } from "../components/icons";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import { getAllEvents } from "../store/reducers/events";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";

import EventCard from "../components/event/EventCard";
import { event } from "../contents/event";
import { content } from "../contents/landing";
const Markets = () => {
    const [listView, setListView] = React.useState<boolean>(false);

    const [searchKey, setSearchKey] = React.useState<string>('');

    const [selectedButton, setSelectedButton] = React.useState<string>('top');
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        setSelectedButton(target.value);
    };

    // handle onChange event of the dropdown
    // const handleChange = () => {
    //     setSelectedOption(selectedOption);
    // }

    React.useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div className=" ">
            <TopNavbar />
            <div>

                <div style={{ scrollbarWidth: 'none' }} className="my-4 md:flex-row flex flex-col md:overflow-y-scroll overflow-x-scroll md:gap-5 justify-center px-6 ">
                    {/* <div style={{ scrollbarWidth: 'none' }} className="  grid-cols-4 md:grid-cols-3 px-6 overflow-x-scroll my-4 "> */}
                    {/* <div className=" flex  overflow-x-scroll gap-3 px-4"> */}
                    <TopEventCard text="U.S. Recession in 2024?" btn_text="Bet now" onClick={() => { }} className="w-full flex px-2 bg-gradient-to-r from-indigo-600 to-indigo-300" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                    <TopEventCard text="2024 Presidential Election" btn_text="Bet now" onClick={() => { }} className="w-full flex px-2 bg-gradient-to-r from-red-600 to-red-400" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                    <TopEventCard text="2024 Election Forecast" btn_text="View" onClick={() => { }} className="w-full px-2 flex bg-gradient-to-r from-blue-600 to-blue-200" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                    <TopEventCard text="Trade Elections" btn_text="Sign Up" onClick={() => { }} className="w-full flex px-2 bg-gradient-to-r from-orange-500 to-orange-400" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                </div>
                {/* SubBar */}
                <div className="lg:flex sm:grid-cols-2 grid-cols-2 grid lg:items-center px-4 gap-2">
                    <div className="lg:order-1 sm:order-3 order-3 p-2 border-2 justify-center items-center gap-2 rounded-md flex cursor-pointer hover:bg-slate-100" onClick={() => { }}>
                        <ListFilter size={24} />
                        <p className="sm:visible lg:hidden">Filters</p>
                    </div>

                    <div className="lg:order-2 sm:order-1 order-1 flex lg:w-full gap-5 px-4 py-1 items-center border-2 border-gray-400 focus-within:border-black rounded-lg">
                        <Search color="black" />
                        <input type="text" className="w-full py-1 outline-none" placeholder="Search by markets" onChange={(e) => setSearchKey(e.target.value)} />
                    </div>
                    <div className="w-full lg:order-3 lg:w-[16vw] sm:w-full sm:order-4 order-4 h-full  justify-between flex items-center rounded-lg">


                    </div>
                    {/* <b>Selected Option:</b> {selectedOption.text} */}

                    <div className="lg:order-4 lg:flex sm:hidden hidden border rounded-md">
                        <Button value="gridView" className="flex text-gray-500   p-4 outline-none items-center justify-center cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => { setListView(false) }} icon={<MarketsIcon />}></Button>
                        <Button value="listView" className="flex text-gray-500   p-3 outline-none items-center justify-center cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => { setListView(false) }} icon={<List />} ></Button>
                    </div>
                    <div className="lg:order-5 sm:order-2 order-2 p-2 border-2 justify-center items-center gap-2 rounded-md flex cursor-pointer hover:bg-slate-100" onClick={() => { }}>
                        <Star onClick={() => { setListView(false) }} color="gray" size={28} />
                    </div>
                </div>
                {/* Filters */}
                <div style={{ scrollbarWidth: 'none' }} className="flex overflow-x-scroll w-full gap-2 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <Button value="top"
                            className={`${selectedButton === 'top' ? 'bg-blue-600  focus:text-white' : 'bg-gray-200 border-gray-200 text-gray-600'}  flex font-medium px-2 p-1 outline-none text-nowrap  justify-center items-center text-center  gap-2 rounded-md border-2 after:bg-red-500 border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700`}
                            icon={<TrendingUp size={24} />}
                            text="Top"
                            onClick={() => handleButtonClick}>
                        </Button>
                    </div>
                    {
                        content.filterBtns.all.map((item, index) =>
                            <div className="">
                                <Button key={index} value={item.value} onClick={() => handleButtonClick}
                                    className={`${selectedButton === `${item.value}` ? 'bg-blue-600  focus:text-white' : 'bg-gray-200 text-black'}  px-2 p-1  font-medium outline-none text-nowrap  justify-center items-center text-center  rounded-md border-2 border-gray-200 after:bg-red-500 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700`} icon text={item.text}></Button>
                            </div>
                        )
                    }
                </div>
                {/* Events */}

                {/* <div className="flex flex-wrap px-4 gap-2 "> */}
                <div className="mt-4 gap-2 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-2 ">
                    {event.eventList
                        .filter((key) => key.content.toLowerCase().includes(searchKey.toLowerCase())) // Filter by searchKey
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

                {
                    listView === true
                        ? <div className="flex justify-center text-green-500"> </div>
                        : <div className="flex justify-center py-8 text-red-600"> </div>
                }
                <MobileFooter />
            </div >
            <Footer />
        </div >
    )
}

export default Markets;