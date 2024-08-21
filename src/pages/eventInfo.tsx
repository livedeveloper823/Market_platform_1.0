import React from "react";
import Button from "../components/Button/Button";
import { Tooltip } from "@material-tailwind/react";
import { Check } from "lucide-react";
import EventInfoList from "../components/event/EventInfoList";
import EventInfoCard from "../components/event/EventInfoCard";
import TopNavbar from "../components/TopNavbar";

import { Trophy, Clock4, Star, Link, ChevronUp, ChevronDown, ChevronsLeftRight, Goal, } from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import YesNoBtn from "../components/YesNoBtn";
import Logo from "../components/Logo";
import MobileFooter from "../components/MobileFooter";

const Profile = () => {
  const [isVisible, setIsVisible] = React.useState < boolean > (false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
      <TopNavbar />
      <div className="flex mt-36 justify-center">
        <div className="flex lg:w-8/12 gap-4">
          <div className="w-[50rem] px-2 py-4">

            <div className="flex items-center gap-4 px-2 py-1  text-black-700">
              <img className=" rounded-md" width={68} src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="userAvatar" />
              <div className="w-full ">
                <div className="flex w-full justify-between gap-3">
                  <div className="gap-3 flex">
                    <div className="flex gap-2">
                      <Tooltip placement="bottom" className="bg-white border border-gray-300" content={
                        <div className="bg-white w-[16rem] px-2  ">
                          <p className="text-lg  text-black font-normal  indent-4 pb-1">
                            Winner take all
                          </p>
                          <div className=" py-1">
                            <ul className="flex flex-col">
                              <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                  <Check className="text-blue-800" />
                                </span>
                                <p className="font-normal  text-black text-sm"> Only 1 winner</p>
                              </li>
                              <li className="flex items-center gap-4">
                                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                  <Check className="text-blue-800" />
                                </span>
                                <p className="font-normal text-black text-sm">Supports negative-risk (convert No shares to Yes of the other options)</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      }>
                        <Trophy className=" bg-gray-200 p-1 rounded-md" />
                      </Tooltip>
                      <p className="text-gray-500 ">$4000 Bet</p>

                    </div>
                    <div className="flex gap-2">
                      <Tooltip className="z-50 w-64" content="This is estimated end date. See rules below for specific resolution details.">
                        <Clock4 className="text-gray-500 p-1 rounded-md" />
                      </Tooltip>
                      <p className="text-gray-500 ">Nov 5, 2024</p>
                    </div>
                  </div>
                  <div className="flex scale-75 gap-2 cursor-pointer">
                    <Tooltip className="bg-gray-700 text-white px-2 py-1 rounded shadow" content="Add to watchlist">
                      <Star />
                    </Tooltip>
                    <Tooltip className="bg-gray-700 text-white px-2 py-1 rounded shadow" content="Embed" >
                      <ChevronsLeftRight className="lg:flex sm:hidden" />
                    </Tooltip>

                    <Tooltip placement="bottom" className="bg-white border border-gray-300" content={
                      <>

                        <p className="text-lg text-black font-normal indent-4">  Copy Link</p>

                        <div className=" text-black py-1">
                          <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-4">
                              <p className="font-normal text-sm"> Q3</p>
                            </li>
                            <li className="flex items-center gap-4">
                              <p className="font-normal text-sm"> Q4</p>
                            </li>
                            <li className="flex items-center gap-4">
                              <p className="font-normal text-sm"> 2025 or Later</p>
                            </li>
                            <li className="flex items-center gap-4">
                              <p className="font-normal text-sm">Others</p>
                            </li>

                          </ul>
                        </div>
                      </>
                    }>
                      <Link onClick={() => { alert("where to go") }} />
                    </Tooltip>
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <div className="sm:w-full text-2xl font-bold">How many named storms during Atlantic Hurricane Season?</div>

                  <div className=" md:px-16 opacity-30">
                    <Logo />
                  </div>

                </div>
              </div>
            </div>


            <div className="py-4">
              <h2 className="px-2 text-lg border-b-2 font-medium">Rules</h2>
              <div className="p-4">
                <div className={`${!isVisible ? 'line-clamp-1' : ''} indent-3 font-normal`}>
                  This is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visibl. ehis is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visible
                </div>

                {isVisible &&
                  <div className=" py-2">
                    <div className="flex items-center border  px-4 py-1 mb-3  rounded-lg">
                      <Goal size={32} className="bg-gray-300 p-1 rounded-full" />
                      <div className="flex font-semibold flex-col ">
                        <p className="px-4">Resolver</p>
                        <p className="px-4">0x11111111111111</p>
                      </div>
                    </div>

                    <Button text="Propose resolution"
                      className="flex gap-2 border bg-white text-gray-600 border-gray-500 px-3  py-2 rounded-full "
                    />
                  </div>
                }
              </div>

              <div onClick={toggleVisibility} className={`flex w-28 gap-2 text-nowrap text-sm   items-center px-2 outline-none hover:bg-gray-200 bg-white  text-black p-1 rounded-full cursor-pointer`}>
                <p>{isVisible ? "Show Less" : "Show More"}</p>
                {isVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <EventInfoList />
          </div>

          <div className="">
            <div className="lg:block w-[20rem] hidden">
              <EventInfoCard />
            </div>
          </div>
        </div >
      </div >
      <div className="sm:flex lg:hidden  visible fixed z-50 w-full bottom-[78px]">
        <YesNoBtn />
      </div>
      <MobileFooter />
    </div >
  );
};

export default Profile; 