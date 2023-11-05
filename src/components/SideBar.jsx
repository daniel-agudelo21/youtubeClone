import { AiFillHome } from "react-icons/ai";
import { BsCode, BsMusicNote } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { IoMdMicrophone, IoLogoGameControllerB } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { CgMediaPodcast, CgGym } from "react-icons/cg";
import { MdSportsFootball } from "react-icons/md";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  
  const categories = [
    { name: "New", icon: <AiFillHome /> },
    { name: "JavaScript", icon:  <BsCode /> },
    { name: "Coding", icon:  <BsCode /> },
    { name: "ReactJS", icon:  <BsCode /> },
    { name: "NextJS", icon:  <BsCode /> },
    { name: "Music", icon:  <BsMusicNote /> },
    { name: "Education", icon:  <IoSchool /> },
    { name: "Podcast", icon:  <IoMdMicrophone /> },
    { name: "Movie", icon:  <BiMoviePlay /> },
    { name: "Gaming", icon:  <IoLogoGameControllerB /> },
    { name: "Live", icon:  <CgMediaPodcast /> },
    { name: "Sport", icon:  <MdSportsFootball /> },
    { name: "Gym", icon:  <CgGym /> },
  ];

  
  return (
    <div className="flex flex-row overflow-y-auto h-14 md:h-auto md:flex-col w-full ">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={()=> setSelectedCategory(category.name)}
          className={` flex justify-start items-center text-white p-5 my-2 transition-all duration-300  hover:bg-k-orange hover:text-white rounded-full w-full md:p-2  ${
            category.name === selectedCategory && "bg-k-orange"
          } ${category.name === selectedCategory ? "font-bold" : ""}`}
        >
          <span
            className={`mr-4 ${
              category.name === selectedCategory
                ? "text-white"
                : "text-k-orange hover:text-white"
            }`}
          >
            {category.icon}
          </span>
          <span className="capitalize">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SideBar;
