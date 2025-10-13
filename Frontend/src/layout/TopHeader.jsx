import React from "react";
import Logo from "../assets/svg/Logo.svg";
import MainWidth from "./MainWidth";
import { Link, useLocation } from "react-router";

const TopHeader = ({ children }) => {
  const location = useLocation();
  const activeStyle = "font-dmsans font-bold text-primary cursor-pointer";
  const inactiveStyle =
    "font-dmsans text-gray-v1 hover:text-primary cursor-pointer";
  return (
    <MainWidth>
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
          <span className="font-dmsans text-gray-v1 hover:text-primary cursor-pointer">
            Journal
          </span>
        </div>
        {/* Blank Space */}
        <div></div>
      </div>
      <div>{children}</div>
    </MainWidth>
  );
};

export default TopHeader;

