import React from "react";

const Inputs = ({ label, type, placeholder, className }) => {
  return (
    <div className="font-dmsans">
      <div className="font-bold text-primary">{label}</div>
      <div className="w-max mb-4 border-b-1 border-b-black/10 focus-within:border-b-1 focus-within:border-b-black/50 transition-all duration-300">
        <input
          type={type}
          className={`border-none focus:outline-none px-2 py-3 text-primary ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Inputs;
