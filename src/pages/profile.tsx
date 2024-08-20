import React from "react";
import Button from "../components/Button/Button";
import ProfileInfoList from "../components/profile/ProfileInfoList";
import MyProperty from "../components/cards/MyProperty";
import TopNavbar from "../components/TopNavbar";
import { useNavigate } from "react-router-dom";
import {
  Edit2,
  Activity,
  TrendingUp,
  ChartNoAxesColumnIncreasing,
  CheckCheck,
} from "lucide-react";
import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";
import Logo from "../components/Logo";
import MobileFooter from "../components/MobileFooter";

const Profile = () => {
  const navigate = useNavigate();

  // Getting Data
  const username = useSelector((state) => state.userInfo.user.username);
  const address = useSelector((state) => state.userInfo.user.username);

  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);
  return (
    <div className="h-screen overflow-hidden-scrollbar overflow-y-auto">
      <TopNavbar />

      <div className="flex mt-36 justify-center px-4 ">
        <div className="flex w-[60rem] flex-col gap-4 ">
          <div className="flex px-4 py-4 justify-between items-center text-black-700 " >
            <div className="flex items-center gap-4">
              <img width={64} className="rounded-full" src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0=" alt="" />
              <div className="  ">
                <div className="text-4xl pb-4 font-bold">{username}</div>
                <div className="flex gap-6">
                  <div className="bg-gray-300 px-2 rounded-md">{address}</div>
                  <div className="text-sm text-gray-400">Joined Aug 2024</div>
                </div>
              </div>
            </div>
            <div className="items-center">
              <Button
                text="Edit Profile"
                icon={<Edit2 />}
                value="editProfile"
                className="flex items-center border rounded-md border-gray-400 gap-2 px-3 py-2 text-black"
                onClick={() => navigate("/setting")}
              />
              <div className="opacity-60">
                <Logo />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 pt-8 items-center gap-8">
            <MyProperty value={35} text={"Positions value"} className={"bg-blue-200"} icon={<Activity />} />
            <MyProperty value={53} text={"Profit/loss"} className={"bg-green-200"} icon={<TrendingUp />} />
            <MyProperty value={90} text={"Volume traded"} className={"bg-purple-200"} icon={<ChartNoAxesColumnIncreasing />} />
            <MyProperty value={53} text={"Markets traded"} className={"bg-yellow-200"} icon={<CheckCheck />} />
          </div>

          <div className="flex w-full">
            <ProfileInfoList />
          </div>
          {/* </div> */}

        </div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default Profile;
