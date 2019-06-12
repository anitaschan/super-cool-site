import React from "react";
import "./NavBar.scss";
import { Router, Link } from "@reach/router";


const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
