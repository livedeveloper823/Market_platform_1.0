import React from "react";
import Content from "./Content";
import { SquareArrowOutUpRight } from "lucide-react";
// import { activityItem } from "../../contents/profileItem";
import { customers } from "../database";
 
const ProfileAcitiveListItem: React.FC = () => {
  return (
    <div className="flex w-full overflow-x-auto">
      <table className="w-full ">
        <tr className="uppercase   text-gray-300 px-2 lg:flex hidden ">
          <th className="  w-12 ">Type</th>
          <div className="w-full px-8 justify-between flex">
            <th className="  ">Market</th>
            <th className="  ">Amount</th>
          </div>
        </tr>

        {customers.map(({ avatar, eventName, isBet, totalPrice }, index) => {
          return (
            <div className=" ">
              <div key={index} className="md:hidden hidden lg:flex w-full px-2 py-2 items-center gap-4">
                <td className="w-12">
                  <p className="font-normal" >Convert </p>
                </td>
                <td className="w-full">
                  <Content avatar={avatar} eventName={eventName} isBet={isBet} value={20} />
                </td>

                <td className=" ">
                  <p className="text-end">
                    ${totalPrice}
                  </p>
                  <div className="flex gap-2 justify-end   text-gray-400 items-center ">
                    <p className="">${totalPrice}</p>
                    <SquareArrowOutUpRight size={12} />
                  </div>
                </td>
              </div>

              <div key={index} className="lg:hidden sm:flex flex-col w-full px-2 py-2 items-center gap-4">
                <div className="flex w-full gap-2 tems-center">
                  <img width={48} className="rounded-md" src={avatar} alt="avatar" />
                  <p className="text-base cursor-pointer font-normal">
                    {eventName}
                  </p>
                </div>

                <div className="justify-between w-full text-gray-600 flex py-2 items-center">
                  <div className="items-center">
                    <p className="text-sm">Convert</p>
                    <div className="flex text-nowrap items-center">
                      {isBet ? (
                        <p className="text-green-600 bg-green-200  text-center text-sm w-8 font-semibold rounded-md">Yes</p>
                      ) : (
                        <p className="text-red-600 bg-gray-200 text-center  text-sm w-8 font-semibold rounded-md">No</p>
                      )}
                      {33} shares
                    </div>
                  </div>

                  <div className=" ">
                    <p className="text-end">
                      ${totalPrice}
                    </p>
                    <div className="flex gap-2 justify-end   text-gray-400 items-center ">
                      <p className="">in {totalPrice} minutes</p>
                      <SquareArrowOutUpRight size={12} />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </table>
    </div >
  );
};

export default ProfileAcitiveListItem;
