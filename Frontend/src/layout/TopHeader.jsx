import React from "react";
import Logo from "../assets/svg/Logo.svg";

const TopHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center h-20">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" className="cursor-pointer" />
      </div>
      {/* Menu Items */}
      <div className="flex flex-row gap-10">
        <span className="font-dmsans font-bold text-primary cursor-pointer">
          Home
        </span>
        <span className="font-dmsans text-gray-v1 hover:text-primary cursor-pointer">
          Shop
        </span>
        <span className="font-dmsans text-gray-v1 hover:text-primary cursor-pointer">
          About
        </span>
        <span className="font-dmsans text-gray-v1 hover:text-primary cursor-pointer">
          Contact
        </span>
        <span className="font-dmsans text-gray-v1 hover:text-primary cursor-pointer">
          Journal
        </span>
      </div>
      {/* Blank Space */}
      <div></div>
    </div>
  );
};

export default TopHeader;
