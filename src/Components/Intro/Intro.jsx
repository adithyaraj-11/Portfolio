import React from "react";
import "./Intro.css";
import Resume from "../../assets/125003013_Adithyaraj.pdf";

const Intro = () => {
  const download = () => {
    window.open(Resume);
  };

  return (
    <div id="intro" className="intro">
      <h1>
        Hi, I'm <span>Adithyaraj</span>
      </h1>
      <p>
        Currently pursuing a degree in B.Tech - Computer Science. Has great
        interest in Web & Software Development and Machine Learning.{" "}
      </p>
      <button className="btns" onClick={download}>
        My Resume
      </button>
    </div>
  );
};

export default Intro;
