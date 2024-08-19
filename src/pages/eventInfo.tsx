import React from "react";
import { Tooltip, Typography, Button, Card, CardHeader, CardBody, Avatar } from "@material-tailwind/react";
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
    <div className="">
      <TopNavbar />
      <div className="flex justify-center">
        <div className="flex xl:px-[20vw] lg:w-full sm:px-[4vw] gap-4">
          <div className="px-2 py-4">
            <div className="flex items-center gap-4 px-2 py-1  text-black-700">
              <Avatar size="md" className=" rounded-md" src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="userAvatar" />
              <div className="w-full ">
                <div className="flex w-full justify-between gap-3">
                  <div className="flex">
                    <Tooltip placement="bottom" className="bg-white border border-gray-300" content={
                      <Card className="bg-white w-[16rem] ">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className=" border-b text-start"
                        >
                          <Typography className="text-lg font-normal indent-4 pb-1">
                            Winner take all
                          </Typography>
                        </CardHeader>
                        <CardBody className=" py-1">
                          <ul className="flex flex-col">
                            <li className="flex items-center gap-4">
                              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <Check className="text-blue-800" />
                              </span>
                              <Typography className="font-normal text-sm"> Only 1 winner</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <Check className="text-blue-800" />
                              </span>
                              <Typography className="font-normal text-sm">Supports negative-risk (convert No shares to Yes of the other options)</Typography>
                            </li>
                          </ul>
                        </CardBody>
                      </Card>
                    }>
                      <Trophy className=" bg-gray-200 p-1 rounded-md" />
                    </Tooltip>
                    <p className="text-gray-500 ">$4000 Bet</p>
                    <Tooltip className="w-64" content="This is estimated end date. See rules below for specific resolution details.">
                      <Clock4 className="text-gray-500 p-1 rounded-md" />
                    </Tooltip>
                    <p className="text-gray-500 ">Nov 5, 2024</p>
                  </div>
                  <div className="flex scale-75 gap-2 cursor-pointer">
                    <Tooltip className="bg-gray-700 text-white px-2 py-1 rounded shadow" content="Add to watchlist">
                      <Star />
                    </Tooltip>
                    <Tooltip className="bg-gray-700 text-white px-2 py-1 rounded shadow" content="Embed" >
                      <ChevronsLeftRight className="lg:flex sm:hidden" />
                    </Tooltip>

                    <Tooltip placement="bottom" className="bg-white border border-gray-300" content={
                      <Card className=" w-[10rem] ">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className=" border-b text-start"
                        >
                          <Typography
                            color="black"
                            className="text-lg font-normal indent-4  "
                          >
                            Copy Link
                          </Typography>
                        </CardHeader>
                        <CardBody className=" py-1">
                          <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-4">
                              <Typography className="font-normal text-sm"> Q3</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                              <Typography className="font-normal text-sm"> Q4</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                              <Typography className="font-normal text-sm"> 2025 or Later</Typography>
                            </li>
                            <li className="flex items-center gap-4">
                              <Typography className="font-normal text-sm">Others</Typography>
                            </li>

                          </ul>
                        </CardBody>
                      </Card>
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
                  {/* <Button style={{ textTransform: "none" }} value="editProfile"
                    className="lg:flex sm:hidden text-black items-center font-semibold rounded-lg gap-2 px-4 py-1"><Landmark />PloyMarket</Button> */}
                </div>
              </div>
            </div>


            <div className="py-4">
              <h2 className="px-2 text-lg border-b-2 font-medium">Rules</h2>
              <div className="p-4">
                <Typography className={`${!isVisible ? 'line-clamp-1' : ''} indent-3 font-normal`}>
                  This is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visibl. ehis is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visiblehis is the initial content that is always visible.This is the initial content that is always visible
                </Typography>

                {isVisible &&
                  <div className=" py-2">
                    <div className="flex items-center border-2 px-4 py-1 mb-3  rounded-lg">
                      <Goal size={32} className="bg-gray-300 p-1 rounded-full" />
                      <div className="flex font-semibold flex-col ">
                        <p className="px-4">Resolver</p>
                        <p className="px-4">0x11111111111111</p>
                      </div>
                    </div>

                    <Button style={{ textTransform: "none" }} onClick={toggleVisibility}
                      className="flex outline-none gap-2 border text-gray-600 border-gray-500 px-3 shadow-md py-2 rounded-full "
                    >Propose resolution</Button>
                  </div>
                }
              </div>

              <Button style={{ textTransform: "none" }} onClick={toggleVisibility}
                className="flex text-sm gap-2 items-center px-1 outline-none text-gray-500 p-1 rounded-full  shadow-none bg-grary-400 hover:bg-gray-300 transition duration-200"
              >
                {isVisible ? "Show Less" : "Show More"}
                {isVisible ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </div>

            <EventInfoList />
          </div>

          <div className="">
            <div className="lg:block w-[20rem] hidden border-2 py-4 rounded-lg">
              <EventInfoCard />
            </div>
          </div>
          <div className="block sm:hidden visible fixed z-50 w-full bottom-1">
            <YesNoBtn />
          </div>
        </div >
      </div >
      <MobileFooter />
    </div >
  );
};

export default Profile; 