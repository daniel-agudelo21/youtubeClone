import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoVideoTitle,
  demoVideoUrl,
} from "../assets/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  
  return (
    <div className="md:w-80 w-96 ">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div>
          <img
            className=" w-96 h-auto rounded-xl  px-1 md:w-full"
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
          />
        </div>
      </Link>
      <div className="h-28 " >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h2 className=" font-bold text-white ">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </h2>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }
        >
          <h3 className="flex flex-row items-center text-gray-400">
            {snippet?.channelTitle || demoChannelTitle} <AiFillCheckCircle className="ml-2"/>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
