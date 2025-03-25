import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from './images/logo.png'
const Navbar = () => {
  return (
    <div className=" bg-gray-300 w-full h-[70px] flex justify-between items-center rounded-3xl px-6 lg:px-10 shadow-md">
      {/* Logo Section */}
      <div className=" h-[90%] flex items-center" ><img src={logo} className='h-[65%]' alt="LOGO" /></div>

     
      <div className="flex justify-evenly items-center gap-6">
        {[
          { path: "/", label: "Home" },
          { path: "/beds", label: "Find Beds" },
          { path: "/ambulance", label: "Ambulances" },
          { path: "/emergency", label: "Emergency" },
          { path: "/aboutus", label: "About Us" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `hover:text-purple-500 transition-colors ${
                isActive ? "text-purple-700 font-semibold" : "text-black"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Sign-Up Button */}
      <button className="group font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl py-2 px-4 rounded-4xl flex gap-4 justify-between items-center transition-all duration-500 border-2 cursor-pointer">
        Sign Up
        <span className="flex justify-center items-center bg-white p-2 rounded-full rotate-[-30deg] transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-1">
          <FaArrowRightLong className="text-xl font-extrabold text-black" />
        </span>
      </button>
    </div>
  );
};

export default Navbar;
