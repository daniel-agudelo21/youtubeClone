import ChannelCard from "./ChannelCard"
import VideoCard from "./VideoCard"

const Videos = ({videos}) => {
    
  return (
    <div className="flex flex-row flex-wrap justify-start gap-2">
        {videos.map((item, index)=>(
            <div key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </div>
        ))}
    </div>
  )
}

export default Videos