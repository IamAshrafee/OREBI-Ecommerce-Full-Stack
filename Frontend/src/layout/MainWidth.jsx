import React from "react";

const mainWidth = 1600;

const MainWidth = ({ children }) => {
  return <div className={`max-w-[${mainWidth}px] mx-auto`}>{children}</div>;
};

export default MainWidth;
