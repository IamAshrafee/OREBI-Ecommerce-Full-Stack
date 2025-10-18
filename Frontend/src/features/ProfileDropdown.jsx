import React from "react";
import { Link } from "react-router";

const ProfileDropdown = () => {
  return (
    <div className="flex flex-col bg-white absolute top-8 right-0 px-0 py-0 rounded-[4px] shadow-sm">
      <ul className="font-dmsans text-sm text-primary flex flex-col items-center justify-center p-0 ">
        <Link
          to="/login"
          className="py-2 px-11 border-b w-full border-y-gray-200 text-center hover:bg-gray-100 cursor-pointer"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="py-2 px-11 border-b w-full border-y-gray-200 text-center hover:bg-gray-100 cursor-pointer"
        >
          Signup
        </Link>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
