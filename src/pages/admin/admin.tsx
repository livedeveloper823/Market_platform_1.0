import React from "react";
import TopNavbar from "../../components/TopNavbar";
import Button from "../../components/Button/Button";
import { UserPlusIcon, ArrowLeftIcon, ArrowRightIcon, PencilIcon, Trash2 } from "lucide-react";
import { Tabs, Tooltip, } from "@material-tailwind/react";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router";

import { dispatch, useSelector } from "../../store";
import { getAllEvents } from '../../store/reducers/events'
const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "New",
        value: "newevent",
    },

];


export default function Admin() {
    const navigate = useNavigate();
    const [pagination, setPagination] = React.useState < number > (1);

    const eventData = useSelector((state) => state.events.events)
    console.log("ddddddddddddd", eventData)
    const handleDeleteEvent = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if (confirmDelete) {
            alert('Event deleted!');
        }
    };

    React.useEffect(() => {
        dispatch(getAllEvents())
    }, [])

    // const getItemProps = (index: number) =>
    // ({
    //     variant: pagination === index ? "filled" : "text",
    //     color: "gray",
    //     onClick: () => setPagination(index),
    //     className: "rounded-full",
    // });

    const next = () => {
        if (pagination === 5) return;

        setPagination(pagination + 1);
    };

    const prev = () => {
        if (pagination === 1) return;

        setPagination(pagination - 1);
    };

    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-blue-200">
            <TopNavbar />
            <div className="  mt-36 xl:px-[14vw] md:px-[18vw] sm:px-4  items-center"> 
                <div className=" rounded-md  bg-white ">
                    <div className="px-2">
                        <div className="flex mb-8 items-center justify-between gap-8">
                            <div className="">
                                <p className="text-xl">
                                    Event list
                                </p>
                                <p color="gray" className="mt-1 font-normal">
                                    See information about all events
                                </p>
                            </div>
                            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">

                                <Button onClick={() => { navigate('addevent') }} className="flex rounded-md px-2 py-1 bg-white border border-gray-400  items-center gap-3" text="All" />
                                <Button onClick={() => { navigate('addevent') }} className="flex rounded-full px-2 py-1 bg-white border border-gray-400  items-center gap-3" text="Add Event" icon={<UserPlusIcon strokeWidth={2} className="h-4 w-4" />} />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row px-4">
                            <Tabs value="all" className="flex flex-col w-full md:w-max ">
                                <div className="flex gap-4">
                                    {TABS.map(({ label, value }) => (
                                        <div key={value} className="flex gap-3 w-full   "  >
                                            <Button className="bg-white w-full text-black border border-gray-400 items-center px-6 rounded-md " text={label} />
                                        </div>
                                    ))}
                                </div>
                            </Tabs>

                            <div className="flex gap-2 border rounded-full px-2 py-2">
                                <SearchIcon color="black" />
                                <input type="text" className="w-full outline-none" placeholder="Search events" />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="mt-4 w-full  text-left">
                            <div className="flex justify-between items-center text-left p-2">
                                <p className="font-normal  w-44 ">
                                    EventName
                                </p>
                                <p className="font-normal w-52 line-clamp-2"  >
                                    Description
                                </p>
                                <p className="font-normal w-32 "  >
                                    Volume
                                </p>
                                <p className="font-normal "  >
                                    Betting Timeline
                                </p>
                                <p className="font-normal"  >
                                </p>
                            </div>
                            {eventData.map(
                                ({ eventName, desc, volume,}, index) => {
                                    return (
                                        <div key={index} className="flex px-2 gap-3">
                                            <div className="flex w-full justify-between items-center text-left  py-2">
                                                <p className="font-normal w-44 ">
                                                    {eventName}
                                                </p>
                                                <p className="font-normal w-52  line-clamp-2"  >
                                                    {desc}
                                                </p>
                                                <p className="font-normal w-16"  >
                                                    {volume}
                                                </p>
                                                <p className="font-normal w-52"  >
                                                    {/* {startDate} */}
                                                </p>
                                                <p className="font-normal"  >
                                                    {/* {endDate} */}
                                                </p>
                                                <div className="flex gap-5">
                                                    <Tooltip content="Edit Event">
                                                        <Button icon={<PencilIcon className="h-4 w-4" />} onClick={() => { alert('ddd') }} />
                                                    </Tooltip>
                                                    <Tooltip content="Delete Event">
                                                        <Button icon={<Trash2 className="h-4 w-4" />} onClick={handleDeleteEvent} />
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                },
                            )}

                        </div>
                    </div>

                    <div className="flex items-center justify-center border-t border-blue-gray-50 p-4">
                        <Button
                            className="flex items-center gap-2 rounded-full border p-2 hover:text-white hover:bg-gray-500 outline-none"
                            onClick={prev}
                            // disabled={pagination === 1}
                            icon={<ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />}
                            text="Previous"
                        />
                        <div className="flex items-center gap-2">
                            ---1234--
                        </div>
                        <Button

                            className="flex items-center gap-2 rounded-full border p-2 hover:text-white hover:bg-gray-500 outline-none"
                            onClick={next}
                            // disabled={pagination === 5}
                            icon={<ArrowRightIcon strokeWidth={2} className="h-4 w-4" />}
                            text="Next"
                        />
                    </div>

                </div>

            </div >
        </div >
    );
}

