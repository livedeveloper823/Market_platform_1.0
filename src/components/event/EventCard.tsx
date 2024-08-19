import React from "react";
import { event } from "../../contents/event";
import { Button, Tooltip, } from "@material-tailwind/react";
import Betting from "./Betting";
import { ChevronsUp, ChevronsDown, Gift, MessageCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface EventCardProps {
    state: string,
    img: string,
    text: string,
    percentage: string,
    betAmount: string,
}

const EventCard: React.FC<EventCardProps> = ({ img, text, betAmount, state }) => {

    const [which, setWhich] = React.useState < string > ()
    const navigate = useNavigate()
    const [isYesHovered, setIsYesHovered] = React.useState(false);
    const [isNoHovered, setIsNoHovered] = React.useState(false);
    // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const inputValue = e.target.value;
    //     if (inputValue === '' || /^[0-9]*$/.test(inputValue)) {
    //         setBetPrice(inputValue === '' ? 0 : parseInt(inputValue, 10));
    //     }
    // };
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
    return (
        <>
            <div className="h-[180px] overflow-hidden rounded-md p-2 hover:shadow-md  ">
                <Betting isOpen={isModalOpen} onClose={closeModal} which={which} img={img} text={text} />
                <div>
                    <div className="flex px-2 gap-3">
                        <img className="w-[50px] h-[50px]" src={img} alt="evetnImage" />
                        <p className="line-clamp-2 cursor-pointer text-gray-700 text-sm font-bold " onClick={() => { navigate('/event') }}>
                            {text}
                        </p>
                    </div>
                    {state === "1"
                        ?
                        <div className="flex justify-between h-[92px] items-end gap-2">
                            <div className="flex w-full gap-2 px-1 text-xs">
                                <Button
                                    onClick={handleYesBettng}
                                    style={{ textTransform: 'none' }}
                                    className="w-full text-md  px-2 justify-center flex items-center text-sm bg-green-100 hover:bg-green-600 hover:text-white py-2 text-green-600">
                                    Bet Yes
                                    <ChevronsUp />
                                </Button>
                                <Button
                                    onClick={handleNoBettng}
                                    style={{ textTransform: 'none' }}
                                    className="w-full text-md px-2 justify-center flex items-center text-sm bg-red-100 hover:bg-red-600 hover:text-white py-2 text-red-600">
                                    Bet No<ChevronsDown />
                                </Button>
                            </div>
                        </div>
                        :
                        <div className="flex flex-col px-2 py-2 justify-between h-[92px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}                        >
                            {event.nested2.map((item, index) =>
                                <div key={index} className="flex flex-row items-center justify-between py-1">
                                    <div className="flex cursor-pointer" onClick={() => { }}> {item.range} </div>
                                    <div className="flex items-center  gap-4">
                                        {item.percent}%
                                        <div className="flex w-full gap-1 items-center">
                                            <Button
                                                onClick={handleYesBettng}
                                                style={{ textTransform: 'none' }}
                                                onMouseEnter={() => setIsYesHovered(true)}
                                                onMouseLeave={() => setIsYesHovered(false)}
                                                className={`w-full border-none text-nowrap items-center px-2 py-1 text-xs bg-green-300 text-green-600`}>
                                                {isYesHovered ? `${item.percent}%` : 'Yes'}
                                            </Button>
                                            <Button
                                                onClick={handleNoBettng}
                                                style={{ textTransform: 'none' }}
                                                onMouseEnter={() => setIsNoHovered(true)}
                                                onMouseLeave={() => setIsNoHovered(false)}
                                                className={`w-full border-none text-nowrap items-center px-2 py-1 bg-red-300 text-red-600`}>
                                                {isNoHovered ? `${100 - Number(item.percent)}%` : 'No'}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }

                    <div className="flex px-4 h-[30px] justify-between  text-gray-400 items-center">
                        <h4>${betAmount}k Bet</h4>
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