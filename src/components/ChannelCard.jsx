import { AiFillCheckCircle } from "react-icons/ai";
import { demoProfilePicture } from "../assets/constants";
import { Link } from "react-router-dom";
const ChannelCard = ({ channelDetail }) => {
  return (
    <div className=" pt-2 flex flex-col w-96 md:w-80 h-[346px] px-1  ">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col justify-center items-center text-white font-bold text-xl">
          <img
            className=" rounded-full w-60 md:w-48 md:h-48 "
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
          />
          <h2 className="flex flex-row items-center text-gray-400 mt-4">{channelDetail?.snippet?.title}<AiFillCheckCircle className="text-k-orange ml-2"/></h2>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
