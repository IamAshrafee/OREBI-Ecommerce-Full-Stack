import React from "react";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <TopHeader>
        <main>
          <Outlet />
        </main>
      </TopHeader>
    </>
  );
};

export default RootLayout;
