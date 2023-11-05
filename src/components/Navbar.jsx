import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <nav className="flex flex-row items-center p-2 sticky top-0 bg-k4-black text-white justify-between">
    <Link to="/">
      <AiFillYoutube className="h-12 w-12 min-h-full ml-2 text-k-orange" />
    </Link>
    <SearchBar />
    <div></div>
  </nav>
);

export default Navbar;
