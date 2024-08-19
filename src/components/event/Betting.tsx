
import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { CircleX } from "lucide-react";
import SignInModal from "../SignInModal";

interface BettingProps {
    isOpen: boolean;
    onClose: () => void;
    which: string | undefined;
    img: string,
    text: string
}
const Betting: React.FC<BettingProps> = ({ isOpen, onClose, which, img, text }) => {
    if (!isOpen) return null;
    const navigate = useNavigate()
    const [betPrice, setBetPrice] = React.useState < number > (0);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === '' || /^[0-9]*$/.test(inputValue)) {
            setBetPrice(inputValue === '' ? 0 : parseInt(inputValue, 10));
        }
    };
    const [inOpen, setInOpen] = React.useState(false);
    const handleInClick = () => {
        setInOpen(!inOpen);
    };

    return (

        <div className=" ">
            <div className="h-[36px] justify-between items-center flex py-4 gap-8">
                <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
                <img className="w-[20px] h-[20px]" src={img} alt="" />
                <p className="line-clamp-1 cursor-pointer text-gray-700 text-base font-bold " onClick={() => { navigate('/event') }}>
                    {text}
                </p>
                <div className="items-center">
                    <CircleX className="cursor-pointer" size={18} onClick={onClose} />
                </div>
            </div>

            <div className="flex h-[100px] items-center py-4 gap-2">
                <div className="flex w-full border rounded-md items-center py-2 px-1 justify-between gap-2  ">
                    <input
                        className="w-12 items-center text-center"
                        type="text"
                        value={`$${betPrice}`}
                        onChange={handleInputChange}
                    />
                    <div className="gap-1 items-center flex">
                        <Button style={{ fontSize: '16px' }}
                            className="text-lg font-medium text-gray-400 px-2 py-0 bg-gray-200 rounded-md cursor-pointer"
                            onClick={() => setBetPrice(prevNumber => Math.max(prevNumber + 1, 0))}
                        >+1
                        </Button>

                        <Button style={{ fontSize: '16px' }}
                            className="text-lg font-medium text-gray-400 px-1 py-0 bg-gray-200 rounded-md cursor-pointer"
                            onClick={() => setBetPrice(prevNumber => Math.max(prevNumber + 10, 0))}
                        >+10
                        </Button>
                    </div>
                </div>
                <div className="w-full">
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={betPrice}
                        className="slider rounded-3 border border-dark w-full"
                        id="myRange"
                        onChange={(e) => setBetPrice(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className=" flex h-[12px] justify-between  text-gray-400 items-center">
                {which === 'yes' &&
                    <Button style={{ fontSize: '16px', textTransform: 'none' }}
                        className="z-50 text-lg w-full font-medium px-1 py-0.5 rounded-md cursor-pointer  bg-green-600 hover:bg-green-600 text-white "
                        onClick={handleInClick}
                    >
                        <p className="">Bet Yes</p>
                        <p className="text-sm">To win ${betPrice}</p>
                    </Button>
                }

                {which === 'No' &&
                    <Button style={{ fontSize: '16px', textTransform: 'none' }}
                        className="z-50 text-lg w-full font-medium px-1 py-0.5 rounded-md cursor-pointer  bg-orange-500  hover:bg-orange-600 text-white "
                        onClick={handleInClick}
                    >
                        <p className="">Bet No</p>
                        <p className="text-sm">To win ${betPrice}</p>
                    </Button>
                }
            </div>
        </div>
    )


}
export default Betting;