import React from 'react';
import { UserPropertyProps } from '../../types/profile';
const UserProperty: React.FC<UserPropertyProps> = ({ avatar, username, address, position, volume }) => {
    return (
        <div className="flex flex-col gap-2 p-3  ">
            <div className="flex justify-between ">
                <img width={48} className='rounded-md' src={avatar} />
                {/* <img className="w-8 rounded-full" src={avatar} alt="" /> */}
                <div className="flex flex-col gap-2   ">
                    <p className="font-bold px-4">{username}</p>
                    <p className="font-bold px-4">{address}</p>
                </div>
            </div>
            <div className=" flex gap-6  ">
                <div className="flex flex-col ">
                    <p className="font-medium">${position}</p>
                    <p className="font-medium">Positions</p>
                </div>
                <div className="flex flex-col ">
                    <p className="font-medium">${volume}</p>
                    <p className="font-medium">Volume</p>
                </div>
            </div>
        </div>
    )
}

export default UserProperty;