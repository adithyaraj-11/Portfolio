import React from "react";
import "./Skills.css";
import cpp from "../../assets/cpp.png";
import py from "../../assets/python.png";
import html from "../../assets/html.png";
import css from "../../assets/css.svg";
import js from "../../assets/js.png";
import reactjs from "../../assets/reactjs.svg";
import sql from "../../assets/sql.png";
import git from "../../assets/git.png";
import nodejs from "../../assets/nodejs.svg";
import numpy from "../../assets/numpy.svg";
import pandas from "../../assets/pandas.svg";
const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills - Things I know , I know.</h1>
      <div className="skillbox">
        <div className="lang lang1">
          <img src={cpp} alt="C++" width={120} />
          <br />
          C++
        </div>
        <div className="lang lang2">
          <img src={py} alt="Python" width={120} />
          <br />
          Python
        </div>
        <div className="lang lang3">
          <img src={html} alt="HTML" width={120} />
          <br />
          HTML
        </div>
        <div className="lang lang4">
          <img src={css} alt="CSS" width={120} />
          <br />
          CSS
        </div>
        <div className="lang lang5">
          <img src={js} alt="JavaScript" width={120} />
          <br />
          JavaScript
        </div>
        <div className="lang lang6">
          <img src={reactjs} alt="ReactJS" width={120} />
          <br />
          ReactJS
        </div>
        <div className="lang lang7">
          <img src={sql} alt="SQL" width={120} />
          <br />
          SQL
        </div>
        <div className="lang lang7">
          <img src={git} alt="Git" width={120} />
          <br />
          Git
        </div>
        <div className="lang lang7">
          <img src={nodejs} alt="NodeJS" width={120} />
          <br />
          NodeJS
        </div>
        <div className="lang lang7">
          <img src={numpy} alt="Numpy" width={120} />
          <br />
          Numpy
        </div>
        <div className="lang lang7">
          <img src={pandas} alt="Pandas" width={120} />
          <br />
          Pandas
        </div>
      </div>
    </div>
  );
};

export default Skills;
