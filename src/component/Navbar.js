// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css"; // Ensure the CSS is correctly linked

// Import your image files
import githubIcon from "../assets/github.png";  // Update path if needed
import linkedinIcon from "../assets/linkedin.png";  // Update path if needed

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
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
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
