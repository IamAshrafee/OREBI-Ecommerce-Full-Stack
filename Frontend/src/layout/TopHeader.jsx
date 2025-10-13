import React from "react";
import Logo from "../assets/svg/Logo.svg";
import { Link, useLocation } from "react-router";

const TopHeader = () => {
  const location = useLocation();
  const activeStyle = "font-dmsans font-bold text-primary cursor-pointer";
  const inactiveStyle =
    "font-dmsans text-gray-v1 hover:text-primary cursor-pointer";
  return (
    <div className="flex flex-row justify-between items-center h-20">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" className="cursor-pointer" />
      </div>
      {/* Menu Items */}
      <div className="flex flex-row gap-10">
        <Link
          to="/"
          className={location.pathname === "/" ? activeStyle : inactiveStyle}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={
            location.pathname === "/shop" ? activeStyle : inactiveStyle
          }
        >
          Shop
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? activeStyle : inactiveStyle
          }
        >
          About
        </Link>
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? activeStyle : inactiveStyle
          }
        >
          Contact
        </Link>
        <Link
          to="/journal"
          className="font-dmsans text-gray-v1 hover:text-primary cursor-pointer"
        >
          Journal
        </Link>
      </div>
      {/* Blank Space */}
      <div></div>
    </div>
  );
};

export default TopHeader;
