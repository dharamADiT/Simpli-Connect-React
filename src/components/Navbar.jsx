import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import imgs from "/public/logo3.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const Logoclicker = () => {
    navigate("/");
    setOpen(false);
  };

  return (
    <div className=" py-4 px-6 flex items-center justify-between shadow">
      <img
        className="w-36 cursor-pointer"
        onClick={Logoclicker}
        src={imgs}
        alt="logo"
      />

      <button className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiMenu />}
      </button>

      <nav className="hidden md:flex flex-row gap-10 text-lg font-medium">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/leadingbanks"
        >
          Leading Banks
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/overview"
        >
          Overview
        </NavLink>
      </nav>

      {open && (
        <nav className="absolute top-20 left-0 w-full bg-cyan-300 shadow-md flex flex-col gap-5 text-lg py-6 px-6 md:hidden z-50">
          <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/leadingbanks"
          >
            Leading Banks
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            to="/overview"
          >
            Overview
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
