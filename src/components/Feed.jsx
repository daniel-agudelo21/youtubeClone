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
    <div className="flex flex-col  md:flex-row ">
      <nav >
        <div className="h-14 px-0 md:h-full md:px-2 md:border-r-[1px] md:border-k-orange md:border-opacity-30 md:w-60">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <p className="text-transparent md:text-white">
            Copyright &copy; <span id="year">2023</span>
          </p>
        </div>
      </nav>
      <nav className="overflow-y-auto p-2  flex flex-col md:flex md:flex-col">
        <p className="text-white font-bold mb-2 text-3xl">
          {selectedCategory} <span className="text-k-orange">Videos</span>
        </p>
        <Videos videos={videos} />
      </nav>
    </div>
  );
};

export default Feed;
