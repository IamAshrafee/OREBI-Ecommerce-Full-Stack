import React from "react";

const Heading1 = ({ text, className }) => {
  return (
    <div
      className={` font-dmsans font-bold text-[44px] text-primary ${className} `}
    >
      {text}
    </div>
  );
};

export default Heading1;
