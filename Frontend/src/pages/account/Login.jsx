import React, { useState } from "react";
import MainWidth from "../../layout/MainWidth";
import Heading1 from "../../components/Headings/Heading1";
import Heading2 from "../../components/Headings/Heading2";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import Inputs from "../../components/Inputs";
import SecondaryButton from "../../components/SecondaryButton";
import Button from "../../components/Button";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";

// This is the login page of the E-commerce website.

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const breadcrumbItems = [{ label: "Home", path: "/" }, { label: "Login" }];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/authentication/login",
        data
      );
      toast.success(response.data.message);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grow mt-14 mb-28">
      <MainWidth>
        <div>
          <div>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
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
            <form
              className="border-b border-[#F0F0F0]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Heading2 text="Returning Customer"></Heading2>
              <div className="flex flex-row gap-20 mt-10 mb-7">
                <Inputs
                  type="email"
                  placeholder="example@gmail.com"
                  className="md:w-96"
                  label="Email Address"
                  {...register("email", { required: true })}
                  error={errors.email ? "Email is required." : ""}
                />
                <Inputs
                  type="password"
                  placeholder=""
                  className="md:w-96"
                  label="Password"
                  {...register("password", { required: true })}
                  error={errors.password ? "Password is required." : ""}
                />
              </div>
              <SecondaryButton
                type="submit"
                text={isSubmitting ? "Logging in..." : "Login"}
                className="mt-7 px-20 py-4  mb-[70px]"
                disabled={isSubmitting}
              />
            </form>
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
