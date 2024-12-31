import React from "react";
import Navbar from "../Navbar/Navbar";
import email from "./assets/EmailVector.png"
import github from "./assets/GitHubVector.png"
import linkedin from "./assets/LinkedinVector.png"


import "./hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <Navbar />
      <div className="BlackBackground"></div>
      <div className="TitleIntro">
        <p className="intro">Hi, I am</p>
        <p className="name">Aakash Annadurai</p>
        <p className="role">Front-end Developer</p>
      </div>
      <div className="iconbtn">
        <button><img src={email} className="emailicon" alt="mail" /></button>
        <button><img src={github} className="githubicon" alt="github" /></button>
        <button><img src={linkedin} className="linkedinicon" alt="linkedin" /></button>
      </div>
      <div className="HeroFooter">
          <div className="Objective"><p>OBJECTIVE</p></div>
          <div className="ObjectiveInfo">
            <p>To showcase my expertise in crafting visually stunning,
            user-friendly, and responsive web interfaces. My portfolio
            highlights my proficiency in modern front-end technologies,
            including HTML, CSS, JavaScript, and frameworks such as React.
            Through real-world projects and innovative designs, I aim to
            demonstrate my ability to create seamless user experiences, write
            clean and maintainable code, and stay at the forefront of emerging
            trends in front-end development.
            </p>
          </div>
          <div className="ReadMore"><p>READ MORE</p></div>
      </div>
    </div>
  );
}
