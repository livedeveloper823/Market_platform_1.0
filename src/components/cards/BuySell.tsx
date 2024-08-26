import React, { ChangeEvent } from "react";
import Button from "../Button/Button";
import { Tooltip } from "@material-tailwind/react";
import { Info, RefreshCcw, Plus, Minus, Settings, Percent } from "lucide-react";
import YesNoBtn from "../YesNoBtn";
interface BuySellProps {
    activeTab: string;
}
const BuySell: React.FC<BuySellProps> = ({ activeTab }) => {
    const [orderType, setOrderType] = React.useState < string | null > ('market');
    const changeOrderType = (value: string) => {
        setOrderType(value);
    };
    const [tolerance, setTolerence] = React.useState < string | null > ('five');
    const changeTolerence = (value: string) => {
        setTolerence(value);
    };

    const [number, setNumber] = React.useState < number > (0);
    const [popOver, setPopOver] = React.useState < boolean > (false);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === '' || /^[0-9]*$/.test(inputValue)) {
            setNumber(inputValue === '' ? 0 : parseInt(inputValue, 10));
        }
    };

    const ref = React.useRef < HTMLDivElement | null > (null)
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setPopOver(false);
        }
    };

    React.useEffect(() => {
        // Add event listener for mouse down events
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="gap-4">
            <div className="flex justify-between  ">
                <div className="flex items-center text-textColor gap-2">
                    <p className="test-lg ">Outcome</p>
                    <Tooltip
                        placement="bottom"
                        content={
                            <div className="w-56 z-10">
                                <div className="font-medium">
                                    What do the prices mean?
                                    <div className="text-sm font-normal opacity-85">
                                        Prices reflect odds of {"yesNumber"}% Yes and {"noNumber"}% No. When it ends, the correct outcome will be $1 and incorrect $0.
                                    </div>
                                </div>
                                <div className="font-medium">
                                    Why don't they add up to 100?
                                    <span className="text-sm font-normal opacity-85">
                                        Slight offsets happen due to market uncertainty and other price factors.
                                    </span>
                                </div>
                            </div>
                        }
                        className="bg-bgColor border z-10"
                    >
                        <Info size={10} className="cursor-pointer" />
                    </Tooltip>
                </div>
                <div className="flex items-center text-textColor gap-2">
                    <RefreshCcw onClick={() => { }} size={14} />

                    <div className="relative ">
                        <Tooltip content="Trade settings">
                            <Settings className="cursor-pointer" onClick={() => { setPopOver(true) }} size={20} />
                        </Tooltip>
                        {popOver == true &&

                            <div className="absolute border rounded-md p-3 items-center gap-4 bg-bgColor z-30 " ref={ref} >
                                <div>
                                    <p className="text-md font-medium py-2">Tania Andrew</p>
                                    <div className="flex border-none gap-2">
                                        <Button value="market" className={`${orderType === 'market' ? 'bg-btnColor text-white' : 'bg-cardBg'}  px-3 py-1 rounded-md`} onClick={() => changeOrderType('market')} text="Market" />
                                        <Button value="limit" className={`${orderType === 'limit' ? 'bg-btnColor text-white' : 'bg-cardBg'} px-3 py-1 rounded-md`}
                                            onClick={() => changeOrderType('limit')} text="Limit" />
                                        <Button value="amm" className={`${orderType === 'amm' ? 'bg-btnColor text-white' : 'bg-cardBg'} px-3 py-1 rounded-md`}
                                            onClick={() => changeOrderType('amm')} text="Amm" />

                                    </div>
                                </div>

                                <div>
                                    <p className="flex text-md gap-1 items-center font-medium py-2">Slippage tolerance
                                        <Tooltip placement="bottom" className="bg-bgColor indent-2 z-10" content={
                                            <div className="w-[12vw]">
                                                Your transaction will revert if prices change unfavorably due to other orders.
                                                This does not account for slippage caused by your own order.
                                            </div>
                                        }>
                                            <Info size={14} />
                                        </Tooltip>

                                    </p>
                                    <div className="flex justify-between gap-2">
                                        <Button value="zeroOne" className={`${tolerance === 'zeroOne' ? 'bg-btnColor text-white' : 'bg-cardBg'} px-3 py-1 rounded-md`}
                                            onClick={() => changeTolerence('zeroOne')} text="0.1%" />
                                        <Button value="five" className={`${tolerance === 'five' ? 'bg-btnColor text-white' : 'bg-cardBg'} px-3 py-1 rounded-md`}
                                            onClick={() => changeTolerence('five')} text="0.5%" />
                                        <Button value="one" className={`${tolerance === 'one' ? 'bg-btnColor text-white' : 'bg-cardBg'} px-3 py-1 rounded-md`}
                                            onClick={() => changeTolerence('one')} text="1%" />
                                        <div className="flex gap-1 items-center border  px-1 border-black dark:bg-darkCardBg rounded-md ">
                                            <input className="px-1 text-balance dark:bg-darkCardBg w-6 " />
                                            <Percent size={16} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-2 py-1 justify-center">
                <YesNoBtn />
            </div>

            {
                activeTab === "buy" ? (
                    <div>
                        <div className=" flex flex-col py-1 gap-2 ">
                            <p className="text-textColor">Amount</p>
                            <div className="flex gap-2 items-center justify-between px-4 py-2 rounded-md border">
                                <Tooltip className="z-50" content="-$10">
                                    <Minus className="items-center w-8 h-6 bg-cardBg text-textColor  rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber - 10, 0)) }} />
                                </Tooltip>
                                <input className="w-full text-center bg-bgColor text-textColor" type="text" value={`$${number}`} onChange={handleInputChange} />
                                <Tooltip className="z-10" content="+$10">
                                    <Plus className="items-center w-8 h-6 bg-cardBg text-textColor rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber + 10, 0)) }} />
                                </Tooltip>
                            </div>
                            <Button onClick={() => { }} className="w-full text-center bg-btnColor text-white px-4 py-2 text-lg font-semibold rounded-md" text="Log In" />
                        </div>
                        <div className="">
                            <div className="flex justify-between px-1">
                                <p className="text-textColor">Avg price</p>
                                <p className="border-dotted border-b-2  text-indigo-600 dark:text-darkBtn">{number} ¢</p>
                            </div>

                            <div className="flex justify-between px-1">
                                <p className="text-textColor">Est. amount received</p>
                                <p className=" text-textColor">${number}</p>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div>
                        <div className=" flex flex-col py-1 gap-2 ">
                        <p className="text-textColor">Shares</p>
                            <div className="flex gap-2 items-center justify-between px-4 py-2 rounded-md border">
                                <Tooltip className="z-50" content="-$10">
                                    <Minus className="items-center w-8 h-6 bg-cardBg text-textColor  rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber - 10, 0)) }} />
                                </Tooltip>
                                <input className="w-full text-center bg-bgColor text-textColor" type="text" value={`$${number}`} onChange={handleInputChange} />
                                <Tooltip className="z-10" content="+$10">
                                    <Plus className="items-center w-8 h-6 bg-cardBg text-textColor  rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber + 10, 0)) }} />
                                </Tooltip>
                            </div>
                            <Button onClick={() => { }} className="w-full text-center bg-blue-600  text-white px-4 py-2 text-lg font-semibold rounded-md" text="Log In" />
                        </div>

                        <div className=" ">
                            <div className="flex justify-between px-1">
                            <p className="text-textColor">Avg price</p>
                                <p className="border-dotted border-b-2 text-indigo-600 ">{number} ¢</p>
                            </div>

                            <div className="flex justify-between px-1">
                            <p className="text-textColor">Shares</p>
                                <p className=" ">{number} ¢</p>
                            </div>

                            <div className="flex justify-between px-1">
                                <p className="text-nowrap text-textColor">Potential return</p>
                                <p className="text-green-500 ">
                                    ${number}({number / 100}%)</p>
                            </div>
                        </div>
                    </div>
                )
            }



        </div >
    )
}
export default BuySell;
