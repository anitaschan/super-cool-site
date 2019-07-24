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
        <a href="/" className="navbar__logo" />
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
