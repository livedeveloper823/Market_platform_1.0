import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { Shield, Ellipsis, Heart } from 'lucide-react';
import { customers } from "../database";
import UserProperty from '../cards/UserProperty';

import { Trophy, House, ChevronUp, ChevronDown } from 'lucide-react';
const options = [
    { value: 'home', label: 'Home', icon: <House /> },
    { value: 'user', label: 'User', icon: <Trophy /> },
];
type Option = {
    value: string;
    label: string;
    icon: JSX.Element;  
};
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

        <div className="flex flex-col px-2 gap-3">
            <div className="flex w-full px-4 justify-between items-center py-1 border border-gray-500 focus-within:border-black rounded-full">
                <input
                    type="text"
                    value={selectValue}
                    onChange={e => setSelectValue(e.target.value.trim())}
                    className="w-full px-2 py-2"
                    placeholder='Add a Comment'

                />
                <Button
                    text="Post"
                    className={`${selectValue ? "text-white bg-gray-400" : "text-blue-400"} w-14 text-center rounded-full cursor-pointer`}
                />
            </div>

            <div className="flex bg-gray-200 border-2 items-center text-lg font-semibold gap-2 rounded-full py-3 justify-center">
                <Shield />
                <p className="text-base font-semibold text-black">Beware of external links, they may be phishing attacks.</p>
            </div>

            <div className="flex items-center gap-2 ">
                <p className="text-gray-700 text-lg font-medium">Sort by</p>

                <div className="relative w-32">
                    <div className="flex gap-2 py-2 px-4 rounded-full  cursor-pointer bg-gray-300 border items-center" onClick={toggleDropdown}>
                        {selected.icon}
                        {selected.label}
                        {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}

                    </div>
                    {isOpen && (
                        <div className="absolute z-10 w-full px-2 rounded-md  bg-gray-300 ">
                            {options.map((option) => (
                                <div key={option.value} className="flex py-1 cursor-pointer" onClick={() => handleOptionClick(option)}>
                                    {option.icon}
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="md:px-2 sm:px-4 lg:px-6 flex gap-4 border-b-2 border-gray-100">
                <div>
                    <div className="divide-y divide-gray-200">
                        {customers.map(({ eventName, username, address, avatar, position, volume }, index) => (
                            <div
                                key={index}
                                className="flex hover:rounded-md gap-2 py-2 last:pb-2"
                            >
                                <div className="items-center">
                                    <img width={120} className='rounded-sm' src={avatar} alt={eventName} />
                                </div>
                                <div className=" ">
                                    <div className="flex py-1 justify-between">
                                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/profile')}>
                                            <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />
                                            <p className="text-gray-600 text-sm">2mo ago</p>
                                        </div>

                                        <Ellipsis className='cursor-pointer text-black bg-gray-100' onClick={() => { alert('Login') }} />
                                    </div>

                                    <p className="text-gray-700 indent-3"> {/* Set text color to blue */}
                                        This market will resolve to "Yes" if the data for the Global Land-Ocean Temperature Index for August 2024 shows an increase greater than that of any prior August when it is released. Otherwise, this market will resolve to "No".
                                    </p>

                                    <div className='flex gap-2 pt-1 '>
                                        <Heart /> {position}
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