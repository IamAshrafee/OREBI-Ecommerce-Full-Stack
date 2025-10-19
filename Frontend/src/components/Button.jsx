import React from "react";

const Button = ({ text, className, disabled, type = "button" }) => {
  return (
    <button
      type={type}
      className={`bg-primary font-dmsans font-bold text-sm text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;