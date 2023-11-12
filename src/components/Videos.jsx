import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  if (!videos?.length) return "Loading...";
  return (
    <div className="flex flex-row flex-wrap justify-center  ">
      {videos.map((item, index) => (
        <div key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
