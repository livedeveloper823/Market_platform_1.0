import React from "react";
import { Button, Menu, MenuHandler, MenuList, Typography } from '@material-tailwind/react';
import { Activity, Bell, AlignJustify, Flag, Trophy, } from "lucide-react";
import { MarketsIcon } from "../components/icons";
import { content } from "../contents/landing";
import { SearchIcon } from "./icons";
import SignInModal from "./SignInModal";
import { dispatch, useSelector } from "../store";
import { getUserData } from "../store/reducers/userInfo";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import MarketNavbar from "./MarketNavbar";
import Logo from "./Logo";
import instance from "../utils/axios";
// import { useSDK } from "@metamask/sdk-react";
import { useMetamask } from "../contexts/useMetamask";
import Switch from "./switch/switch";

const TopNavbar = () => {

  const [isMarketOpen, setIsMarketOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Variables
  const [inOpen, setInOpen] = React.useState(false);
  const [upOpen, setUpOpen] = React.useState(false);

  // Getting Data
  const username = useSelector((state) => state.userInfo.user.username)
  const email = useSelector((state) => state.userInfo.user.email)
  const userrole = useSelector((state) => state.userInfo.user.role)

  // Use hooks
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate()

  // Open SignInModal, Logout
  const handleInClick = () => {
    setInOpen(!inOpen);
  };
  const handleUpClick = () => {
    setUpOpen(!upOpen);
  };
  const handleLogout = () => {
    navigate('/');
    logout()
  }

  React.useEffect(() => {
    dispatch(getUserData())
  }, [])


  const { isMetamaskConnected, connectToMetamask } = useMetamask()

  const connectWithMetamask = async () => {
    // if user is not already connected, force them to connect their wallet
    if (!isMetamaskConnected) return connectToMetamask()

    const ethereum = window.ethereum;
    const selectedAddress = ethereum?.selectedAddress
    console.log(selectedAddress);

    // request to nonce endpoint to get a random nonce
    const { data: { nonce } } = await instance.get(`/auth/metamask/nonce?address=${selectedAddress}`)
    // sign the nonce with the selected public address of the connected wallet
    const signature = await ethereum?.request({
      method: 'personal_sign',
      params: [nonce, selectedAddress]
    })

    // send another request to login endpoint with the signature which is signed with the user's nonce
    await instance.post(`/auth/metamask/login?address=${selectedAddress}`, { signature })

    // you can return an access token for the user, or maybe temporary credentials and then sign in, it's up to you
    // ...
  }

  // const [account, setAccount] = React.useState<string>();

  // const { sdk } = useSDK();

  // const connect = async () => {
  //   try {
  //     const accounts = await sdk?.connect();
  //     console.log(accounts);
  //     setAccount(accounts?.[0]);
  //   } catch (err) {
  //     console.warn("failed to connect..", err);
  //   }
  // };

  return (
    <div className="">
      <div className="flex justify-between gap-2 items-center px-2 py-2">
        <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" connect={connectWithMetamask} />
        <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />

        <div className="flex md:gap-20 w-full justify-between items-center ">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <Logo color="text-fuchsia-900" />
          </div>

          <div className="lg:visible lg:flex lg:w-full md:w-72 sm:hidden hidden px-4 py-2 gap-2 items-center hover:border-black border border-gray-700 rounded-lg">
            <SearchIcon color="black" size={18} />
            <input type="text" className="w-full outline-none" placeholder="Search markets" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="lg:visible lg:flex sm:hidden items-center hidden  ">
            <Menu
              open={isMarketOpen}
              handler={setIsMarketOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Button style={{ textTransform: "none" }} className="shadow-none px-2 py-1 rounded-md items-center bg-white text-gray-400 hover:text-black  hover:bg-gray-300">
                  <p onClick={() => { navigate('/markets') }} className="justify-center flex">
                    <MarketsIcon className="text-center" size={20} />
                  </p>
                  <p className="text-sm font-medium">Markets</p>
                </Button>
              </MenuHandler>
              <MenuList className="z-10 hidden max-w-screen-xl rounded-xl lg:block">
                <MarketNavbar />
              </MenuList>
            </Menu>

            <Button style={{ textTransform: "none" }} className="shadow-none p-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/elections') }}>
              <p className="justify-center flex">
                <Flag className="text-center" size={20} />
              </p>
              <p className="text-sm font-medium">Election</p>
            </Button>
            <Button style={{ textTransform: "none" }} className="shadow-none p-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/activity') }}>
              <p className="justify-center flex">
                <Activity className="text-center" size={18} />
              </p>
              <p className="text-sm font-medium">Activity</p>
            </Button>
            <Button style={{ textTransform: "none" }} className="shadow-none px-2 py-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
              <p className="justify-center flex">
                <Trophy className="text-center" size={20} />
              </p>
              <p className="text-sm font-medium">Ranks</p>
            </Button>
          </div>

          <div className="w-full px-5">
            {isLoggedIn ?
              <div className="flex items-center  ">
                <div className="lg:flex hidden ">
                  <Button style={{ textTransform: "none" }} className="outline-none  w-full shadow-none p-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                    <p className="text-green-500 text-sm">$0.00</p>
                    <p className="text-sm font-medium">Portfolio</p>
                  </Button>
                </div>
                <div className="lg:flex hidden ">
                  <Button style={{ textTransform: "none" }} className="outline-none w-full shadow-none px-4 py-1 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                    <p className="text-green-500 text-sm">$0.00</p>
                    <p className="text-sm font-medium">Cash</p>
                  </Button>
                </div>
                <div className="lg:flex hidden ">
                  <Button style={{ textTransform: "none" }} className="outline-none p-2 w-full shadow-none  rounded-md items-center bg-blue-700 hover:text-black  hover:bg-gray-300" onClick={() => { }}>
                    <p className="">Deposit</p>
                  </Button>
                </div>
                <div className="flex lg:border-r-2 border-gray-400 px-2">
                  <Button style={{ textTransform: "none" }} className="shadow-none w-full p-2 rounded-md items-center text-gray-400 hover:text-black hover:bg-gray-300 " onClick={() => { }}>
                    <Bell />
                  </Button>
                </div>

                <Menu
                  open={isMenuOpen}
                  handler={setIsMenuOpen}
                  offset={{ mainAxis: 20 }}
                  placement="bottom"
                  allowHover={true}
                >
                  <MenuHandler>
                    <Button style={{ textTransform: "none" }} className="w-14 hidden lg:flex outline-none border-gray-300 p-2 rounded-full  items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                      <img className=" rounded-full" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="" />
                    </Button>
                  </MenuHandler>
                  <MenuList className="-w-14 hidden max-w-screen-xl rounded-xl lg:block outline-none">
                    {userrole === "admin" ? (
                      <>
                        <Button onClick={() => navigate("/admin")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">User Management</Button>
                        <Button onClick={() => navigate("/admin/addevent")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Event Management</Button>
                      </>
                    ) : (
                      <>
                        <div className="flex w-full gap-3 py-3">
                          <img className=" w-10 rounded-full" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="" />
                          <div className=" ">
                            <p className="" onClick={() => { navigate('/profile') }}>{username}</p>
                            <p className="">{email}</p>
                          </div>
                        </div>
                        <hr />
                        <Button onClick={() => navigate("/profile")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Profile</Button>
                        <Button onClick={() => navigate("/setting")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Setting</Button>
                        <Button onClick={() => navigate("/watchlist")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Watchlist</Button>
                        <Button onClick={() => navigate("/election")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Elections</Button>
                      </>
                    )}
                    <Button onClick={() => navigate("/learn")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Learn</Button>
                    <Button onClick={() => navigate("/docs")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Documentation</Button>
                    <div className="flex items-center">
                      {/* <Switch /> */}
                      <div>
                        <p className="font-medium text-nowrap text-sm">
                          Dark Mode
                        </p>
                      </div>
                    </div>
                    <Button onClick={() => handleLogout()} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Logout</Button>
                  </MenuList>
                </Menu>
              </div >
              :
              <div className="flex gap-1 items-center">
                <div className="  ">
                  <Button onClick={handleInClick} style={{ textTransform: "none", color: "blue" }} className="w-full font-medium hover:bg-gray-200 flex tems-center shadow-none outline-none px-4 py-2 text-base  bg-gray-50 text-nowrap">Log In</Button>
                </div>
                <div className=" ">
                  <Button onClick={handleUpClick} style={{ textTransform: "none", color: "white" }} className="w-full font-medium px-4 py-2 items-centers shadow-none outline-none text-base bg-blue-700 text-nowrap">Sign Up</Button>
                </div>

                <div className="w-full md:flex hidden ">
                  <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    // offset={{ mainAxis: 20 }}
                    placement="bottom"
                    allowHover={true}
                  >
                    <MenuHandler>
                      <Button style={{ textTransform: "none" }} className=" outline-none  shadow-none px-2 rounded-md items-center text-gray-400 hover:text-black  hover:bg-gray-300" onClick={() => { navigate('/leaderboard') }}>
                        <AlignJustify />
                      </Button>
                    </MenuHandler>
                    <MenuList className="z-50 -w-14 hidden max-w-screen-xl rounded-xl lg:block outline-none pr-8">
                      <Button onClick={handleInClick} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Log In</Button>
                      <Button onClick={handleUpClick} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Sign Up</Button>
                      <hr />

                      <Button onClick={() => navigate("/elections")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Election</Button>
                      <Button onClick={() => navigate("/rewards")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Rewards</Button>
                      <Button onClick={() => navigate("/learn")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Learn</Button>
                      <Button onClick={() => navigate("/docs")} style={{ textTransform: "none" }} className="w-full font-medium flex gap-3 px-2 items-center outline-none shadow-none text-nowrap">Documentation</Button>

                      <div className="flex items-center">
                        <div>
                          <p className="font-medium text-nowrap text-sm">
                            Dark Mode
                          </p>
                        </div>
                      </div>
                    </MenuList>
                  </Menu>

                </div>
              </div>
            }
          </div >
        </div >

      </div >
      {/* Navigates */}
      < div style={{ scrollbarWidth: 'none' }} className="flex gap-2 px-2 overflow-x-scroll " >
        {
          content.menuBtns.map((item, index) =>
            <div className=" ">
              <Button style={{ fontSize: "15px", textTransform: "none" }} key={index} value={item.value} onClick={() => { }} className="  border-b-2 shadow-none rounded-none font-medium p-2 outline-none border-white hover:border-b-gray-500 focus:border-b-black  text-black text-nowrap" >{item.text}</Button>
            </div>
          )
        }
      </div >
      <hr />
    </div >
  )
}

export default TopNavbar;