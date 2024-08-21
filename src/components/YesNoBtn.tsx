import React from 'react'
import { BtnProps } from "../types/buttons";
import Button from './Button/Button';
import { Ellipsis } from 'lucide-react';

const YesNoBtn: React.FC<BtnProps> = () => {
    const ref = React.useRef < HTMLDivElement | null > (null)
    const [convertBgColor, setConvertBgColor] = React.useState < boolean > (false);
    const convertColor = () => {
        setConvertBgColor(!convertBgColor);
    }

    const [moreOpen, setMoreOpen] = React.useState < boolean > (false)
    const toggleFooterMore = () => {
        setMoreOpen((prev) => !prev);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setMoreOpen(false);
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
        <div className='bg-white grid grid-cols-2 md:grid-flow-col w-full items-center gap-1 text-center justify-center px-1 '>

            <Button onClick={() => { convertColor(); }} className={`w-full  text-md font-semibold text-nowrap rounded-md py-3 ${!convertBgColor ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`} text='Yes'></Button>
            <Button onClick={() => { convertColor(); }} className={`w-full text-md font-semibold text-nowrap rounded-md  py-3 ${convertBgColor ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'}`} text='No '></Button>

            <div className='md:flex lg:hidden relative w-10'>
                <Button onClick={() => { toggleFooterMore() }} className={`lg:hidden sm:flex w-12 text-md font-semibold text-nowrap rounded-md  py-3 bg-gray-200 p-4  `} icon={<Ellipsis />}></Button>
                {moreOpen === true && (
                    <div className='absolute right-0 border bottom-12 flex flex-col text-start w-44 bg-white z-20 mb-2 rounded-md px-2' ref={ref}>
                        <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Merge Shares'></Button>
                        <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Split Shares'></Button>
                        <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Remove Liquidity(AMM)'></Button>
                        <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Buy Shares'></Button>
                        <Button className={`w-full text-sm font-semibold text-nowrap rounded-md  py-2 `} text='Sell Shares'></Button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default YesNoBtn;