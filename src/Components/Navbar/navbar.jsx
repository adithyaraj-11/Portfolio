import React from "react";
import "./Navbar.css";
import { change } from "./Function.js";
import Anchorlink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="logo" onMouseOver={change}>
        &lt;/Adithyaraj&gt;
      </h3>
      <ul className="navmenu">
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
