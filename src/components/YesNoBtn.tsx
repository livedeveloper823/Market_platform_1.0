import React from 'react'
import { Button } from '@material-tailwind/react';
import { BtnProps } from "../types/buttons";

const YesNoBtn: React.FC<BtnProps> = () => {
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    }

    return (
        <div className=' flex w-full gap-4 justify-center '>
            <Button style={{ textTransform: "none" }} onClick={() => { convertColor(); }} className={`w-full text-md font-semibold text-nowrap rounded-md py-3 ${!convertBgColor ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`} >Yes 53¢</Button>
            <Button style={{ textTransform: "none" }} onClick={() => { convertColor() }} className={`w-full text-md font-semibold text-nowrap rounded-md py-3 ${convertBgColor ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'}`} >No 40¢</Button>
        </div>
    )
}
export default YesNoBtn;