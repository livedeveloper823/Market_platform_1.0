import React from "react";
import useTheme from "../../hooks/useTheme"
import Button from "../Button/Button";
import { Activity, Bell, SearchIcon, AlignJustify, Flag, Trophy, Grid3X3 } from "lucide-react";
import { content } from "../../contents/landing";
import SignInModal from "../SignInModal";
import { dispatch, useSelector } from "../../store";
import { getUserData } from "../../store/reducers/userInfo";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import MarketMenu from "./MarketMenu";
import Logo from "./Logo";
import { useSDK } from "@metamask/sdk-react";

const TopNavbar = () => {
  const { darkTheme, toggleTheme } = useTheme()


  const [isMarketOpen, setIsMarketOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectCategory, setSelectedButton] = React.useState < string > ('');

  const toggleMarket = () => {
    setIsMarketOpen(!isMarketOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCategory = (value: string) => {
    // navigate(`/markets/${value}`)
    setSelectedButton(value);
  };
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


  const [account, setAccount] = React.useState < string > ();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  console.log(account, connected, connecting, provider, chainId);
  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      if (accounts && Array.isArray(accounts)) {
        setAccount(accounts[0]);
      }
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  React.useEffect(() => {
    dispatch(getUserData())
  }, [])

  return (
    <div className="fixed w-full z-30 top-0 bg-bgColor ">
      <div className=" flex justify-between gap-2 items-center px-2 py-2">
        <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" connect={connect} />
        <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />

        <div className="flex md:gap-16 w-full justify-between items-center ">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <Logo color="text-fuchsia-900" />
          </div>

          <div className="group hover:bg-searchHover lg:visible lg:flex lg:w-full md:w-72 sm:hidden hidden px-4 py-2 gap-2 items-center border focus-within:border-white rounded-lg">
            <SearchIcon className="text-textColor" size={16} />
            <input type="text" className="w-full h-full bg-bgColor group-hover:bg-searchHover text-textColor" placeholder="Search markets" />
          </div>

        </div>

        <div className="flex items-center">
          <div className="lg:visible lg:flex sm:hidden items-center hidden  ">

            <div className="relative"
              onMouseEnter={toggleMarket}
              onMouseLeave={toggleMarket}>

              <Button
                onClick={() => { navigate('/markets') }} text="Markets"
                className="justify-center flex flex-col cursor-pointer px-2 py-1 rounded-md items-center text-gray-500 hover:text-selBtnHoverTextColor hover:bg-selBtnHoverColor"
                icon={<Grid3X3 className="text-center" size={20} />}
              />

              {isMarketOpen && (
                <div className="absolute right-[-140px] inline-block w-[400px] border p-4 items-center bg-bgColor text-textColor rounded-md shadow-lg">
                  <MarketMenu />
                </div>
              )}

            </div>
            <Button text="Election" className="px-2 py-1 flex flex-col cursor-pointer  rounded-md items-center text-gray-500 hover:text-selBtnHoverTextColor hover:bg-selBtnHoverColor" onClick={() => { navigate('/elections') }} icon={<Flag className="text-center" size={20} />} />
            <Button text="Activity" className="px-2 py-1  flex flex-col cursor-pointer rounded-md items-center text-gray-500 hover:text-selBtnHoverTextColor hover:bg-selBtnHoverColor" onClick={() => { navigate('/activity') }} icon={<Activity className="text-center" size={18} />} />
            <Button text="Ranks" className="px-3 py-1 flex flex-col cursor-pointer rounded-md items-center text-gray-500  hover:text-selBtnHoverTextColor hover:bg-selBtnHoverColor" onClick={() => { navigate('/leaderboard') }} icon={<Trophy className="text-center" size={20} />} />
          </div>

          <div className=" w-full px-5">
            {isLoggedIn ?
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div className="lg:flex hidden  w-full px-3 py-1 rounded-md flex-col cursor-pointer items-center text-gray-500  hover:bg-selBtnHoverColor" onClick={() => { navigate('/ ') }}>
                    <p className="text-green-500 text-base">$0.00</p>
                    <p className="text-sm font-medium">Portfolio</p>
                  </div>
                  <div className="lg:flex hidden w-full px-4 py-1 rounded-md   flex-col cursor-pointer items-center text-gray-500  hover:bg-selBtnHoverColor" onClick={() => { navigate('/ ') }}>
                    <p className="text-green-500 text-base">$0.00</p>
                    <p className="text-sm font-medium">Cash</p>
                  </div>

                </div>
                <Button text="Deposit" className="p-2 w-full lg:flex hidden flex-col cursor-pointer  rounded-md items-center bg-btnColor hover:bg-btnColor text-white" onClick={() => { }} />
                <div className="flex lg:border-r-2 border-gray-400 px-2">
                  <Button icon={<Bell />} className="w-full p-2 rounded-md flex flex-col cursor-pointer items-center text-textColor hover:bg-selBtnHoverColo " onClick={() => { }} />
                </div>

                <div className="relative"
                  onMouseEnter={toggleMenu}
                  onMouseLeave={toggleMenu}>

                  <Button className="w-14 hidden lg:flex border-gray-300 p-2 rounded-full  items-center text-gray-400" onClick={() => { navigate('/') }}>
                    <img className=" rounded-full" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="" />
                  </Button>

                  {isMenuOpen && (
                    <div className=" bg-bgColor text-textColor absolute right-0 inline-block w-[220px] border px-2 items-center pt-4 pb-2 mt-1   rounded-md shadow-lg">
                      <div>
                        {userrole === "admin" ? (
                          <>
                            <Button onClick={() => navigate("/admin")} className="w-full font-medium cursor-pointer flex gap-3 px-2   text-base py-2 hover:bg-selBtnHoverColor rounded-md  items-center text-nowrap" text="Event Management" />
                          </>
                        ) : (
                          <>
                            <div className="flex w-full items-center gap-2 px-2 py-2 ">
                              <img width={48} className=" rounded-full" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="" />
                              <div className=" ">
                                <p className="" onClick={() => { navigate('/profile') }}>{username}</p>
                                <p className="">{email}</p>
                              </div>
                            </div>
                            <hr />
                            <Button onClick={() => navigate("/profile")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md px-2 items-center select-none text-nowrap" text="Profile" />
                            <Button onClick={() => navigate("/setting")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center select-none text-nowrap" text="Setting" />
                            <Button onClick={() => navigate("/watchlist")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center select-none text-nowrap" text="Watchlist" />
                            <Button onClick={() => navigate("/election")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center select-none  text-nowrap" text="Elections" />
                          </>
                        )}
                        <Button onClick={() => navigate("/learn")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center select-none text-nowrap" text="Learn" />
                        <Button onClick={() => navigate("/docs")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center select-none text-nowrap" text="Documentation" />
                        <div className="flex p-2 cursor-pointer font-medium  items-center justify-between hover:bg-selBtnHoverColor" onClick={toggleTheme} >
                          <p color="blue-gray" className=" text-base font-medium cursor-pointer text-nowrap select-none">
                            Dark Mode
                          </p>
                          <div className="relative">
                            <input type="checkbox" onClick={toggleTheme} checked={darkTheme} className="sr-only" />
                            <div
                              className={`box block h-6 w-10 rounded-full bg-darkMode `} />
                            <div
                              className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${darkTheme ? 'translate-x-full' : ''}`} />
                          </div>

                        </div><hr />
                        <Button onClick={() => handleLogout()} className="w-full font-medium cursor-pointer border-none flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Log Out" />
                      </div>
                    </div>
                  )}
                </div >
              </div >
              :
              <div className="  flex gap-1 items-center">
                <Button onClick={handleInClick} className="w-full font-medium cursor-pointer rounded-md px-4 py-2 hover:bg-selBtnHoverColor items-centers flex tems-centertext-base text-btnColor text-nowrap" text="Log In" />
                <Button onClick={handleUpClick} className="w-full font-medium cursor-pointer rounded-md px-4 py-2 hover:bg-btnHoverColor items-centers text-base bg-btnColor text-nowrap text-white" text="Sign Up" />

                <div className="relative"
                  onMouseEnter={toggleMenu}
                  onMouseLeave={toggleMenu}>
                  <Button icon={<AlignJustify />} className=" p-2 rounded-md items-center text-textColor mt-1 hover:bg-selBtnHoverColor" onClick={() => { }} />

                  {isMenuOpen && (
                    <div className=" bg-bgColor text-textColor absolute right-0 inline-block w-[180px] border px-2 items-center pt-4 pb-2 rounded-md shadow-lg">

                      <Button onClick={handleInClick} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Log In" />
                      <Button onClick={handleUpClick} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Sign Up" />
                      <hr />
                      <Button onClick={() => navigate("/elections")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Election" />
                      <Button onClick={() => navigate("/rewards")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Rewards" />
                      <Button onClick={() => navigate("/learn")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Learn" />
                      <Button onClick={() => navigate("/docs")} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Documentation" />
                      <div className="flex p-2 cursor-pointer font-medium  items-center justify-between hover:bg-selBtnHoverColor" onClick={toggleTheme} >
                        <p color="blue-gray" className=" text-base font-medium cursor-pointer text-nowrap select-none">
                          Dark Mode
                        </p>
                        <div className="relative">
                          <input type="checkbox" onClick={toggleTheme} checked={darkTheme} className="sr-only" />
                          <div
                            className={`box block h-6 w-10 rounded-full bg-darkMode `} />
                          <div
                            className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${darkTheme ? 'translate-x-full' : ''}`} />
                        </div>

                      </div>
                    </div>
                  )}

                </div>
              </div>
            }
          </div >
        </div >

      </div >
      {/* Navigates */}

      {/* lassName={`${selectedButton === `${item.value}` ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} */}
      < div style={{ scrollbarWidth: 'none' }} className="flex gap-2 px-2 overflow-x-scroll " >
        {
          content.menuBtns.map((item, index) =>
            <div key={index} className=" ">
              <Button text={item.text} value={item.value} onClick={() => handleCategory(`${item.value}`)}
                className={`${selectCategory === `${item.value}` ? 'border-b-2 ' : ' '} hover:border-b-2 font-normal text-textColor hover:text-selBtnHoverTextColor cursor-pointer p-2 text-nowrap`}
              />
            </div>
          )
        }
      </div >
      <hr className="dark:bg-red-200" />
    </div >
  )
}

export default TopNavbar;

