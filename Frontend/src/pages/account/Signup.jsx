import React, { useState } from "react";
import Heading1 from "../../components/Headings/Heading1";
import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import Heading2 from "../../components/Headings/Heading2";
import Inputs from "../../components/Inputs";
import MainWidth from "../../layout/MainWidth";
import Checkbox from "../../components/Checkbox";
import Button from "./../../components/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// This is the main signup page of this website

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const breadcrumbItems = [{ label: "Home", path: "/" }, { label: "Sign up" }];
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/authentication/registration",
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
    <div>
      <MainWidth>
        <div className="mt-14 mb-28">
          <div>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
          <div className="flex flex-col gap-2 mb-16">
            <Heading1 text="Sign up" />
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>
          {/* Signup form  */}
          <form
            className="flex flex-col gap-12"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                <div className="flex flex-row gap-8">
                  <Inputs
                    label="First Name"
                    type="text"
                    placeholder="John"
                    className="md:w-96"
                    required="required"
                    {...register("firstName", { required: true })}
                    error={errors.firstName ? "First name is required." : ""}
                  />
                  <Inputs
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    className="md:w-96"
                    {...register("lastName", { required: true })}
                    error={errors.lastName ? "Last name is required." : ""}
                  />
                </div>
                <div className="flex flex-row gap-8 mb-[70px]">
                  <Inputs
                    label="Email Address"
                    type="email"
                    placeholder="John@gmail.com"
                    className="md:w-96"
                    required="required"
                    {...register("email", { required: true })}
                    error={errors.email ? "Email is required." : ""}
                  />
                  <Inputs
                    label="Telephone"
                    type="text"
                    placeholder="+88017xxxxxxxx"
                    className="md:w-96"
                    {...register("telephone")}
                  />
                </div>
              </div>
            </div>
            {/* Address section  */}
            <div className="border-b border-[#F0F0F0] flex flex-col gap-10">
              <Heading2 text="Your Address" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-8">
                  <Inputs
                    label="Address 1"
                    type="text"
                    placeholder="123 Main St"
                    className="md:w-96"
                    required="required"
                    {...register("address1", { required: true })}
                    error={errors.address1 ? "Address is required." : ""}
                  />
                  <Inputs
                    label="Address 2"
                    type="text"
                    placeholder="-"
                    className="md:w-96"
                    {...register("address2")}
                  />
                </div>
                <div className="flex flex-row gap-8">
                  <Inputs
                    label="City"
                    type="text"
                    placeholder="Your City"
                    className="md:w-96"
                    required="required"
                    {...register("city", { required: true })}
                    error={errors.city ? "City is required." : ""}
                  />
                  <Inputs
                    label="Postal Code"
                    type="text"
                    placeholder="1216"
                    className="md:w-96"
                    {...register("postalCode")}
                  />
                </div>
                <div className="flex flex-row gap-8 mb-[70px]">
                  <Inputs
                    label="Division"
                    type="text"
                    placeholder="Your Division"
                    className="md:w-96"
                    required="required"
                    {...register("division", { required: true })}
                    error={errors.division ? "Division is required." : ""}
                  />
                  <Inputs
                    label="District"
                    type="text"
                    placeholder="Your District"
                    className="md:w-96"
                    required="required"
                    {...register("district", { required: true })}
                    error={errors.district ? "District is required." : ""}
                  />
                </div>
              </div>
            </div>
            {/* Password section */}
            <div className="border-b border-[#F0F0F0] flex flex-col gap-10">
              <Heading2 text="Set a Password" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-8 mb-[70px]">
                  <Inputs
                    label="Password"
                    type="password"
                    placeholder="Set a New Password"
                    className="md:w-96"
                    required="required"
                    {...register("password", { required: true })}
                    error={errors.password ? "Password is required." : ""}
                  />
                  <Inputs
                    label="Repeat Password"
                    type="password"
                    placeholder="Repeat Password"
                    className="md:w-96 "
                    required="required"
                    {...register("repeatPassword", {
                      required: true,
                      validate: (value) => value === watch("password"),
                    })}
                    error={
                      errors.repeatPassword ? "Passwords do not match." : ""
                    }
                  />
                </div>
              </div>
            </div>
            {/* Submit section  */}
            <div className="flex flex-col gap-6">
              <Checkbox
                text="I have read and agree to the Privacy Policy"
                {...register("privacyPolicy", { required: true })}
              />
              {errors.privacyPolicy && (
                <div className="text-red-500 text-xs mt-1">
                  Please accept the privacy policy.
                </div>
              )}

              <Button
                text={isSubmitting ? "Creating..." : "Create"}
                type="submit"
                className="px-14 p-3 w-max"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </MainWidth>
    </div>
  );
};

export default Signup;
