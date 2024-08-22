import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
import { Tooltip } from "@material-tailwind/react";
import { customers } from "../database";
import React from "react";
interface HolderCard {
    first?: string,
    second?: string,
    icon?: React.ReactNode
}
const HolderCard: React.FC<HolderCard> = ({ first, second, icon }) => {
    const navigate = useNavigate();

    return (
        <div className="justify-between w-full rounded-lg border-gray-100 border shadow-md p-2 ">
            <div className=" flex justify-between items-center font-semibold">
                <h2 className="flex gap-2 text-2xl text-black font-semibold">{icon} {first || second}</h2>
            </div>
            
            <div className="gap-4 border-b-2 mt-4 border-gray-100">
                <div className="divide-y divide-gray-200">
                    {customers.map(({ username, laterTime, avatar, position, address, volume }, index) => (
                        <div
                            key={index}
                            className="flex  items-center py-2 gap-4 last:pb-1 cursor-pointer"

                        >
                            <div className="flex w-full items-center justify-between">
                                <div className='flex w-full items-center  gap-3'>
                                    <Tooltip
                                        className="bg-white border text-black z-50 rounded-lg"
                                        content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                    >
                                        <button className="px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                                            onClick={() => navigate(`/profile?${index}`)}
                                        >
                                            <img width={48} src={avatar} className="rounded-full" />
                                            <span className="absolute items-center inset-0 object-right-top left-9">
                                                <div className="inline-flex items-center w-4 justify-center border border-white rounded-full text-xs font-semibold leading-4 bg-black text-white">
                                                    1
                                                </div>
                                            </span>
                                        </button>
                                    </Tooltip>
                                    <div className="lg:flex w-full  justify-between gap-5">
                                        <Tooltip
                                            className="bg-white border text-black z-50 rounded-lg"
                                            content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                        >
                                            <p onClick={() => navigate(`/profile?${index}`)} className="hover:underline">{username}</p>
                                        </Tooltip>
                                        <p className={` ${first ? 'text-green-600' : second ? 'text-red-600' : 'text-blue-gray-500'}`}>
                                            $ {laterTime}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default HolderCard;