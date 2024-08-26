import React from "react";
import Button from "../components/Button/Button";
import { TrendingUp, Droplet, ChartNoAxesColumn, Plus, Hourglass, Check, Swords, ListFilter, Star, List, Search, ChevronUp, ChevronDown } from "lucide-react";
import TopEventCard from "../components/cards/TopEventCard";
import TopNavbar from "../components/layouts/TopNavbar";
import { MarketsIcon } from "../components/icons";
// import { customStyles } from "../contents/selectStyle";
// import { categoryItem } from "../contents/selectItem";
import { getUsersData } from "../store/reducers/users";
import { getAllEvents } from "../store/reducers/events";
import Footer from "../components/layouts/Footer";
import MobileFooter from "../components/layouts/MobileFooter";
import { dispatch, useSelector } from "../store";
import EventCard from "../components/event/EventCard";
// import { event } from "../contents/event";
import { content } from "../contents/landing";



const options = [
    { value: 'trading', label: 'Trading', icon: <TrendingUp /> },
    { value: 'liquidity', label: 'Liquidity', icon: <Droplet /> },
    { value: 'volume', label: 'Volume', icon: <ChartNoAxesColumn /> },
    { value: 'newest', label: 'Newest', icon: <Plus /> },
    { value: 'endingSoon', label: 'Ending Soon', icon: <Hourglass /> },
    { value: 'endedRecently', label: 'Ended Recently', icon: <Check /> },
    { value: 'competitive', label: 'Competitive', icon: <Swords /> },
];
const Markets = () => {
    interface Option {
        label: string;
        value: string;
        icon: JSX.Element;
    }
    const [listView, setListView] = React.useState < boolean > (false);

    const [searchKey, setSearchKey] = React.useState < string > ('');

    const [selectedButton, setSelectedButton] = React.useState < string > ('top');
    const eventData = useSelector((state) => state.events.events)
    const handleButtonClick = (value: string) => {
        setSelectedButton(value);
    };

    const [selected, setSelected] = React.useState(options[0]);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState < boolean > (false);

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsDropdownOpen((prev) => !prev);
    }

    const handleOptionClick = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
        setIsDropdownOpen(false);
    };

    React.useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div className="h-screen bg-bgColor overflow-hidden-scrollbar overflow-y-auto">
            <TopNavbar />
            <div className="dark:bg-darkBg mt-36">
                <div style={{ scrollbarWidth: 'none' }} className=" my-4 md:flex-row flex flex-col md:overflow-y-scroll overflow-x-scroll md:gap-5 justify-center px-3">
                    {/* <div style={{ scrollbarWidth: 'none' }} className="  grid-cols-4 md:grid-cols-3 px-6 overflow-x-scroll my-4 "> */}
                    {/* <div className=" flex  overflow-x-scroll gap-3 px-4"> */}
                    <TopEventCard text="2024 Election Forecast" btn_text="View" onClick={() => { }} className="w-full flex bg-gradient-to-r from-blue-600 to-blue-200" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fopen-ai.png&w=256&q=75 " />
                    <TopEventCard text="U.S. Recession in 2024?" btn_text="Bet now" onClick={() => { }} className="w-full flex bg-gradient-to-r from-indigo-600 to-indigo-300" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2FDeposit.png&w=256&q=75 " />
                    <TopEventCard text="2024 Presidential Election" btn_text="Bet now" onClick={() => { }} className="w-full flex bg-gradient-to-r from-red-600 to-red-400" img_url=" https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fhurricanes.png&w=256&q=75
 " />
                    <TopEventCard text="Trade Elections" btn_text="Sign Up" onClick={() => { }} className="w-full flex bg-gradient-to-r from-orange-500 to-orange-400" img_url="https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Fhottest-record.png&w=256&q=75 " />
                </div>
                {/* SubBar */}
                <div className="z-20 sticky top-[134px] pt-3 bg-bgColor text-textColor mb-4 drop-shadow-sm">
                    <div className="lg:flex sm:grid-cols-2 grid-cols-2 grid w-full lg:items-center px-3 gap-2">
                        <div className="hover:bg-searchHover lg:order-1 sm:order-3 order-3 p-2 border justify-center items-center gap-2 rounded-md flex cursor-pointer" onClick={() => { }}>
                            <ListFilter size={24} />
                            <p className="sm:visible lg:hidden">Filters</p>
                        </div>

                        <div className="lg:order-2 sm:order-1 order-1 flex w-full gap-2 px-4 py-1  items-center border hover:bg-searchHover border-gray-400 focus-within:border-white rounded-lg">
                            <Search className=" " />
                            <input type="text" className="hover:bg-searchHover w-full py-1 bg-bgColor " placeholder="Search by markets" onChange={(e) => setSearchKey(e.target.value)} />
                        </div>
                        <div className="w-full  lg:order-3 lg:w-[16vw] sm:w-full sm:order-4 order-4 h-full  justify-between flex items-center rounded-lg">
                            <div className="relative w-full ">
                                <div className="hover:bg-searchHover flex  justify-between gap-2 px-2 py-1 shadow-sm rounded-md  cursor-pointer border items-center bg-bgColor dark:hover:bg-gray-600" onClick={toggleDropdown}>
                                    <div className="flex px-1 gap-2 items-center">
                                        <p className="bg-blue-100 text-black p-1 rounded-md">{selected.icon} </p>
                                        <p className="  ">{selected.label}</p>
                                    </div>
                                    {isDropdownOpen ? <ChevronUp className=" " /> : <ChevronDown className=" " />}
                                </div>
                                {isOpen && (
                                    <div className="z-50 absolute p-0.5 w-full rounded-md border ">
                                        {options.map((option) => (
                                            <div key={option.value} className=" flex p-2 bg-bgColor text-textColor hover:bg-selBtnHoverColor gap-2 items-center cursor-pointer" onClick={() => handleOptionClick(option)}>
                                                <p className="bg-blue-50 text-black p-1 rounded-md">{option.icon}</p>
                                                <p className=" ">{option.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* {selected.label} */}
                        </div>

                        <div className="lg:order-4 lg:flex sm:hidden hidden border items-center p-0.5  rounded-md ">
                            <Button value="gridView" className="flex border-r-2 text-textColor hover:bg-selBtnHoverColor p-3  justify-center cursor-pointer " icon={<MarketsIcon />}
                                onClick={() => { setListView(false) }}
                            />
                            <Button value="listView" className="flex text-textColor hover:bg-selBtnHoverColor p-2  justify-center cursor-pointer " icon={<List />}
                                onClick={() => { setListView(false) }}
                            />
                        </div>
                        <div className="lg:order-5 sm:order-2 order-2 p-2  border justify-center text-textColor hover:bg-selBtnHoverColor items-center gap-2 rounded-md flex cursor-pointer" onClick={() => { }}>
                            <Star onClick={() => { setListView(false) }} className="" size={24} />
                        </div>
                    </div>
                    {/* Filters */}
                    <div style={{ scrollbarWidth: 'none' }} className="flex overflow-x-scroll w-full gap-2 px-3 py-3">
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
                </div>
                {/* Events */}

                <div className="mt-4 px-3 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {eventData
                        .filter((key) => key.eventName?.toLowerCase().includes(searchKey.toLowerCase())) // Filter by searchKey
                        // .filter((key) => key.category.toLowerCase().includes(selectedButton.toLowerCase())) // Filter by selectedButton
                        .map((key, index) => (
                            <EventCard
                                tid={key._id}
                                key={index}
                                startDate={key.startDate}
                                endDate={key.endDate}
                                img={key.avatar}
                                state={1}
                                eventName={key.eventName}
                                volume={key.volume}
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