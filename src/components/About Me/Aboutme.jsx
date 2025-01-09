import React from "react";
import "./aboutme.css";
import separator from "./assets/separator.png";
import design from "./assets/design.png";
import development from "./assets/development.png";
import maintenance from "./assets/maintenance.png";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import bootstrap from "./assets/bootstrap.svg";
import javascript from "./assets/javascript.svg";
import react from "./assets/react.svg";
import git from "./assets/git.svg";
import figma from "./assets/figma.svg";
import nodejs from "./assets/nodejs.svg";
import typescript from "./assets/typescript.svg";

export default function Aboutme() {
  return (
    <>
      <div className="Aboutme" id="aboutMe">
        <div className="header">
          <p>ABOUT ME</p>
        </div>
        <div className="infoaboutme">
          <p>
            A self-taught and innovative professional with a passion for design
            and problem-solving. I specialize in front-end development and have
            a some foundational understanding of back-end technologies, enabling
            me to craft user-centric and impactful digital solutions.
          </p>
        </div>
        <div className="explore">
          <p>EXPLORE</p>
        </div>
        <img src={separator} alt="separator" className="separator1" />
        <div className="services">
          <div className="designanddevelopment">
            <div className="design">
              <img src={design} alt="designlogo" />
              <p className="title">DESIGN</p>
              <p className="info">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>
            <div className="development">
              <img src={development} alt="developmentlogo" />
              <p className="title">DEVELOPMENT</p>
              <p className="info">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>
          </div>
          <div className="maintenance">
            <img src={maintenance} alt="maintenancelogo" />
            <p className="title">MAINTENANCE</p>
            <p className="info">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
        <img src={separator} alt="separator" className="separator2" />
      </div>
      <div className="Skills" id="skills">
        <div className="header">
          <p>SKILLS</p>
        </div>
        <div className="skillsused">
          <div className="usingnow">
            <p>USING NOW:</p>
            <div className="usinglist">
              <div className="logo html">
                <img src={html} alt="htmllogo" />
                <p>HTML</p>
              </div>
              <div className="logo css">
                <img src={css} alt="csslogo" />
                <p>CSS</p>
              </div>
              <div className="logo javascript">
                <img src={javascript} alt="javascriptlogo" />
                <p>JAVASCRIPT</p>
              </div>
              <div className="logo react">
                <img src={react} alt="reactlogo" />
                <p>REACT</p>
              </div>
              <div className="logo bootstrap">
                <img src={bootstrap} alt="bootstraplogo" />
                <p>BOOTSTRAP</p>
              </div>
              <div className="logo git">
                <img src={git} alt="gitlogo" />
                <p>GIT</p>
              </div>
              <div className="logo figma">
                <img src={figma} alt="figmalogo" />
                <p>FIGMA</p>
              </div>
            </div>
          </div>
          <div className="learning">
            <p>LEARNING:</p>
            <div className="learninglist">
              <div className="logo nodejs">
                <img src={nodejs} alt="nodejslogo" />
                <p>NODE JS</p>
              </div>
              <div className="logo expressjs">
                <img src={react} alt="expressjslogo" />
                <p>REACT NATIVE</p>
              </div>
              <div className="logo typescript">
                <img src={typescript} alt="typescriptlogo" />
                <p>TYPESCRIPT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
