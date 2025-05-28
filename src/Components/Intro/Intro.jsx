import React from "react";
import "./Intro.css";
import Resume from "../../assets/Resume.pdf";

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
        I'm currently pursuing a degree in B.Tech - Computer Science. I have
        great interest in Web & Software Development, and Machine Learning.
      </p>
      <button className="btns" onClick={download}>
        Download Resume
      </button>
    </div>
  );
};

export default Intro;
