import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Tooltip, } from "@material-tailwind/react";
import { Upload } from "lucide-react";
import { customers } from "../database";
import Button from "../Button/Button";

const PositionListItem: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState < boolean > (false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex w-full overflow-x-auto">

      <table className="w-full ">

        <tr className="uppercase justify-between text-gray-300 px-2 lg:flex hidden ">
          <th className="  w-7/12 ">Market</th>
          <th className="   ">Avg</th>
          <th className="  ">Current</th>
          <th className=" ">Value</th>
        </tr>
        {customers.map(({ avatar, eventName, isBet, avgPrice, curPrice, totalPrice, rate }, index) => (

          <div className=" ">
            <tr key={index} className="md:hidden hidden lg:flex w-full px-2 py-2 items-center justify-between">
              <td className="w-7/12">
                <div className="flex gap-2 items-center">
                  <img width={48} className="rounded-md" src={avatar} alt="avatar" />

                  <div className=" ">
                    <p className="text-base text-nowrap  cursor-pointer font-normal">
                      {eventName}
                    </p>
                    <div className="flex text-nowrap items-center gap-1">
                      {isBet ? (
                        <p className="text-green-600 bg-green-200 text-sm font-semibold w-6 text-center rounded-md">Yes</p>
                      ) : (
                        <p className="text-red-600 bg-gray-200 text-sm font-semibold w-6 text-center rounded-md">No</p>
                      )}
                      {33} shares
                    </div>
                  </div>
                  {/* <Content avatar={avatar} eventName={eventName} isBet={isBet} value={33} /> */}
                </div>
              </td>
              <td className=" lg:flex hidden">
                <p className="font-normal text-nowrap">{avgPrice} $</p>
              </td>
              <td className=" lg:flex hidden">
                <p className="font-normal text-nowrap">{curPrice} $</p>
              </td>
              <td className=" text-end">
                <div className="flex items-center gap-2">
                  <div className="text-end font-normal">
                    <p>${totalPrice}</p>
                    <p className="text-nowrap font-normal text-green-600">{rate} (686.59%)</p>
                  </div>
                  <div className="items-end lg:flex hidden">
                    <Tooltip content="Share">
                      <Upload size={20} onClick={() => alert('Share button clicked!')} />
                    </Tooltip>
                  </div>
                </div>
              </td>
            </tr>

            <div key={index} className="lg:hidden sm:flex flex-col  w-full px-2 py-2 items-center justify-between">

              <div className="flex w-full gap-2 tems-center">
                <img width={48} className="rounded-md" src={avatar} alt="avatar" />
                <p className="text-base cursor-pointer font-normal">
                  {eventName}
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className=" text-nowrap items-center">
                  {isBet ? (
                    <p className="text-green-600 bg-green-200 w-8  text-sm font-semibold text-center rounded-md">Yes</p>
                  ) : (
                    <p className="text-red-600 bg-gray-200 w-8 text-sm font-semibold text-center rounded-md">No</p>
                  )}

                  <div onClick={toggleVisibility} className={`flex w-28 text-nowrap text-sm   items-center px-2  bg-white  text-black  rounded-full cursor-pointer`}>
                    <p> {33} shares</p>
                    {isVisible ? <ChevronUp size={16} /> : <ChevronDown size={12} />}
                  </div>
                </div>


                <div className="flex items-center gap-2">
                  <div className="text-end font-normal">
                    <p>${totalPrice}</p>
                    <p className="text-nowrap font-normal text-green-600">{rate} (686.59%)</p>
                  </div>
                  <div className="items-end lg:flex hidden">
                    <Tooltip content="Share">
                      <Upload size={20} onClick={() => alert('Share button clicked!')} />
                    </Tooltip>
                  </div>
                </div>

              </div>
              <div className={`${!isVisible ? 'hidden' : ''}  w-full px-4 py-2 `}>

                <div className="flex items-center justify-between ">
                  <div className="gap-3 flex" >
                    <div className="  text-center text-sm">
                      <p className="text-gray-400">Avg</p>
                      <p className="font-normal text-nowrap">{avgPrice} $</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-400">Current</p>
                      <p className="font-normal text-nowrap">{curPrice} $</p>
                    </div>
                  </div>
                  <Button text="Trade" className="bg-black text-white rounded-md w-16 text-center" />
                </div>
              </div>
            </div>
          </div>


        ))
        }
      </table >
    </div >
  );
};

export default PositionListItem;
