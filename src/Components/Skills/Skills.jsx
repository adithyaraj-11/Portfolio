import React from "react";
import "./Skills.css";
import cpp from "../../assets/cpp.png";
import aem from "../../assets/aem.png";
import java from "../../assets/java.png";
import jsp from "../../assets/jsp.png";
import mysql from "../../assets/mysql.png";
import py from "../../assets/python.png";
import supabase from "../../assets/supabase.png";
import html from "../../assets/html.png";
import pgad from "../../assets/pgad.png";
import postman from "../../assets/postman.png";
import css from "../../assets/css.svg";
import js from "../../assets/js.png";
import reactjs from "../../assets/reactjs.svg";
import sql from "../../assets/sql.png";
import mongo from "../../assets/mongo.png";
import git from "../../assets/git.png";
import nodejs from "../../assets/nodejs.svg";
import numpy from "../../assets/numpy.svg";
import pandas from "../../assets/pandas.svg";
const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills - Things I know , I know.</h1>
      <div className="skillbox">
        <div className="lang ">
          <img src={java} alt="Java" width={120} />
          <br />
          Java
        </div>
        <div className="lang ">
          <img src={py} alt="Python" width={120} />
          <br />
          Python
        </div>
         <div className="lang ">
          <img src={reactjs} alt="ReactJS" width={120} />
          <br />
          ReactJS
        </div>
        <div className="lang ">
          <img src={js} alt="JavaScript" width={120} />
          <br />
          JavaScript
        </div>
        <div className="lang ">
          <img src={aem} alt="AEM" width={120} />
          <br />
          Adobe Experience Manager
        </div>
        <div className="lang ">
          <img src={html} alt="HTML" width={120} />
          <br />
          HTML
        </div>
        <div className="lang ">
          <img src={css} alt="CSS" width={120} />
          <br />
          CSS
        </div>
        <div className="lang ">
          <img src={postman} alt="Postman" width={120} />
          <br />
          Postman
        </div>
       <div className="lang ">
          <img src={cpp} alt="C++" width={120} />
          <br />
          C++
        </div>
        <div className="lang ">
          <img src={sql} alt="SQL" width={120} />
          <br />
          SQL
        </div>
        <div className="lang ">
          <img src={supabase} alt="Supabase" width={120} />
          <br />
          Supabase
        </div>
        <div className="lang ">
          <img src={pgad} alt="PostgreSQL" width={120} />
          <br />
          PostgreSQL - PgAdmin4
        </div>
        <div className="lang ">
          <img src={mysql} alt="MySQL" width={120} />
          <br />
          MySQL
        </div>
         <div className="lang ">
          <img src={mongo} alt="MongoDB" width={120} />
          <br />
          MongoDB
        </div>
        <div className="lang ">
          <img src={git} alt="Git" width={120} />
          <br />
          Git
        </div>
        <div className="lang ">
          <img src={nodejs} alt="NodeJS" width={120} />
          <br />
          NodeJS
        </div>
        <div className="lang ">
          <img src={jsp} alt="JSP Servlet" width={120} />
          <br />
          JSP Servlet
        </div>
        <div className="lang ">
          <img src={numpy} alt="Numpy" width={120} />
          <br />
          Numpy
        </div>
        <div className="lang ">
          <img src={pandas} alt="Pandas" width={120} />
          <br />
          Pandas
        </div>
        <div className="lang more">
          More to come...
        </div>
      </div>
    </div>
  );
};

export default Skills;
