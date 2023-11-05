import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="relative ">
      <form
        id="search"
        name="search"
        onSubmit={handleSubmit}
        className="mr-8 md:w-[500px] "
      >
        <input
          className="text-k1-black outline-none focus:outline-none placeholder:italic rounded-full px-4 pr-12 py-1 shadow-sm w-full "
          placeholder="Search"
        />
        <button
          id="search"
          name="search"
          className="absolute right-12 top-1/2 -translate-y-1/2"
        >
          <FaSistrix className="text-2xl text-k4-black"></FaSistrix>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
