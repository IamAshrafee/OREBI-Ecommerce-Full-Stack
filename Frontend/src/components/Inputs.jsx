import React from "react";

const Inputs = ({ label, type, placeholder, className, name, error, required, ...rest }) => {
  return (
    <div className="font-dmsans">
      <label htmlFor={name} className={`font-bold text-sm ${error ? 'text-red-500' : 'text-primary'}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`w-max mb-1 border-b border-b-black/10 focus-within:border-b-black/50 transition-all duration-300 ${error ? 'border-b-red-500' : ''}`}>
        <input
          id={name}
          name={name}
          type={type}
          className={`border-none focus:outline-none px-2 py-3 text-primary w-full ${className}`}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Inputs;