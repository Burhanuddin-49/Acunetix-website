import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
// import Footer from "../home/Footer";
import video from "../../video/mv1.mp4";
import "./Layout.css";

export default function SharedLayout() {
  return (
    <div className="body">
      <video src={video} autoPlay muted loop className="home-bg-video" />
      <div>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
