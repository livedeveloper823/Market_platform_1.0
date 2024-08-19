import React from "react";
// import { ActivityListItemProps } from "../../types/rank"; // Make sure this path is correct
import { Card, Button, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { customers } from "../database";
// Define the ActivityList component

const RelatedListItem: React.FC = () => {
    const navigate = useNavigate();
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    }
    return (
        <Card className="md:px-2 sm:px-4 lg:px-6 flex gap-4 border-b-2 border-gray-100">
            <CardBody>
                <div className="divide-y divide-gray-200">
                    {customers.map(({ eventName, avatar, yes, no }, index) => (
                        <div
                            key={index}
                            className="flex hover:bg-gray-200 hover:rounded-md items-center justify-between pb-3 pt-3 last:pb-0"
                        >
                            <div className="flex items-center gap-x-3">
                                <Avatar size="md" src={avatar} alt={eventName} variant="rounded" />
                                <div>
                                    {eventName &&
                                        <Typography className="cursor-pointer" onClick={() => navigate('/event')}>
                                            {eventName}
                                        </Typography>
                                    }
                                    <Typography className="text-sm items-center flex gap-1">
                                        <p className="font-semibold">$124,937 Bet</p>
                                    </Typography>
                                </div>
                            </div>
                            <Typography className="flex gap-4 text-md font-semibold">
                                <Button style={{ textTransform: "none" }} onClick={() => { convertColor(); }} className=" rounded-lg bg-green-100 text-green-800 px-2"  >{yes} ¢</Button>
                                <Button style={{ textTransform: "none" }} onClick={() => { convertColor(); }} className=" rounded-lg bg-orange-200 text-orange-600 px-2 "  >{no}¢</Button>
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardBody >
        </Card >
    );
};

export default RelatedListItem;
