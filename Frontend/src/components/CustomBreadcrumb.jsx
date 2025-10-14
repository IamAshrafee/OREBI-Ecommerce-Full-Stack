import { BiChevronRight } from "react-icons/bi";
import React from "react";
import { Link } from "react-router";

const CustomBreadcrumb = ({ items }) => {
  return (
    <div className="flex flex-row flex-wrap items-center text-sm font-dmsans text-gray-v2 mb-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <BiChevronRight size={16} className="mx-2 text-gray-v2" />
          )}
          <div className="mb-1">
            {item.path ? (
              <Link to={item.path} className="hover:text-gray-v2-hover">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-gray-v2-hover">
                {item.label}
              </span>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomBreadcrumb;
