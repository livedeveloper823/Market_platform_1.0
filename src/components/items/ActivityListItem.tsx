import React from "react";
// import { ActivityListItemProps } from "../../types/rank"; // Make sure this path is correct
import { Card, Button, CardBody, Typography, Avatar, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import UserProperty from "../cards/UserProperty";
// Sample customer data
import { customers } from "../database";

const ActivityListItem: React.FC = () => {
    const [menuNum, setMenuNum] = React.useState < number | string > ('Amount');
    const navigate = useNavigate();
    return (
        <Card className="md:px-2 sm:px-4 lg:px-6 gap-4 ">
            <CardBody>
                <div className="flex border-b-2 pb-2 items-center justify-between">
                    <Typography className="text-black font-medium">
                        <p className="flex items-center px-6 py-4 text-3xl font-medium text-black"> Activity</p>
                    </Typography>
                    <Typography
                        variant="small"
                        color="blue"
                        className="font-bold"
                    >
                        <Menu>
                            <MenuHandler>
                                <Button style={{ textTransform: "none" }} className=" px-6 outline-none text-black text-center bg-gray-200 hover:bg-gray-400 rounded-full" >Min ${menuNum}</Button>
                            </MenuHandler>
                            <MenuList className="z-50 w-40 text-md rounded-md text-gray-800 border-neutral-400 outline-none font-semibold gap-1">
                                <MenuItem onClick={() => setMenuNum("Amount")}>None</MenuItem>
                                <MenuItem onClick={() => setMenuNum(10)}>$10</MenuItem>
                                <MenuItem onClick={() => setMenuNum(100)}>$100</MenuItem>
                                <MenuItem onClick={() => setMenuNum(1000)}>$1000</MenuItem>
                                <MenuItem onClick={() => setMenuNum(10000)}>$10,000</MenuItem>
                            </MenuList>
                        </Menu>
                    </Typography>
                </div>
                <div className="divide-y divide-gray-200">
                    {customers.map(({ eventName, username, laterTime, avatar, position, address, volume, isBet, isSold, price, count }, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between py-3 last:pb-2"
                        >
                            <div className="flex items-center gap-x-3">
                                <Avatar size="md" src={avatar} alt={eventName} variant="rounded" />
                                <div>
                                    {eventName &&
                                        <Typography className="font-semibold cursor-pointer" onClick={() => navigate('/event')}>
                                            {eventName}
                                        </Typography>
                                    }
                                    <Typography className="text-sm items-center flex gap-1">
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
                                    </Typography>
                                </div>
                            </div>
                            <Typography>
                                {laterTime} ago
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardBody >
        </Card >
    );
};

export default ActivityListItem;
