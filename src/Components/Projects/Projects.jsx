import React from "react";
import "./Projects.css";
import sponsorsnap from "../../assets/sponsorsnap.png";
import mess_app from "../../assets/mess_app.png";
import laundrofresh from "../../assets/laundrofresh.png"; 
import weather from "../../assets/anywheather.png";
import grapher from "../../assets/grapher.png";
import stopwatch from "../../assets/stopwatch.png";

const Projects = () => {
  const rd1 = () => {
    window.open("https://github.com/adithyaraj-11/SponsorSnap");
  };
  const rd2 = () => {
    window.open("https://mega-mess-app.vercel.app/");
  };
  const rd3 = () => {
    window.open("https://github.com/adithyaraj-11/LaundroFresh");
  };
  const rd4 = () => {
    window.open("https://github.com/adithyaraj-11/Anywheather");
  };
  const rd5 = () => {
    window.open("https://github.com/adithyaraj-11/Price-Graph-Mailer");
  };
  const rd6 = () => {
    window.open("https://github.com/adithyaraj-11?tab=repositories");
  };

  return (
    <div id="projects" className="projects">
      <div className="title">
        <h1>My Projects</h1>
      </div>
      <div className="projectbox">
        <div className="card" onClick={rd1}>
          <img src={sponsorsnap} alt="Project 1" className="card-image" />
          <div className="card-content">
            <h2>SponsorSnap</h2>
            <p>
              SponsorSnap is a web extension that helps you 
              hide or highlight sponsored products on Flipkart and Amazon, 
              giving you a cleaner, distraction-free shopping experience.
            </p>
          </div>
        </div>
        <div className="card" onClick={rd2}>
          <img src={mess_app} alt="Project 2" className="card-image" />
          <div className="card-content">
            <h2>Hostel Mess App</h2>
            <p>
              A dynamic and responsive web app that simplifies mess menu tracking and feedback for hostel residents at my college.  
              Users can view daily menus, rate meals, leave comments, and track past ratings with powerful filtering options.
            </p>
          </div>
        </div>
        <div className="card" onClick={rd4}>
          <img src={weather} alt="Project 3" className="card-image" />
          <div className="card-content">
            <h2>Anywheather</h2>
            <p>
              An intuitive and vibrant weather app made with HTML,CSS and
              JavaScript with API integration from OpenWeatherMap
            </p>
          </div>
        </div>
        <div className="card" onClick={rd5}>
          <img src={grapher} alt="Project 4" className="card-image" />
          <div className="card-content">
            <h2>Auto Price Graph Generator and Mailer</h2>
            <p>
              A python script to scrape metal and compound prices, generate
              graphs for the price history of 24 months and mail them to
              intended recipients.
            </p>
          </div>
        </div>
        <div className="card" onClick={rd6}>
          <img src={stopwatch} alt="Project 6" className="card-image" />
          <div className="card-content">
            <h2>Other Projects</h2>
            <p>Includes ML projects and creative experiments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
