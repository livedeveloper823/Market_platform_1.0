import React from "react";
import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
import { customers } from "../database";

const ActivityListItem: React.FC = () => {
    const [, setMenuNum] = React.useState < number | string > ('Amount');
    const navigate = useNavigate();
    return (
        <div className="md:px-2 sm:px-4  gap-4 ">
            <div className="flex border-b-2 pb-2 items-center justify-between">
                <p className="flex items-center px-6 text-2xl font-medium text-black"> Activity</p>

                {/* <Button className="text-lg px-4 py-2 outline-none text-black text-center bg-gray-200 hover:bg-gray-400 rounded-full" text={`Min ${menuNum}`} > */}
                    <select className=" bg-white  border-2  py-1 z-50 w-28 text-md rounded-md text-gray-800 border-neutral-400 outline-none font-semibold gap-1">
                        <option onClick={() => setMenuNum("Amount")}>None</option>
                        <option onClick={() => setMenuNum(10)}>$10</option>
                        <option onClick={() => setMenuNum(100)}>$100</option>
                        <option onClick={() => setMenuNum(1000)}>$1000</option>
                        <option onClick={() => setMenuNum(10000)}>$10,000</option>
                    </select>
                {/* </Button> */}
            </div>
            <div className="divide-y divide-gray-200">
                {customers.map(({ eventName, username, laterTime, avatar, position, address, volume, isBet, isSold, price, count }, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between py-3 last:pb-2"
                    >
                        <div className="flex items-center gap-x-3">
                            <img width={52} src={avatar} alt={eventName} className="rounded-md" />
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
                        <p>
                            {laterTime} ago
                        </p>
                    </div>
                ))}
            </div >
        </div >
    );
};

export default ActivityListItem;
