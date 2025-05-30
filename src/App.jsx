import React from "react";
import Navbar from "./Components/Navbar/navbar";
import ParticlesBackground from "./Particles";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
     <>
      <ParticlesBackground />
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
};
export default App;
