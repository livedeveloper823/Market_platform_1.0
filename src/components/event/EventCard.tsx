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
    eventName?: string,
    volume?: number,
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
            <div className="bg-cardBg hover:bg-cardHoverBg text-textColor h-[180px] overflow-hidden rounded-md shadow-[0_2px_12px_1px_rgba(0,0,0,0.1)] px-2  hover:shadow-md">
                <Betting isOpen={isModalOpen} onClose={closeModal} which={which} img={img} text={eventName} />
                <div className="px-1 py-2">
                    <div className="flex px-2 justify-between items-center">
                        <div className="flex gap-4 ">
                            <img className="w-[50px] h-[50px] rounded-md" src={img} alt="evetnImage" />
                            {/* <p className="line-clamp-2 cursor-pointer text-gray-700 text-sm font-bold " onClick={() => { navigate(`/event`) }}> */}
                            <p className="line-clamp-2 cursor-pointer  text-sm font-bold hover:underline " onClick={() => { navigate(`/event/${eventName}?tid=${tid}`) }}>
                                {eventName}
                            </p>
                        </div>
                        <div className=" flex flex-col cursor-default text-center ">
                            <SemiCircleProgressBar  percentage={43} strokeWidth={5} showPercentValue diameter={70} stroke={getStrokeColor(34)} />
                            <p className="text-sm">Chance</p>
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
                                    className="w-full text-md rounded-md p-2 justify-center flex items-center text-sm bg-yesBg hover:bg-yesHoverBg text-yesBtnText hover:text-white"
                                />

                                <Button
                                    text="Bet No"
                                    icon={<ChevronsDown />}
                                    onClick={handleNoBettng}
                                    className="w-full text-md rounded-md p-2 justify-center flex items-center text-sm bg-noBg hover:bg-noHoverBg text-noBtnText hover:text-white" />
                            </div>
                        </div>
                        :
                        <div className="text-textColor flex flex-col justify-between h-[88px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                            {event.nested2.map((item, index) =>
                                <div key={index} className="flex flex-row items-center justify-between py-0.5">
                                    <div className="flex cursor-pointer" onClick={() => { }}> {item.range} </div>
                                    <div className="flex items-center gap-4">
                                        {item.percent}%
                                        <div className="grid grid-cols-2 w-full gap-1 items-center">
                                            <Button
                                                key={index}
                                                onClick={handleYesBettng}
                                                onMouseEnter={() => setIsYesHovered(index)}
                                                onMouseLeave={() => setIsYesHovered(null)}
                                                text={isYesHovered == index ? `${item.percent}%` : 'Yes'}
                                                className={`w-9 text-center font-semibold text-nowrap px-2 py-1 rounded-md text-xs bg-yesBg hover:bg-yesHoverBg text-yesBtnText hover:text-white`} />

                                            <Button
                                                key={index}
                                                onClick={handleNoBettng}
                                                text={isNoHovered == index ? `${100 - Number(item.percent)}%` : 'No'}
                                                onMouseEnter={() => setIsNoHovered(index)}
                                                onMouseLeave={() => setIsNoHovered(null)}
                                                className={`w-9 text-center font-semibold text-nowrap text-xs rounded-md px-2 py-1 bg-noBg hover:bg-noHoverBg text-noBtnText hover:text-white`} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }

                    <div className="flex px-1 h-[30px] justify-between  text-gray-400 items-center">
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