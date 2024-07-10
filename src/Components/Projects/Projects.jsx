import React from "react";
import "./Projects.css";
import weather from "../../assets/anywheather.png";
import grapher from "../../assets/grapher.png";
import stopwatch from "../../assets/stopwatch.png";
import portfolio from "../../assets/portfolio.png";

const Projects = () => {
  const rd1 = () => {
    window.open("https://github.com/adithyaraj-11/Anywheather");
  };
  const rd2 = () => {
    window.open("https://github.com/adithyaraj-11/Price-Graph-Mailer");
  };
  const rd3 = () => {
    window.open("https://github.com/adithyaraj-11/portfolio");
  };
  const rd4 = () => {
    window.open("https://github.com/adithyaraj-11?tab=repositories");
  };

  return (
    <div id="projects" className="projects">
      <div className="title">
        <h1>My Projects</h1>
      </div>
      <div className="projectbox">
        <div className="card" onClick={rd1}>
          <img src={weather} alt="Project 1" className="card-image" />
          <div className="card-content">
            <h2>Anywheather</h2>
            <p>
              An intuitive and vibrant weather app made with HTML,CSS and
              JavaScript with API integration from OpenWeatherMap
            </p>
          </div>
        </div>
        <div className="card" onClick={rd2}>
          <img src={grapher} alt="Project 2" className="card-image" />
          <div className="card-content">
            <h2>Auto Price Graph Generator and Mailer</h2>
            <p>
              A python script to scrape metal and compound prices, generate
              graphs for the price history of 24 months and mail them to
              intended recipients.
            </p>
          </div>
        </div>
        <div className="card" onClick={rd3}>
          <img src={portfolio} alt="Project 3" className="card-image" />
          <div className="card-content">
            <h2>Portfolio</h2>
            <p>A personal portfolio webpage made with ReactJS.</p>
          </div>
        </div>
        <div className="card" onClick={rd4}>
          <img src={stopwatch} alt="Project 4" className="card-image" />
          <div className="card-content">
            <h2>Other Projects</h2>
            <p>Includes small projects and experiments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
