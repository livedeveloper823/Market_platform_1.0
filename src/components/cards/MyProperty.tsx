import React from "react";
import { MyPropertyProps } from "../../types";
const MyProperty: React.FC<MyPropertyProps> = ({ className, text, icon, value }) => {
    return (
        <div className="flex md:w-full border  px-6 py-4   rounded-xl">
            <div className="flex flex-col items-start gap-3 text-black-700" >
                <div className={`${className} p-2 rounded-full`}>
                    {icon}
                </div>
                <div className="flex flex-col text-wrap">
                    <div className="text-sm text-gray-400 text-nowrap">{text}</div>
                    <div className="text-2xl font-bold">${value}</div>
                </div>
            </div>
        </div>
    )
}
export default MyProperty;
