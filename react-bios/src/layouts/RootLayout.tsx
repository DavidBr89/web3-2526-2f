import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Dynamisch content */}
      <div className="grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
