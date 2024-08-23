import React from "react";
import { event } from "../../contents/event";
import Button from "../Button/Button";
import { Tooltip } from "@material-tailwind/react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import Betting from "./Betting";
import { ChevronsUp, ChevronsDown, Gift, MessageCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface EventCardProps {
    tid?: number,
    startDate?: Date | undefined,
    endDate?: Date | undefined,
    img?: string,
    state: number,
    eventName: string,
    volume: number,
}

const EventCard: React.FC<EventCardProps> = ({ tid, img, eventName, volume, state }) => {

    const [isYesHovered, setIsYesHovered] = React.useState < number | null > (null);
    const [which, setWhich] = React.useState < string > ()
    const [isNoHovered, setIsNoHovered] = React.useState < number | null > (null);

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const handleYesBettng = () => {
        setWhich("yes")
        openModal()
    }
    const handleNoBettng = () => {
        setWhich("No")
        openModal()
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setWhich('');
    };

    const navigate = useNavigate();
    const getStrokeColor = (percentage: number): string => {
        if (percentage < 30) {
            return '#ff0000'; // Red for low percentage
        } else if (percentage < 70) {
            return '#ffcc00'; // Yellow for medium percentage
        } else {
            return '#4caf50'; // Green for high percentage
        }
    };

    return (
        <>
            <div className="h-[180px] overflow-hidden rounded-md p-2 shadow-[0_2px_12px_1px_rgba(0,0,0,0.1)] hover:shadow-md  ">
                <Betting isOpen={isModalOpen} onClose={closeModal} which={which} img={img} text={eventName} />
                <div className="-z-20">
                    <div className="flex px-2 justify-between items-center">
                        <div className="flex gap-2">
                            <img className="w-[50px] h-[50px] rounded-md" src={img} alt="evetnImage" />
                            {/* <p className="line-clamp-2 cursor-pointer text-gray-700 text-sm font-bold " onClick={() => { navigate(`/event`) }}> */}
                            <p className="line-clamp-2 cursor-pointer text-gray-700 text-sm font-bold " onClick={() => { navigate(`/event/${eventName}&tid=${tid}`) }}>
                                {eventName}
                            </p>
                        </div>
                        <div className="flex flex-col cursor-default text-center -z-10 ">
                            <SemiCircleProgressBar percentage={43} strokeWidth={5} showPercentValue diameter={80} stroke={getStrokeColor(34)} />
                            <p className="text-sm text-gray-600">Chance</p>
                        </div>
                    </div>
                    {state == 1
                        ?
                        <div className="flex justify-between h-[88px] items-end gap-2">
                            <div className="grid grid-cols-2 w-full gap-2 px-1 text-xs">
                                <Button
                                    text="Bet Yes"
                                    icon={<ChevronsUp />}
                                    onClick={handleYesBettng}
                                    className="w-full text-md rounded-md  px-2 justify-center flex items-center text-sm bg-green-100 hover:bg-green-600 hover:text-white py-2 text-green-600" />

                                <Button
                                    text="Bet No"
                                    icon={<ChevronsDown />}
                                    onClick={handleNoBettng}
                                    className="w-full  text-md rounded-md px-2 justify-center flex items-center text-sm bg-red-100 hover:bg-red-600 hover:text-white py-2 text-red-600" />
                            </div>
                        </div>
                        :
                        <div className="flex flex-col px-2 py-2 justify-between h-[88px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}                        >
                            {event.nested2.map((item, index) =>
                                <div key={index} className="flex flex-row items-center justify-between py-0.5">
                                    <div className="flex cursor-pointer" onClick={() => { }}> {item.range} </div>
                                    <div className="flex items-center  gap-4">
                                        {item.percent}%
                                        <div className="grid grid-cols-2 w-full gap-1 items-center">
                                            <Button
                                                key={index}
                                                onClick={handleYesBettng}
                                                onMouseEnter={() => setIsYesHovered(index)}
                                                onMouseLeave={() => setIsYesHovered(null)}
                                                text={isYesHovered == index ? `${item.percent}%` : 'Yes'}
                                                className={`w-9 text-center text-nowrap px-2 py-1 rounded-md text-xs bg-green-300 text-green-600`} />

                                            <Button
                                                key={index}
                                                onClick={handleNoBettng}
                                                text={isNoHovered == index ? `${100 - Number(item.percent)}%` : 'No'}
                                                onMouseEnter={() => setIsNoHovered(index)}
                                                onMouseLeave={() => setIsNoHovered(null)}
                                                className={`w-9 text-center text-nowrap text-xs rounded-md px-2 py-1 bg-red-300 text-red-600`} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }

                    <div className="flex px-4 h-[30px] justify-between  text-gray-400 items-center">
                        <h4>${volume}k Bet</h4>
                        <div className="flex gap-2 items-center ">
                            <Tooltip content="Rewards">
                                <Gift size={18} className="cursor-pointer" />
                            </Tooltip>

                            <MessageCircle size={18} className="cursor-pointer" />

                            <Tooltip content="Add to watchlist">
                                <Star size={18} className="cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}


export default EventCard;