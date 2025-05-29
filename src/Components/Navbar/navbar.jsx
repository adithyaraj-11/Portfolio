import React, { useState } from "react";
import "./Navbar.css";
import { change } from "./Function.js";
import Anchorlink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-top">
        <h3 className="logo" onMouseOver={change}>
          &lt;/Adithyaraj&gt;
        </h3>
        <div className="hamburger" onClick={toggleDropdown}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Mobile nav menu */}
      <ul className={`navmenu ${menuOpen ? "show" : ""}`}>
        <li>
          <Anchorlink className="anchor" offset={100} href="#intro">
            <p>Home</p>
          </Anchorlink>
        </li>
        <li>
          <Anchorlink className="anchor" offset={100} href="#skills">
            <p>Skills</p>
          </Anchorlink>
        </li>
        <li>
          <Anchorlink className="anchor" offset={100} href="#projects">
            <p>Projects</p>
          </Anchorlink>
        </li>
        <li>
          <Anchorlink className="anchor" offset={100} href="#contact">
            <p>Contact</p>
          </Anchorlink>
        </li>
      </ul>

      <div className="connect">
        <Anchorlink className="anchor" offset={100} href="#contact">
          <p>Connect with Me</p>
        </Anchorlink>
      </div>
    </div>
  );
};

export default Navbar;
