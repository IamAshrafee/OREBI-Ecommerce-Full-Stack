import React from "react";

const Button = ({ text, className, px, py }) => {
  return (
    <button
      className={`bg-primary font-dmsans font-bold text-sm text-white cursor-pointer py-${[
        py,
      ]} px-${[px]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
