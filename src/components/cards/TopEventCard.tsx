import React from "react";
import { TopEventCardProps } from "../../types";

const TopEventCard: React.FC<TopEventCardProps> = ({ text, btn_text, img_url, onClick, className }) => {
    return (
        <div className={`${className} flex items-center justify-between lg:w-[100vw] h-[16vh] rounded-xl text-white`}>
            <div className="px-2 items-center text-white ">
                <p className="text-lg font-bold pb-3">{text}</p>
                <button onClick={onClick} className="text-sm px-3 py-1 bg-slate-500 hover:bg-gray-400 rounded-full">{btn_text}</button>
            </div>
            <img src={img_url} width={100} alt="" className=" flex rounded-lg " />
            {/* <img src={img_url} width={24} alt="" className="lg:w-24 sm:w-20 w-20 border flex rounded-lg border-white" /> */}
        </div>
    )
}

export default TopEventCard;