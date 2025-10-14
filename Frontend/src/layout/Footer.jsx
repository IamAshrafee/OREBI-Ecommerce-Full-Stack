import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import React from "react";
import Logo from "../assets/svg/Logo.svg";
import MainWidth from "./MainWidth";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <MainWidth>
        <div className="flex flex-col gap-[65px] mt-14 mb-10">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between grow">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-dmsans text-primary font-bold">MENU</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    to="/"
                    className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover"
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/about"
                    className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/journal"
                    className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover"
                  >
                    Journal
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-dmsans text-primary font-bold">SHOP</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Category 1
                  </p>
                  <p className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Category 2
                  </p>
                  <p className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Category 3
                  </p>
                  <p className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Category 4
                  </p>
                  <p className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Category 5
                  </p>
                  <p className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Category 6
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-dmsans text-primary font-bold">HELP</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Link to="/privacy-policy" className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Privacy Policy
                  </Link>
                  <Link to="/terms-and-conditions" className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Terms & Conditions
                  </Link>
                  <Link to="/special-e-shop" className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Special E-shop
                  </Link>
                  <Link to="/shipping" className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Shipping
                  </Link>
                  <Link to="/secure-payment" className="font-dmsans text-gray-v2 text-sm cursor-pointer hover:text-gray-v2-hover">
                    Secure Payment
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-dmsans text-sm text-primary font-bold">
                    (052) 611-6711
                  </p>
                  <p className="font-dmsans text-sm text-primary font-bold">
                    company@domain.com
                  </p>
                </div>
                <p className="font-dmsans text-sm text-gray-v2">
                  575 Crescent Ave. Quakertown, PA 18951
                </p>
              </div>
              {/* blank div  */}
              <div></div>
            </div>
            <div className="flex grow flex-row items-center justify-center">
              <Link to="/">
                <img src={Logo} alt="Logo image" />
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4 text-[16px]">
              <Link to="https://www.facebook.com" target="_blank">
                <CgFacebook />
              </Link>
              <Link to="https://www.linkedin.com" target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link to="https://www.instagram.com" target="_blank">
                <AiOutlineInstagram />
              </Link>
            </div>
            <div>
              <p className="font-dmsans text-sm text-primary">
                2020 Orebi Minimal eCommerce Developed by Ashrafee
              </p>
            </div>
          </div>
        </div>
      </MainWidth>
    </div>
  );
};

export default Footer;
