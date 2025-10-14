import React from "react";

const SecondaryButton = ({ className, text }) => {
  return (
    <button
      className={`border border-primary font-dmsans font-bold text-sm text-primary hover:bg-primary hover:text-white hover:ease-in-out hover:duration-300 cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
