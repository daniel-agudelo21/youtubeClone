import { useState, useEffect } from "react";
import { fetchFromAPI } from "../assets/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <div className="flex flex-col md:flex-row  ">
      <div className="" >
        <div  className="h-auto md:sticky md:top-0 md:left-0 md:h-screen px-2 md:border-r-[1px] md:border-k-orange md:border-opacity-30 md:w-60">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <p className="text-transparent md:text-white">
            Copyright &copy; <span id="year">2023</span>
          </p>
        </div>
      </div>
      <div className="overflow-y-auto p-2  flex flex-col md:flex-col">
        <p className="text-white font-bold mb-2 text-3xl">
          {selectedCategory} <span className="text-k-orange">Videos</span>
        </p>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
