import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../home/Header";
import Footer from "../home/Footer"

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
