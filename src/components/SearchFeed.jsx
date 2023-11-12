import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../assets/fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <div className="flex flex-col md:flex-row  ">
      <div className="">

      </div>
      <div className="overflow-y-auto p-2  flex flex-col md:flex-col">
        <p className="text-white font-bold mb-2 text-3xl">
          Search results for:{" "}
          <span className="text-k-orange">{searchTerm}</span> videos
        </p>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
