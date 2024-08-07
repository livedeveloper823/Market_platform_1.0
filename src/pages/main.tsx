import React, { useEffect } from "react";
import Button from "../components/Button";
import TopEventCard from "../components/cards/TopEventCard";
import { ListViewIcon, MarketsIcon, SearchIcon, StarIcon } from "../components/icons";
import Navbar from "../components/Navbar";
import { content } from "../contents/landing";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import { getAllEvents } from "../store/reducers/events";

const Main = () => {
    const [listView, setListView] = React.useState(false)
    
    useEffect(() => {
        dispatch(getUsersData())
        dispatch(getAllEvents())
    }, [])
    return (
        <div>
            <Navbar />
            <div className="flex gap-5 justify-center my-10">
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-blue-300" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-red-300" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-green-300" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
                <TopEventCard text="Science Beta" btn_text="Bet now" onClick={() => { }} className="bg-yellow-300" img_url="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" />
            </div>
            {/* SubBar */}
            <div className="flex justify-between px-5">
                <div className="flex">
                    <div className="px-3 mr-2 cursor-pointer hover:bg-gray-300 flex items-center border rounded-lg">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.45rem" width="1.45rem" xmlns="http://www.w3.org/2000/svg"><path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path></svg>
                    </div>
                    <div className="flex w-[50vw] gap-5 px-3 py-1 items-center border-2 border-gray-400 rounded-lg">
                        <SearchIcon color="black" />
                        <input type="text" className="w-full outline-none" placeholder="Search markets" />
                    </div>
                </div>
                <div className="flex">
                    <button className="flex rounded-l-lg border p-3 items-center justify-center ml-3 cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => setListView(false)}>
                        <MarketsIcon color="gray" size={20} />
                    </button>
                    <button className="flex rounded-r-lg border p-3 items-center justify-center  cursor-pointer hover:bg-gray-300 focus:bg-gray-400" onClick={() => setListView(true)}>
                        <ListViewIcon />
                    </button>
                    <button className="flex p-3 border rounded-lg items-center -3 ml-3  cursor-pointer hover:bg-green-300">
                        <StarIcon />
                    </button>
                </div>
            </div>
            {/* Filters */}
            <div className="flex gap-3 mt-5">
                <div>
                    Top
                </div>
                {
                    content.filterBtns.all.map((item, index) => <Button key={index} text={item.text} value={item.value} onClick={() => { }} className="text-sm px-2 py-1 rounded-md bg-gray-300 border-2 border-gray-300 hover:border-blue-600 focus:bg-blue-700 focus:text-white focus:border-blue-700" icon />)
                }
            </div>
            {/* Events */}
            {listView === true ? <div>true</div> : <div>false</div>}
        </div>
    )
}

export default Main;