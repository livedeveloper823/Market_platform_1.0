import React from "react";
import { TopEventCardProps } from "../../types";

const TopEventCard: React.FC<TopEventCardProps> = ({ text, btn_text, img_url, onClick, className }) => {
    return (
        <div className={`${className} flex items-center justify-between w-[20vw] h-[16vh] rounded-xl`}>
            <div className="flex flex-col gap-10 ml-3 items-center text-white">
                <p className="text-lg">{text}</p>
                <button onClick={onClick} className="text-xs px-2 py-1 bg-gray-500 hover:bg-gray-400 rounded-full">{btn_text}</button>
            </div>
            <img src={img_url} alt="" className="w-20 h-20 border-2 rounded-lg border-white" />
        </div>
    )
}

export default TopEventCard;