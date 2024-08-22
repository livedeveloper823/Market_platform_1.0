import React from "react";
// import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import TopNavbar from "../components/TopNavbar";
import { Clock3Icon } from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch } from "../store";
import RankListItem from "../components/items/RankListItem";
import MobileFooter from "../components/MobileFooter";

const Leaderboard = () => {


  const [activeButton, setActiveButton] = React.useState < string | null > ('month');
  const handleButtonClick = (value: string) => {
    setActiveButton(value);
  };


  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);
  return (
    <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
      <TopNavbar />
      <div className="flex mt-36 justify-center">
        <div className="flex w-[60rem] flex-col gap-4 ">
        {/* <div className="xl:px-[22vw] lg:px-[12vw] md:px-4 px-4 gap-2 justify-center"> */}
          <div className="flex flex-col gap-6">
            <p className="flex items-center text-4xl font-medium text-black justify-center  ">Leaderboard</p>
            <div className="flex justify-center gap-2">
              <Button
                text="Day"
                value="day"
                className={`${activeButton === 'day' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} font-semibold  px-3 py-1 rounded-full`}
                onClick={() => handleButtonClick('day')}
              />
              <Button
                text="Week"
                value="week"
                className={`${activeButton === 'week' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} font-semibold  px-3 py-1 rounded-full`}
                onClick={() => handleButtonClick('week')}
              />
              <Button
                text="Month"
                value="month"
                className={`${activeButton === 'month' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} font-semibold  px-3 py-1 rounded-full`}
                onClick={() => handleButtonClick('month')}
              />
              <Button
                text="All"
                value="all"
                className={`${activeButton === 'all' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} font-semibold  px-3 py-1 rounded-full`}
                onClick={() => handleButtonClick('all')}
              />
            </div>
            <div className="flex text-sm items-center justify-center gap-2  ">
              <Clock3Icon size={14} />
              <p className="text-gray-400">Resets in 21d 17h 12s</p>
            </div>
          </div>

          {/* <div className="  mt-2"> */}
            <RankListItem />
          {/* </div> */}
          
        </div>
      </div>
      <MobileFooter />
    </div >
  );
};

export default Leaderboard;
