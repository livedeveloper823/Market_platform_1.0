import React from "react";
import Content from "./Content";
import { Card, Typography } from "@material-tailwind/react";
import { SquareArrowOutUpRight } from "lucide-react";
import { activityItem } from "../../contents/profileItem";
import { customers } from "../database";

// import { ProfileProps } from "../../types/profile";
const ProfileAcitiveListItem: React.FC = () => {
  return (
    <Card className=" flex w-full ">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {activityItem.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-3"
              >
                <Typography
                  color="blue-gray"
                  className=" text-sm font-normal leading-none opacity-70 uppercase"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr></thead>
        <tbody>
          {customers.map(({ avatar, eventName, isBet, avgPrice, totalPrice }, index) => {
            const isLast = index === customers.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {avgPrice}$
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <Content avatar={avatar} eventName={eventName} isBet={isBet} value={20} />
                  </Typography>
                </td>
                <td className={classes}>
                  <div className=" items-end gap-2">
                    <Typography className="text-black font-medium text-end">
                      <div className=" text-black">${totalPrice}</div>
                    </Typography>
                    <Typography className="">
                      <div className="flex justify-end text-gray-400 items-center ">
                        <div className="">${totalPrice}</div>
                        <SquareArrowOutUpRight size={12} />
                      </div>
                    </Typography>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default ProfileAcitiveListItem;
