import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
// import Footer from "../home/Footer";

export default function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
