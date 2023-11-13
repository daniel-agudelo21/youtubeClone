import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../assets/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      if (data && data.items && data.items.length > 0) {
        setChannelDetail(data.items[0]);
      }
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      if (data && data.items) {
        setVideos(data.items);
      }
    });
  }, [id]);
  return (
    <div>
      <div className=" bg-gradient-to-b from-k4-black to-k-orange  z-10 h-80 "></div>
      <div className="-mt-20 flex justify-center items-center">
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <div className=" p-2">
        <div className="">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
