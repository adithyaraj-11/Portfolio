import { useState } from "react";
import "./Navbar.css";
import { change } from "./Function.js";
import { Link } from "react-scroll";

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

      <ul className={`navmenu ${menuOpen ? "show" : ""}`}>
        <li>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="anchor"
          >
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="anchor"
          >
            <p>Skills</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="anchor"
          >
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="anchor"
          >
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
