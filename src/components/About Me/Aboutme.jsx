import React from "react";
import "./aboutme.css";
import separator from "./assets/separator.png";
import design from "./assets/design.png";
import development from "./assets/development.png";
import maintenance from "./assets/maintenance.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import bootstrap from "./assets/bootstrap.png";
import javascript from "./assets/javascript.png";
import react from "./assets/react.png"
import git from "./assets/git.png"
import figma from "./assets/figma.png"
import nodejs from "./assets/nodejs.png"
import expressjs from "./assets/expressjs.png"
import typescript from "./assets/typescript.png"

export default function Aboutme() {
  return (
    <>
    <div className="Aboutme" id="aboutMe">
      <div className="header">
        <p>ABOUT ME</p>
      </div>
      <div className="infoaboutme">
        <p>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
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
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="development">
            <img src={development} alt="developmentlogo" />
            <p className="title">DEVELOPMENT</p>
            <p className="info">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
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
                        <img src={expressjs} alt="expressjslogo" />
                        <p>EXPRESS JS</p>
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
