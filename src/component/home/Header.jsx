import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="home">
      <header id="Home">
        <Link to="/" className="logo">
          Acunetix 10.0
        </Link>
        <ul className="navigation">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="#about">About</Link>
          </li> */}
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/sponsors">Sponsors</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
