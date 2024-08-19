import React from 'react';
import { Tooltip, Avatar } from '@material-tailwind/react'
import { UserPropertyProps } from '../../types/profile';
const UserProperty: React.FC<UserPropertyProps> = ({ avatar, username, address, position, volume }) => {
    return (
        <Tooltip className="bg-white border-2 text-black z-50 rounded-lg" content={
            <div className=" ">
                <div className="flex items-center py-1 mb-3 ">
                    <Avatar src={avatar} />
                    {/* <img className="w-8 rounded-full" src={avatar} alt="" /> */}
                    <div className="flex flex-col ">
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
        }>
            <div className='flex font-normal items-center gap-2'>
                {avatar ? (
                    <div className='flex items-center gap-3'>
                        <Avatar
                            
                            src={avatar}
                            className={`${avatar ? 'rounded-full' : 'rounded'} w-8 h-8`}
                        />
                        <span>{username}</span>
                    </div>
                ) : (
                    <span>{username}</span>
                )}
            </div>
        </Tooltip>
    )
}

export default UserProperty;