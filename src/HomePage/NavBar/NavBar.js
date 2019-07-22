import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        Home
      </Link>
      <Link to="/portfolio" className="navbar__link">
        Portfolio
      </Link>
      <div>
        <a href="/" className="Logo" />
      </div>
      <Link to="/blog" className="navbar__link">
        Blog
      </Link>
      <Link to="/contact" className="navbar__link">
        Contact Me
      </Link>
    </nav>
  );
};

export default NavBar;
