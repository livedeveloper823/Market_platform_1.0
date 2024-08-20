import React, { ChangeEvent } from "react";
import { Button, Tooltip, Typography, Popover, PopoverHandler, PopoverContent, Input } from "@material-tailwind/react";
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

    return (
        <div className="gap-4">
            <div className="flex justify-between  ">
                <div className="flex items-center gap-2">
                    <p className="test-lg">Outcome</p>
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
                                <Typography className="font-medium">
                                    Why don't they add up to 100?
                                    <span className="text-sm font-normal opacity-85">
                                        Slight offsets happen due to market uncertainty and other price factors.
                                    </span>
                                </Typography>
                            </div>
                        }
                        className="bg-white text-black z-10"
                    >
                        <Info size={10} className="cursor-pointer" />
                    </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                    <RefreshCcw onClick={() => { }} size={14} />

                    {popOver == false ?
                        <Tooltip content="Trade settings">
                            <Settings className="cursor-pointer" onClick={() => { setPopOver(true) }} size={20} />
                        </Tooltip>
                        : <Popover>
                            <PopoverHandler>
                                <Settings className="cursor-pointer" onClick={() => { setPopOver(false) }} size={20} />
                            </PopoverHandler>
                            <PopoverContent className="items-center gap-4 z-10  ">
                                <div>
                                    <p className="text-md font-medium py-2">Tania Andrew</p>
                                    <div className="flex justify-between border-none gap-2">
                                        <Button style={{ textTransform: 'none' }} value="market" className={`${orderType === 'market' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-md`} onClick={() => changeOrderType('market')} >Market</Button>
                                        <Button style={{ textTransform: 'none' }} value="limit" className={`${orderType === 'limit' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-md`}
                                            onClick={() => changeOrderType('limit')} >Limit </Button>
                                        <Button style={{ textTransform: 'none' }} value="amm" className={`${orderType === 'amm' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-md`}
                                            onClick={() => changeOrderType('amm')} >Amm</Button>

                                    </div>
                                </div>

                                <div>
                                    <p className="flex text-md gap-1 items-center font-medium py-2">Slippage tolerance
                                        <Tooltip placement="bottom" className=" z-10" content={
                                            <div className="w-[12vw]">
                                                Your transaction will revert if prices change unfavorably due to other orders.
                                                This does not account for slippage caused by your own order.
                                            </div>
                                        }>
                                            <Info size={14} />
                                        </Tooltip>

                                    </p>
                                    <div className="flex justify-between gap-2">
                                        <Button value="zeroOne" className={`${tolerance === 'zeroOne' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-md`}
                                            onClick={() => changeTolerence('zeroOne')} >0.1%</Button>
                                        <Button value="five" className={`${tolerance === 'five' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-md`}
                                            onClick={() => changeTolerence('five')} >0.5%</Button>
                                        <Button value="one" className={`${tolerance === 'one' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-md`}
                                            onClick={() => changeTolerence('one')}  >1%</Button>

                                        <div className="flex w-[3vw] items-center border px-1 border-black rounded-md ">
                                            <Input className="outline-none border-none" size="md" />
                                            < Percent />
                                        </div>

                                    </div>
                                </div>

                            </PopoverContent>
                        </Popover>
                    }
                </div>
            </div>
            <div className="flex w-full gap-2 py-1 justify-center">
                <YesNoBtn />
            </div>

            {activeTab === "buy" ? (
                <div>
                    < div className=" flex flex-col py-1 gap-2 ">
                        <p>Amount</p>
                        <div className="flex gap-2 items-center justify-between px-4 py-2 rounded-md border">
                            <Tooltip className="z-50" content="-$10">
                                <Minus className="items-center w-8 h-6 text-black bg-gray-300 rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber - 10, 0)) }} />
                            </Tooltip>
                            <input className="w-full text-center" type="text" value={`$${number}`} onChange={handleInputChange} />
                            <Tooltip className="z-10" content="+$10">
                                <Plus className="items-center w-8 h-6 text-black bg-gray-300 rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber + 10, 0)) }} />
                            </Tooltip>
                        </div>
                        <Button style={{ textTransform: "none" }} onClick={() => { }} className="w-full bg-blue-600  text-white px-4 py-2 text-lg font-semibold rounded-md ">Log In</Button>
                    </div>
                    <div className="">
                        <div className="flex justify-between px-3 ">
                            <p>Avg price</p>
                            <p className="border-dotted border-b-2 text-indigo-600 ">{number} ¢</p>
                        </div>

                        <div className="flex justify-between px-3 ">
                            <p>Est. amount received</p>
                            <p className=" ">${number}</p>
                        </div>

                    </div>
                </div>
            ) : (
                <div>
                    < div className=" flex flex-col py-1 gap-2 ">
                        <p>Shares</p>
                        <div className="flex gap-2 justify-between px-4 py-2 rounded-md border">
                            <Tooltip className="z-50" content="-10">
                                <Button className="z-50 p-1 text-black bg-gray-300 rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber - 10, 0)) }}><Minus /></Button>
                            </Tooltip>
                            <input className="w-full text-center" type="text" value={`${number}`} onChange={handleInputChange} />
                            <Tooltip className="z-10" content="+10">
                                <Button className="items-center p-1  text-black bg-gray-300 rounded-md" onClick={() => { setNumber(prevNumber => Math.max(prevNumber + 10, 0)) }}><Plus /></Button>
                            </Tooltip>
                        </div>
                        <Button style={{ textTransform: "none" }} onClick={() => { }} className="w-full bg-blue-600  text-white px-4 py-2 text-lg font-semibold rounded-md ">Log In</Button>

                    </div>
                    <div className=" ">
                        <div className="flex justify-between px-3 ">
                            <p>Avg price</p>
                            <p className="border-dotted border-b-2 text-indigo-600 ">{number} ¢</p>
                        </div>

                        <div className="flex justify-between px-3 ">
                            <p>Shares</p>
                            <p className=" ">{number} ¢</p>
                        </div>

                        <div className="flex justify-between px-3 ">
                            <p className="text-nowrap">Potential return</p>
                            <p className="text-green-500 ">
                                ${number}({number / 100}%)</p>
                        </div>
                    </div>
                </div>
            )}



        </div>
    )
}
export default BuySell;
