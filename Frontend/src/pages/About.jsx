import React from "react";
import MainWidth from "../layout/MainWidth";
import Heading1 from "../components/Headings/Heading1";
import CustomBreadcrumb from "../components/CustomBreadcrumb";

// This is the About page - where will be the infomation about this E-commerce website / about the business

const About = () => {
  const breadCrumbItems = [{ path: "/", label: "Home" }, { label: "About" }];
  return (
    <div className="grow mt-14 mb-28">
      <MainWidth>
        <div className="flex flex-col">
          <div className="mb-20">
            <Heading1 text="About" />
            <CustomBreadcrumb items={breadCrumbItems} />
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default About;
