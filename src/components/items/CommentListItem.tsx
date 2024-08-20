// ActivityListItem.tsx
import React from 'react';
// import Select from "react-select";
import { useNavigate } from 'react-router-dom';

import { Input, Card, CardBody, Avatar, Typography, Button, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { Shield, Ellipsis, Heart } from 'lucide-react';
// import { ChevronUp, ChevronDown, Shield, Ellipsis, Heart } from 'lucide-react';
// import { sortItem } from "../../contents/selectItem";
// import { customStyles } from "../../contents/selectStyle";

import { customers } from "../database";
import UserProperty from '../cards/UserProperty';

const CommentListItem = () => {
    const [selectValue, setSelectValue] = React.useState < string > ('');
    const [sortList, setSortList] = React.useState < string > ('Amount');
    // const [selectedOption, setSelectedOption] = React.useState < Option | null > (sortItem[0]);
    // const [isDropdownOpen, setIsDropdownOpen] = React.useState < boolean > (false);

    const navigate = useNavigate();
    return (

        <div className="flex flex-col px-2 gap-3">
            <div className="flex w-full py-1 border border-gray-500 focus-within:border-black rounded-full">
                <Input
                    type="text"
                    value={selectValue}
                    onChange={e => setSelectValue(e.target.value.trim())} // Trim whitespace
                    className="outline-none border-none px-4 py-3"
                    placeholder='Add a Comment'
                    containerProps={{
                        className: "min-w-0",
                    }}
                    aria-label="Comment input"
                />
                <Button
                    size="sm"
                    disabled={!selectValue}
                    className={`${selectValue ? "text-blue-700" : "text-blue-200"} px-8 outline-none border-none cursor-pointer`}
                    aria-label="Post comment"
                >
                    Post
                </Button>
            </div>
            <div className="flex bg-gray-200 border-2 items-center text-lg font-semibold gap-2 rounded-full py-3 justify-center">
                <div className="flex text-black items-center gap-2 cursor-text">
                    <Shield />
                    <p className="text-base font-semibold text-black">Beware of external links, they may be phishing attacks.</p>
                </div>
            </div>

            <div className="flex items-center gap-2 ">
                <p className="text-gray-700 text-lg font-medium">Sort by</p>
                <Menu>
                    <MenuHandler>
                        <Button style={{ textTransform: "none" }} className=" outline-none text-black text-center text-base bg-gray-200 hover:bg-gray-400 rounded-full" > {sortList}</Button>
                    </MenuHandler>
                    <MenuList className="z-50 w-40 text-md rounded-md text-gray-800 border-neutral-400 outline-none font-semibold gap-1">

                        <MenuItem onClick={() => setSortList('Newest')}>Newest</MenuItem>
                        <MenuItem onClick={() => setSortList("Like")}>Like</MenuItem>
                        <MenuItem onClick={() => setSortList("Holders")}>Holders</MenuItem>
                    </MenuList>
                </Menu>
                {/* <Select
                    className="flex w-36 border px-1 bg-gray-200 border-gray-400 focus-within:border-gray-600 rounded-full "
                    value={selectedOption}
                    styles={customStyles}
                    options={sortItem}
                    onMenuOpen={() => setIsDropdownOpen(true)}
                    onMenuClose={() => setIsDropdownOpen(false)}
                    onChange={(option) => setSelectedOption(option)}
                    components={{
                        DropdownIndicator: () => (
                            <div className="  ">
                                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        ),
                    }}
                    getOptionLabel={(option) => (
                        <div className="flex font-semibold border-none gap-2 ">
                            <option.icon cx />
                            <span className="text-md text-nowrap">{option.text}</span>
                        </div>
                    )}
                /> */}
            </div>

            <Card className="md:px-2 sm:px-4 lg:px-6 flex gap-4 border-b-2 border-gray-100">
                <CardBody>
                    <div className="divide-y divide-gray-200">
                        {customers.map(({ eventName, username, address, avatar, position, volume }, index) => (
                            <div
                                key={index}
                                className="flex hover:rounded-md gap-2 py-2 last:pb-2"
                            >
                                <div className="w-32">
                                    <Avatar src={avatar} alt={eventName} variant="rounded" />
                                </div>
                                <div className=" ">
                                    <div className="flex py-1 justify-between">
                                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/profile')}>
                                            <UserProperty avatar={avatar} username={username} address={address} position={position} volume={volume} />
                                            <p className="text-gray-600 text-sm">2mo ago</p>
                                        </div>

                                        <Ellipsis className='cursor-pointer text-black bg-gray-100' onClick={() => { alert('Login') }} />
                                    </div>

                                    <Typography className="text-gray-700 indent-3"> {/* Set text color to blue */}
                                        This market will resolve to "Yes" if the data for the Global Land-Ocean Temperature Index for August 2024 shows an increase greater than that of any prior August when it is released. Otherwise, this market will resolve to "No".
                                    </Typography>

                                    <div className='flex gap-2 pt-1 '>
                                        <Heart /> {position}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody >
            </Card >
        </div >
    );
};

export default CommentListItem;