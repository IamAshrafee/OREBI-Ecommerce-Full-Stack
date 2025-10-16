import React from "react";
import MainWidth from "../layout/MainWidth";
import Heading1 from "../components/Headings/Heading1";
import CustomBreadcrumb from "../components/CustomBreadcrumb";
import Button from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";
import Inputs from "./../components/Inputs";
import Heading2 from "../components/Headings/Heading2";
import Textarea from "../components/Textarea";

// Contact page - Using this page, user will contact with the author/admin. Filling up the contact form and sending that will be sent an email to the admin's/given email. 

const Contact = () => {
  const breadcrumbItems = [{ label: "Home", path: "/" }, { label: "Contact" }];
  return (
    <div className="grow mt-14 mb-28">
      <MainWidth>
        <div>
          <div className="mb-[80px]">
            <Heading1 text="Contact" className="mb-2" />
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>
          <div className="flex flex-col gap-8">
            <Heading2 text="Fill up a Form" />
            <form action="submit">
              <div className="flex flex-col gap-2">
                <Inputs
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-[500px]"
                />
                <Inputs
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-[500px]"
                />
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  className="w-[500px]"
                />
              </div>
              <Button text="Post" className="px-9 py-3 w-max" />
            </form>
          </div>
          <div className="mt-24">
            <Heading2
              text="Our Location"
              className="mb-4 pb-4 border-b border-b-black/20"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14606.202351085074!2d90.37416957141109!3d23.7634004095152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70030f72dad%3A0xb1e04b25c323f66e!2sBangladesh%20National%20Parliament%20House!5e0!3m2!1sen!2sbd!4v1760426145065!5m2!1sen!2sbd"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default Contact;
