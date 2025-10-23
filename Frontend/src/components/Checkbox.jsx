import React from "react";

const Checkbox = ({ text, ...rest }) => {
  return (
    <label className="flex flex-row gap-3 items-center cursor-pointer select-none">
      <div className="h-3.5 w-3.5 border border-gray-400 cursor-pointer flex items-center justify-around">
        <input
          type="checkbox"
          className="appearance-none h-2.5 w-2.5  focus:outline-none checked:bg-gray-300 cursor-pointer"
          {...rest}
        />
      </div>
      <p className="text-gray-v2 font-dmsans">{text}</p>
    </label>
  );
};

export default Checkbox;
