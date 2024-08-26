import React from 'react';
import { UserPropertyProps } from '../../types/profile';
const UserProperty: React.FC<UserPropertyProps> = ({ avatar, username, address, position, volume }) => {
    return (
        <div className="flex flex-col gap-2 p-2">
            <div className="flex justify-between ">
                <img width={48} className='rounded-md' src={avatar} />
                {/* <img className="w-8 rounded-full" src={avatar} alt="" /> */}
                <div className="flex flex-col gap-2   ">
                    <p className="font-bold px-4 text-xl text-textWhiteColor">{username}</p>
                    <p className="font-bold px-4 text-gray-500">{address}</p>
                </div>
            </div>
            <div className=" flex gap-6  ">
                <div className="flex flex-col ">
                    <p className="font-medium text-lg text-black text-textWhiteColor">${position}</p>
                    <p className="font-medium text-gray-500">Positions</p>
                </div>
                <div className="flex flex-col ">
                    <p className="font-medium text-lg text-black text-textWhiteColor">${volume}</p>
                    <p className="font-medium  text-gray-500">Volume</p>
                </div>
            </div>
        </div>
    )
}

export default UserProperty;