import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { Shield, Ellipsis, Heart } from 'lucide-react';
import { customers } from "../database";
import UserProperty from '../cards/UserProperty';

import { ChevronUp, ChevronDown } from 'lucide-react';
import { Tooltip } from '@material-tailwind/react';
type Option = {
    value: string;
    label: string;
};
const options = [
    { value: 'home', label: 'Newest' },
    { value: 'like', label: 'Like' },
    { value: 'holders', label: 'Holders' },
];
const CommentListItem = () => {
    const [selectValue, setSelectValue] = React.useState < string > ('');
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsDropdownOpen((prev) => !prev);
    }

    const handleOptionClick = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
        setIsDropdownOpen(false);
    };

    const navigate = useNavigate();
    return (

        <div className="flex flex-col gap-3">
            <div className="flex w-full px-4 justify-between items-center py-1 border border-gray-500 focus-within:border-gray-600 rounded-md">
                <input
                    type="text"
                    value={selectValue}
                    onChange={e => setSelectValue(e.target.value.trim())}
                    className="w-full px-2 py-2 bg-bgColor text-textColor focus-within:border-black dark:focus-within:border-white"
                    placeholder='Add a Comment'

                />
                <Button
                    text="Post"
                    className={`${selectValue ? "text-blue-700  cursor-pointer" : "text-blue-400  cursor-not-allowed  "} w-14 text-center rounded-full `}
                />
            </div>

            <div className="flex bg-cardBg text-textColor items-center text-lg font-semibold gap-2 rounded-md py-3 justify-center">
                <Shield />
                <p className="text-base font-semibold">Beware of external links, they may be phishing attacks.</p>
            </div>

            <div className="flex items-center gap-2 ">
                <p className= "text-textColor text-lg font-medium">Sort by</p>

                <div className="relative w-28">
                    <div className="flex justify-between px-3 py-1 gap-1 text-textColor bg-cardBg rounded-full cursor-pointer border items-center" onClick={toggleDropdown}>
                        {selected.label}
                        {isDropdownOpen ? <ChevronUp className='text-textColor' /> : <ChevronDown className='text-textColor' />}

                    </div>
                    {isOpen && (
                        <div className="absolute z-10 w-full focus:border-black rounded-lg gap-3 bg-cardBg border shadow-md ">
                            {options.map((option) => (
                                <div key={option.value} className="flex px-2 py-2 cursor-pointer text-textColor hover:bg-selBtnHoverColor" onClick={() => handleOptionClick(option)}>
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* <div className="md:px-2 sm:px-4 lg:px-6 flex gap-4 border-b-2 border-gray-100"> */}
            <div className="flex gap-4 border-b-2 border-gray-100">
                <div>
                    <div className="divide-y divide-gray-200">
                        {customers.map(({ username, address, avatar, position, volume }, index) => (
                            <div
                                key={index}
                                className="flex hover:rounded-md gap-2 py-2 last:pb-2"
                            >
                                <div className="items-center">
                                    <Tooltip
                                        className="bg-bgColor border rounded-md"
                                        content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                    >
                                        <img width={88} className='rounded-full' src={avatar} alt={avatar} onClick={() => navigate('/profile')} />
                                    </Tooltip>
                                </div>
                                <div className=" ">
                                    <div className="flex py-1 justify-between">
                                        <div className='flex items-center gap-2'>
                                            <Tooltip
                                                className="bg-bgColor border rounded-md"
                                                content={<UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />}
                                            >
                                                <p className='cursor-pointer hover:underline text-textWhiteColor' onClick={() => navigate('/profile')}>{username}</p>
                                            </Tooltip>
                                            <p className='bg-green-200 text-green-600 text-sm rounded-md px-1'>15.8K</p>
                                            <p className="text-gray-600 text-sm">2d ago</p>
                                        </div>
                                        <Ellipsis className='cursor-pointer bg-bgColor text-textColor' onClick={() => { alert('Login') }} />
                                    </div>

                                    <p className="indent-3 text-textColor">
                                        This market will resolve to "Yes" if the data for the Global Land-Ocean Temperature Index for August 2024 shows an increase greater than that of any prior August when it is released. Otherwise, this market will resolve to "No".
                                    </p>

                                    <div className='flex items-center gap-1 text-textColor'>
                                        <Heart size={18} /> {position}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        </div >
    );
};

export default CommentListItem;