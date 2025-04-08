// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Main from "../pages/Main.jsx";
import Skills from "../pages/Skills.jsx";
import Projects from "../pages/Projects.jsx";
import Connect from "../pages/Connect.jsx";

import "../App.css"; // Ensure the CSS is correctly linked

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul className="nav-left">
          <li><Link to="/">Main</Link></li>
        </ul>
        <ul className="nav-right">
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/connect">Connect</Link></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
