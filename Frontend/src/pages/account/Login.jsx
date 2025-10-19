import React from "react";
import MainWidth from "../../layout/MainWidth";
import Heading1 from "../../components/Headings/Heading1";
import Heading2 from "../../components/Headings/Heading2";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import Inputs from "../../components/Inputs";
import SecondaryButton from "../../components/SecondaryButton";
import Button from "../../components/Button";
import { Link } from "react-router";

// This is the login page of the E-commerce website. 

const Login = () => {
  const breadcrumbItems = [{ label: "Home", path: "/" }, { label: "Login" }];
  return (
    <div className="grow mt-14 mb-28">
      <MainWidth>
        <div>
          <div className="mb-[80px]">
            <Heading1 text="Login" className="mb-2" />
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>

          <div className="flex flex-col gap-12">
            <div className=" border-b border-[#F0F0F0]">
              <p className="font-dmsans text-gray-v1 mb-[60px] w-[644px]">
                Hello, welcome to OREBI store, if you have an account with us,
                please log in. Or create an account to start shopping with us.
                This is the chance to get the best service and experience.
              </p>
            </div>
            {/* Input form */}
            <div className="border-b border-[#F0F0F0]">
              <Heading2 text="Returning Customer"></Heading2>
              <div className="flex flex-row gap-20 mt-10 mb-7">
                <Inputs
                  type="email"
                  placeholder="example@gmail.com"
                  className="md:w-96"
                  label="Email Address"
                />
                <Inputs
                  type="password"
                  placeholder=""
                  className="md:w-96"
                  label="Password"
                />
              </div>
              <SecondaryButton
                text="Login"
                className="mt-7 px-20 py-4  mb-[70px]"
              />
            </div>
            <div>
              <Heading2 text="New Customer"></Heading2>
              <p className="font-dmsans text-primary w-[644px] mb-[60px] mt-10">
                By creating an account you will be able to shop faster, be up to
                date on your order status, and keep track of the orders you have
                previously made.
              </p>
              <Link to="/signup">
                <Button
                  text="Create an Account"
                  className="mt-7 px-20 py-4 mb-[70px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default Login;
