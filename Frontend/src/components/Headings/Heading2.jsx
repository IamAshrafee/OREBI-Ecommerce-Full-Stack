import React from "react";

const Heading2 = ({ text, className }) => {
  return (
    <div
      className={` font-dmsans font-bold text-[34px] text-primary ${className} `}
    >
      {text}
    </div>
  );
};

export default Heading2;
