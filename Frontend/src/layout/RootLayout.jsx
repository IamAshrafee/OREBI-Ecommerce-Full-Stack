import React from "react";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <main className="grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
