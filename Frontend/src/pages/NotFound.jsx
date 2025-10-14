import React from "react";
import Button from "./../components/Button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="grow flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-dmsans font-bold text-[55px]">404 - Not Found</h1>
        <p className="font-dmsans font-normal text-[18px]">
          The page you are looking for does not exist.
        </p>
        <Link to="/">
          <Button text="Go to Home" className="mt-6 px-14 py-4"  />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
