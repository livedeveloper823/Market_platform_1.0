import React from "react";
import { Typography, Switch, Button, Textarea, Input } from "@material-tailwind/react";
import TopNavbar from "../components/TopNavbar";
// import Button from "../components/Button";
import { CameraIcon, Megaphone, Save, UserCog } from "lucide-react";

import { getUsersData } from "../store/reducers/users";
import { dispatch, useSelector } from "../store";

const Setting = () => {
  // Getting Data
  const email = useSelector((state) => state.userInfo.user.email)

  const [isProfile, setIsProfile] = React.useState < boolean > (true);

  const [isChecked, setIsChecked] = React.useState(true);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  React.useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const ProfileSetting = () => {
    return (
      <div className="flex w-full flex-col justify-center">
        <h1 className="text-2xl font-semibold pb-2">Profile Settings</h1>
        <div className="flex px-4 py-4 gap-4 items-end">
          <img
            className="flex w-[4vw] rounded-full"
            src="https://d3lome5o0h180x.cloudfront.net/eyJidWNrZXQiOiJiYWNrYm9uZS1hc3NldHMtcHJkIiwia2V5IjoiQVNUXzQ5OTIzMi9BU1RfNDk5MjMyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMCwiZml0IjoiY29udGFpbiJ9fX0="
            alt=""
          />
          <Button style={{ color: 'black', textTransform: 'none' }}
            value="saveChange"  
            onClick={() => { }}
            className="flex font-semibold items-center gap-1 px-2 py-1 text-white bg-gray-200 rounded-full">
            <CameraIcon size={18} />Upload
          </Button>
        </div>
        <label className="   py-2 text-base font-semibold text-gray-900 ">
          <p>Email</p>
          <p className="text-gray-400">{email}</p>
        </label>
        <label className="flex py-2 text-base font-semibold text-gray-900 ">
          Last Name
        </label>

        <Input onChange={() => { }} className="py-2 rounded-lg focus:border-black text-base" />

        <label className="flex py-2 text-base font-semibold text-gray-900 ">
          Bio
        </label>
        <Textarea size="md" placeholder="Bio" className="rounded-lg  p-4 focus:border-black  text-base" />

        <div className="flex pl-8 pt-4">
          <Button
            style={{ textTransform: 'none' }}
            value="saveChange"
            onClick={() => { alert('save') }}
            className="flex font-semibold items-center gap-2 px-2 py-2 bg-blue-500 cursor-pointer  hover:bg-gray-400 rounded-lg"
          ><Save size={20} />Save Change</Button>
        </div>
      </div>
    );
  };
  const SetNotification = () => {
    return (
      <div className="flex w-full flex-col justify-center font-semibold">
        <h1 className="text-2xl font-semibold pb-2">Notification Settings</h1>
        <div className="flex flex-col border rounded-md p-4">
          <Typography className="text-xl">
            Email
          </Typography>
          <div className="flex justify-between items-center py-3">
            <div className="text-sm text-gray-400">Market Updates</div>
            
            <div className="border-2 rounded-full w-12 bg-blue-200">
              <Switch
                color="blue"
                checked={isChecked}
                onChange={handleChange}
              />
              {/* <span>Switch is {isChecked ? 'on' : 'off'}</span> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className=" ">
      <TopNavbar />
      <div className="flex justify-center">
        <div className="flex sm:w-full sm:px-4 md:w-full lg:w-full xl:w-[48vw] w-full py-8">
          <div className=" text-lg">
            <Button
              style={{ color: 'black', textTransform: 'none' }}
              value="profile"
              onClick={() => setIsProfile(true)}
              className="flex w-full text-xl items-center font-semibold shadow-none hover:bg-gray-300 gap-4 px-4 py-2 focus:bg-gray-400 rounded-lg"><UserCog />Profile</Button>
            <Button
              style={{ color: 'black', textTransform: 'none' }}
              value="profile"
              onClick={() => {
                setIsProfile(false);
              }}
              className="flex w-full text-xl font-semibold items-center shadow-none gap-4 px-4 py-2 focus:bg-gray-400 rounded-lg"><Megaphone />Notifications</Button>
          </div>
          <div className=" flex sm:w-full sm:px-8">
            {isProfile ? <ProfileSetting /> : <SetNotification />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
