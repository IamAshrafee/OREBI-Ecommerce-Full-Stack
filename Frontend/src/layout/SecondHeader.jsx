import { HiShoppingCart } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { BsFilterLeft } from "react-icons/bs";
import React, { useState } from "react";
import MainWidth from "./MainWidth";
import ProfileDropdown from "../features/ProfileDropdown";

const SecondHeader = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="bg-[#f5f5f3]">
      <MainWidth>
        <div className="flex flex-row justify-between items-center font-dmsans text-primary py-6">
          <div>
            <button className="flex flex-row gap-2 items-center cursor-pointer">
              <BsFilterLeft className="" size={20} /> Shop by Category
            </button>
          </div>
          <div>
            <div className="w-[500px] bg-white relative flex flex-row items-center">
              <input
                type="text"
                placeholder="Search Products"
                className="bg-white w-full py-2.5 px-4 border-b border-b-white focus:outline-none focus-within:border-b focus-within:border-b-gray-400 focus-within:transition-all focus-within:duration-300"
              />
              <CgSearch size={18} className="absolute right-4 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <div className="flex flex-row items-end relative">
                <div onClick={() => setOpenProfile((prev) => !prev)} className="flex flex-row items-end">
                  <BsFillPersonFill size={22} className="cursor-pointer" />
                  <AiFillCaretDown className="cursor-pointer" />
                </div>
                {openProfile && <ProfileDropdown />}
              </div>
            </div>
            <HiShoppingCart size={22} className="cursor-pointer" />
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default SecondHeader;
