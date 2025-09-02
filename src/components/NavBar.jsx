import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const NavBar = () => {
  const{loggedInUser}=useContext(AuthContext)
  // console.log(loggedInUser.id);
  let navigate=useNavigate()
  const[toggle,setToggle]=useState(false)

  const openDrowpdown=()=>setToggle(!toggle)
  let token=localStorage.getItem("token")

  const handleLogout=()=>{
    localStorage.removeItem("token")
    toast.success("logged Out")
    navigate("/login")
  }
  return (
    <nav className="bg-white z-50 shadow-lg h-20 w-full p-3 flex items-center justify-between sticky top-0">
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
        {token?<>
        <li className="cursor-pointer">
          <button onClick={openDrowpdown} className="relative border px-5 p-3 rounded-full bg-blue-500 text-white">
            profile
           {toggle?<>
            <ul className="absolute bg-white rounded  shadow-2xl right-0 top-13 border border-gray-200 text-black p-2">
              <Link to={`/userdashboard/${loggedInUser?.id}`}><li className="px-4 py-1 hover:text-blue-600 cursor-pointer">Dashboard</li></Link>
              <li onClick={handleLogout} className="px-4 py-1 hover:text-blue-600 cursor-pointer">Logout</li>
            </ul>
           </>:null}
          </button>
        </li>
        </>:<>
        <li className="cursor-pointer">
          <Link to={"/signup"} className="border px-5 p-3 rounded-full bg-blue-500 text-white">
            SignUp
          </Link>
        </li>
         <li className="cursor-pointer">
          <Link to={"/login"} className="border px-5 p-3 rounded-full bg-white text-blue-500 shadow">
            Login
          </Link>
        </li>
        </>}
      </ul>
    </nav>
  );
};

export default NavBar;
