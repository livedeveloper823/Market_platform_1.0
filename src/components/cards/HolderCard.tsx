import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
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
        <div className="justify-between w-full rounded-lg">
            <div className=" flex justify-between items-center font-semibold">
                <h2 className="flex gap-2 text-lg text-black font-semibold">{icon} {first || second}</h2>
                <p className="uppercase cursor-pointer text-sm text-gray-400">shares</p>
            </div>
            <div className="gap-4 border-b-2 border-gray-100">
                <div>
                    <div className="divide-y divide-gray-200">
                        {customers.map(({ username, laterTime, avatar, position, address, volume }, index) => (
                            <div
                                key={index}
                                className="flex  items-center py-2 gap-4 last:pb-1 cursor-pointer"
                                onClick={() => navigate(`/profile?${index}`)}
                            >

                                <div className="flex w-full items-center justify-between">
                                    <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />

                                    <p className={`text-right ${first ? 'text-green-600' : second ? 'text-red-600' : 'text-blue-gray-500'}`}>
                                        {laterTime}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolderCard;