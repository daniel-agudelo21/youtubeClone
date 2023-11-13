import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiFillCheckCircle } from "react-icons/ai";
import { fetchFromAPI } from "../assets/fetchFromAPI";
import Videos from "./Videos";
const VideoDetail = ({ channelDetail }) => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <div className="flex flex-col">
      <div className="w-full mb-4">
        <div className="mb-4">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-players"
            playing={true}
            controls
          />
        </div>
        <div className=" px-2">
          <div className="flex flex-col md:justify-center items-start text-white py-1 px-2">
            <h2 className="font-bold">{title}</h2>
          </div>
          <div className="flex md:flex-row  justify-between py-1 px-2">
            <Link
              className="flex flex-row justify-center items-center  "
              to={`/channel/${channelId}`}
            >
              <img
                className=" rounded-full w-6 h-6 mr-2 "
                src={
                  channelDetail?.snippet?.thumbnails?.high?.url ||
                  `../assets/defaultProfile.png`
                }
                alt={channelDetail?.snippet?.title}
              />
              <h3 className="flex flex-row items-center text-gray-300 ">
                {channelTitle} <AiFillCheckCircle className="ml-2 text-sm" />
              </h3>
            </Link>

            <div className="flex flex-col md:flex-row md:gap-3 md:align-baseline">
              <p className=" opacity-60 text-white">
                {parseInt(viewCount).toLocaleString()} Views
              </p>
              <p className=" opacity-60 text-white">
                {parseInt(likeCount).toLocaleString()} Likes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 py-5 md:py-1 justify-center items-center">
        <Videos videos={videos} />
      </div>
    </div>
    
  );
};

export default VideoDetail;
