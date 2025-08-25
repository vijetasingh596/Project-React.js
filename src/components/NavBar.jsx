import React from "react";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg h-20 w-full p-3 flex items-center justify-between sticky top-0">
      <figure className="text-2xl font-extrabold">
        <span className="text-orange-400">Q</span>-Blogs
      </figure>
      <ul className="flex items-center gap-5 font-semibold">
        <li className="cursor-pointer">
            <FaBehance/>
        </li>
        <li className="cursor-pointer">
             <FaDribbble/>
        </li>
        <li className="cursor-pointer">
          <button className="border px-5 p-3 rounded-full bg-blue-500 text-white">
            profile
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
