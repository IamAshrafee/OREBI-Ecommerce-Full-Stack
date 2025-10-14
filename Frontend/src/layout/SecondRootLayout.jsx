import React from "react";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router";
import Footer from "./Footer";
import SecondHeader from "./SecondHeader";
import ScrolltoTop from "../components/function/ScrolltoTop";

const SecondRootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrolltoTop />
      <TopHeader />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SecondRootLayout;
