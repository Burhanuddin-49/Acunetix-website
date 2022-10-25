import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import image from "../../image/menu-btn.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="logo">Acunetix 10.0</h1>
      <ul className={`nav-links`} id={`mobile-menu-${menu}`}>
        <li className="active">
          <Link to="/" onClick={() => setMenu(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/event" onClick={() => setMenu(false)}>
            Event
          </Link>
        </li>
        <li>
          <Link to="/sponsors" onClick={() => setMenu(false)}>
            Sponsors
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenu(false)}>
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        className={`menu-btn`}
        src={image}
        alt=""
        onClick={() => {
          setMenu(menu ? false : true);
        }}
      />
    </nav>
  );
};

export default Header;
