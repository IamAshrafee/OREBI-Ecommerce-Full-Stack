import React from "react";
import Heading1 from "../../components/Headings/Heading1";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import Heading2 from "../../components/Headings/Heading2";
import Inputs from "../../components/Inputs";
import MainWidth from "../../layout/MainWidth";
import Checkbox from "../../components/Checkbox";
import Button from "./../../components/Button";

// This is the main signup page of this website 

const Signup = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Sign up" },
  ];
  return (
    <div>
      <MainWidth>
        <div className="mt-14 mb-28">
          <div className="flex flex-col gap-2 mb-16">
            <Heading1 text="Sign up" />
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>
          {/* Signup form  */}
          <form type="submit" className="flex flex-col gap-12">
            <div className="border-b border-[#F0F0F0]">
              <p className="font-dmsans text-gray-v1 mb-[60px] w-[644px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus expedita voluptate libero rem reprehenderit
                temporibus, laboriosam!
              </p>
            </div>
            {/* Personal Details Section  */}
            <div className="border-b border-[#F0F0F0] flex flex-col gap-10">
              <Heading2 text="Your Personal Details" />
              <div className="flex flex-col gap-4">
                <div iv className="flex flex-row gap-8">
                  <Inputs
                    label="First Name"
                    type="text"
                    placeholder="John"
                    className="md:w-96"
                    required="required"
                  />
                  <Inputs
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    className="md:w-96"
                  />
                </div>
                <div iv className="flex flex-row gap-8 mb-[70px]">
                  <Inputs
                    label="Email Address"
                    type="email"
                    placeholder="John@gmail.com"
                    className="md:w-96"
                    required="required"
                  />
                  <Inputs
                    label="Telephone"
                    type="number"
                    placeholder="+88017xxxxxxxx"
                    className="md:w-96"
                  />
                </div>
              </div>
            </div>
            {/* Address section  */}
            <div className="border-b border-[#F0F0F0] flex flex-col gap-10">
              <Heading2 text="Your Address" />
              <div className="flex flex-col gap-4">
                <div iv className="flex flex-row gap-8">
                  <Inputs
                    label="Address 1"
                    type="text"
                    placeholder="123 Main St"
                    className="md:w-96"
                    required="required"
                  />
                  <Inputs
                    label="Address 2"
                    type="text"
                    placeholder="-"
                    className="md:w-96"
                  />
                </div>
                <div iv className="flex flex-row gap-8">
                  <Inputs
                    label="City"
                    type="text"
                    placeholder="Your City"
                    className="md:w-96"
                    required="required"
                  />
                  <Inputs
                    label="Postal Code"
                    type="text"
                    placeholder="1216"
                    className="md:w-96"
                  />
                </div>
                <div iv className="flex flex-row gap-8 mb-[70px]">
                  <Inputs
                    label="Division"
                    type="text"
                    placeholder="Your Division"
                    className="md:w-96"
                    required="required"
                  />
                  <Inputs
                    label="District"
                    type="text"
                    placeholder="Your District"
                    className="md:w-96"
                    required="required"
                  />
                </div>
              </div>
            </div>
            {/* Password section */}
            <div className="border-b border-[#F0F0F0] flex flex-col gap-10">
              <Heading2 text="Set a Password" />
              <div className="flex flex-col gap-4">
                <div iv className="flex flex-row gap-8 mb-[70px]">
                  <Inputs
                    label="Password"
                    type="password"
                    placeholder="Set a New Password"
                    className="md:w-96"
                    required="required"
                  />
                  <Inputs
                    label="Repeat Password"
                    type="password"
                    placeholder="Repeat Password"
                    className="md:w-96 "
                    required="required"
                  />
                </div>
              </div>
            </div>
            {/* Submit section  */}
            <div className="flex flex-col gap-6">
              <Checkbox text="I have read and agree to the Privacy Policy" />

              <Button text="Create" className="px-14 p-3 w-max" />
            </div>
          </form>
        </div>
      </MainWidth>
    </div>
  );
};

export default Signup;
