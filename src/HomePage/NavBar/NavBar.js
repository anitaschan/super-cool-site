import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
