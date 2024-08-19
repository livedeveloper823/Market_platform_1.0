import React from "react";
import { Button } from "@material-tailwind/react"
interface CardProps {
    range: string,
    percentage: string,
}
const EventNestedList: React.FC<CardProps> = ({ range, percentage }) => {
    const [isYesHovered, setIsYesHovered] = React.useState(false);
    const [isNoHovered, setIsNoHovered] = React.useState(false);
    return (
        <>
            <div className="flex flex-row items-center justify-between py-1">
                <div className="flex cursor-pointer" onClick={() => { }}> {range} </div>
                <div className="flex items-center  gap-4">
                    {percentage}%
                    <div className="flex w-full gap-1 items-center">
                        <Button
                            onClick={() => { }}
                            style={{ textTransform: 'none' }}
                            onMouseEnter={() => setIsYesHovered(true)}
                            onMouseLeave={() => setIsYesHovered(false)}
                            className={`w-full border-none text-nowrap items-center px-2 py-1 text-xs bg-green-300 text-green-600`}>
                            {isYesHovered ? `${percentage}%` : 'Yes'}
                        </Button>
                        <Button
                            style={{ textTransform: 'none' }}
                            onMouseEnter={() => setIsNoHovered(true)}
                            onMouseLeave={() => setIsNoHovered(false)}
                            className={`w-full border-none text-nowrap items-center px-2 py-1 bg-red-300 text-red-600`}>
                            {isNoHovered ? `${100 - Number(percentage)}%` : 'No'}
                        </Button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EventNestedList;