import React from "react";

const SecondaryButton = ({ text, className, disabled, type = "button" }) => {
  return (
    <button
      type={type}
      className={`border border-primary font-dmsans font-bold text-sm text-primary hover:bg-primary hover:text-white hover:ease-in-out hover:duration-300 cursor-pointer ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
