import React from "react";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router";
import Footer from "./Footer";
import SecondHeader from "./SecondHeader";
import ScrolltoTop from "../components/function/ScrolltoTop";

// This is the main root layout this component is used to render fixed header and footer and the child pages inside

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrolltoTop />
      <TopHeader />
      <SecondHeader />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
