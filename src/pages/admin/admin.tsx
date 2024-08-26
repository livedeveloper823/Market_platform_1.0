import React from "react";
import TopNavbar from "../../components/layouts/TopNavbar";
import Button from "../../components/Button/Button";
import { UserPlusIcon, ArrowLeftIcon, ArrowRightIcon, PencilIcon, Trash2 } from "lucide-react";
import { Tooltip, } from "@material-tailwind/react";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router";

import { dispatch, useSelector } from "../../store";
import { getAllEvents, delEvent } from '../../store/reducers/events'
import useNotification from "../../hooks/useNotification";


export default function Admin() {
    const navigate = useNavigate();
    const { showNotification } = useNotification();
    const [pagination, setPagination] = React.useState < number > (1);

    const eventData = useSelector((state) => state.events.events)

    const handleDeleteEvent = (index: string | null) => {

        showNotification("Successfully logined!", "success")
        dispatch(delEvent(index))
    };

    React.useEffect(() => {
        dispatch(getAllEvents())
    }, [])

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
            <div className=" mt-36 xl:px-[14vw] md:px-[18vw] sm:px-4  items-center">
                <div className=" rounded-md  bg-white ">
                    <div className="p-4">
                        <p className="justify-center items-center flex text-3xl">
                            Event list
                        </p>
                        <hr />
                        <div className="flex flex-col mt-4 items-center justify-between gap-4 md:flex-row px-4">
                            <div className="flex gap-2 border rounded-full px-2 py-2">
                                <SearchIcon color="black" />
                                <input type="text" className="w-full outline-none" placeholder="Search events" />
                            </div>
                            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                                <Button onClick={() => { navigate('addevent') }} className="flex rounded-lg px-2 py-1 bg-green-500 text-white border items-center gap-3" text="All" />
                                <Button onClick={() => { navigate('addevent') }} className="flex rounded-lg px-2 py-1 bg-blue-500 text-white border items-center " text="Add Event" icon={<UserPlusIcon strokeWidth={2} className="h-4 w-4" />} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="mt-4 divide-y flex flex-col justify-stretch border text-left px-4">
                            <div className="flex border  justify-between text-xl text-red-500 items-center text-left p-2">
                                <p className="w-8 ">
                                    No
                                </p>
                                <p className=" w-44 ">
                                    EventName
                                </p>
                                <p className="w-52 line-clamp-2"  >
                                    Description
                                </p>
                                <p className="w-32 "  >
                                    Volume
                                </p>
                                <p className=""  >
                                    Betting Timeline
                                </p>
                                <p className="font-normal"  >
                                </p>
                            </div>
                            {eventData.map(
                                ({ eventName, desc, volume, _id }, index) => {
                                    return (
                                        <div key={index} className="flex w-full justify-between py-2 gap-3">
                                            <p className="">
                                                {index + 1}
                                            </p>
                                            <p className="w-44 ">
                                                {eventName}
                                            </p>
                                            <p className="w-52 line-clamp-2"  >
                                                {desc}
                                            </p>
                                            <p className="w-16"  >
                                                {volume}
                                            </p>
                                            <p className="w-52"  >
                                                {/* {startDate}  */}
                                            </p>
                                            <p className="font-normal"  >
                                                {/* {endDate} */}
                                            </p>
                                            <div className="flex gap-5">
                                                <Tooltip content="Edit Event">
                                                    <Button icon={<PencilIcon className="h-4 w-4" />} onClick={() => { alert('ddd') }} />
                                                </Tooltip>
                                                <Tooltip content="Delete Event">
                                                    <Button icon={<Trash2 className="h-4 w-4" />} onClick={() => {
                                                        if (_id) {
                                                            handleDeleteEvent(String(_id))
                                                        } else {
                                                            console.log("warning")
                                                        }
                                                    }
                                                    } />
                                                </Tooltip>
                                            </div>
                                        </div>
                                    );
                                },
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-4">
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

