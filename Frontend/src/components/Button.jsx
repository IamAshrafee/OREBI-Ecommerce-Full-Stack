import React from "react";

const Button = ({ text, className}) => {
  return (
    <button
      className={`bg-primary font-dmsans font-bold text-sm text-white cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
