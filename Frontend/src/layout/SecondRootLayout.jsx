import React from "react";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router";
import Footer from "./Footer";
import SecondHeader from "./SecondHeader";
import ScrolltoTop from "../components/function/ScrolltoTop";

const SecondRootLayout = () => {
  return (
    // This is the secondary root layout, where the secondary heading is removed.
    <div className="flex flex-col min-h-screen">

      {/* Scroll to top component, for auto start the page in top of the page  */}
      <ScrolltoTop />

      {/* this is the top main header */}
      <TopHeader />

      {/* THis is the main + outlet where all the child pages will be render  */}
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      
      {/* this is the fixed footer */}
      <Footer />
    </div>
  );
};

export default SecondRootLayout;
