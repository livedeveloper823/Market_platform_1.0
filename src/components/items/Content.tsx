import { ContentProps } from "../../types/profile";

const Content: React.FC<ContentProps> = ({
  avatar,
  isBet,
  eventName,
  value
}) => {
  return (
    <div className=" " >
      <div className="flex gap-2 items-center">
        <img width={48} className="rounded-md" src={avatar} alt="avatar" />
        <div className=" ">

          <p className="text-base cursor-pointer font-normal">
            {eventName}
          </p>


          <div className="flex text-nowrap items-center gap-1">
            {isBet ? (
              <p className="text-green-600 w-6 text-center bg-green-200 text-sm font-semibold rounded-md">Yes</p>
            ) : (
              <p className="text-red-600 bg-gray-200 text-sm w-6 text-center font-semibold rounded-md">No</p>
            )}
            {value} shares
          </div>
        </div>

      </div>
    </div>
  );
};

export default Content;