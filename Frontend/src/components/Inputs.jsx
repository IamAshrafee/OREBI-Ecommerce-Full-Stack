import React from "react";

const Inputs = ({ label, type, placeholder, className, value, onChange }) => {
  return (
    <div className="font-dmsans">
      <label htmlFor={label} className="font-bold text-sm text-primary">
        {label}
      </label>
      <div className="w-max mb-4 border-b border-b-black/10 focus-within:border-b-black/50 transition-all duration-300">
        <input
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          className={`border-none focus:outline-none px-2 py-3 text-primary ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Inputs;
