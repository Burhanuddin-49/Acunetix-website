import React from "react";
import "./styles/Home.css";
// import video from "../../video/mv1.mp4";
import About from "./About";
import Footer from "./Footer";
import Title from "./Title";
import EventCatalog from "./EventCatalog";
import SponsorCatalog from "./SponsorCatalog";
const Home = () => {
  return (
    <div className="body">
      {/* <video src={video} autoPlay muted loop className="home-bg-video" />  */}
      <div className="section">
        <Title />
        <About />
        <EventCatalog />
        <SponsorCatalog />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
