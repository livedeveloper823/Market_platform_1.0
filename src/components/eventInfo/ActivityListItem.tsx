import React from "react";
import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
import { customers } from "../database";
import { Tooltip } from "@material-tailwind/react";

const ActivityListItem: React.FC = () => {
    const [, setMenuNum] = React.useState < number | string > ('Amount');
    const navigate = useNavigate();
    return (
        <div className="md:px-2 sm:px-4 mt-4 gap-4 ">
            <div className="flex border-b-2 pb-2 items-center justify-between">
                <p className="flex items-center text-3xl font-medium text-textWhiteColor"> Activity</p>

                {/* <Button className="text-lg px-4 py-2 outline-none text-black text-center bg-gray-200 hover:bg-gray-400 rounded-full" text={`Min ${menuNum}`} > */}
                <select className="bg-cardBg text-textWhiteColor  border border-gray-300  py-1 z-50 w-40 text-md rounded-md text-gray-800  px-2 font-semibold gap-1">
                    <option onClick={() => setMenuNum("Amount")}>Min Amount</option>
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
                        className="flex items-center justify-between px-2 py-3 last:pb-2"
                    >
                        <div className="flex justify-stretch gap-3">
                            <img width={48} src={avatar} alt={eventName} className="rounded-md" />
                            <div>
                                <p className="text-textColor cursor-pointer" onClick={() => navigate('/event')}>
                                    {eventName}
                                </p>

                                <div className="text-sm items-center flex  gap-1">
                                    <Tooltip
                                        className="bg-white dark:bg-darkBg border text-black z-50 rounded-lg"
                                        content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                    >
                                        <p className="text-textWhiteColor text-base font-semibold cursor-pointer" onClick={() => navigate('/profile')}> {username}</p>
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
                        <p className="text-textWhiteColor">
                            {laterTime} ago
                        </p>
                    </div>
                ))}
            </div >
        </div >
    );
};

export default ActivityListItem;
