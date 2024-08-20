import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import { ContentProps } from "../../types/profile";

const Content: React.FC<ContentProps> = ({
  avatar,
  isBet,
  eventName,
  value
}) => {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody
        color="transparent"

        className="flex items-center gap-2"
        placeholder="" // Add this if required
        // onPointerEnterCapture={() => { }} // Add this if required
        // onPointerLeaveCapture={() => { }} // Add this if required
      >
        <Avatar src={avatar} alt="avatar" />
        <div>
          <Typography className="text-base cursor-pointer font-normal">
            {eventName}
          </Typography>
          <div className="flex items-center gap-1">
            {isBet ? (
              <p className="text-green-600 bg-green-200 text-sm font-semibold px-0.5 rounded-md">Yes</p>
            ) : (
              <p className="text-red-600 bg-gray-200 text-sm font-semibold px-0.5 rounded-md">No</p>
            )}
            {value} shares
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Content;