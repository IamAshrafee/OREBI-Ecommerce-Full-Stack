import React from "react";

const Textarea = ({ label, placeholder, className, value, onChange, name }) => {
  return (
    <div className="font-dmsans">
      <div className="font-bold text-primary">{label}</div>
      <div className="w-max mb-4 border-b-1 border-b-black/10 focus-within:border-b-1 focus-within:border-b-black/50 transition-all duration-300">
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`border-none focus:outline-none px-2 py-3 text-primary w-full ${className}`}
          placeholder={placeholder}
          rows="3"
        />
      </div>
    </div>
  );
};

export default Textarea;