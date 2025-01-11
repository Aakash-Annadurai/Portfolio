import React, { useContext } from "react";
import { FunctionContext } from "../../utils/FunctionProvider";
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
  const { t } = useContext(FunctionContext);
  return (
    <>
      <div className="Aboutme" id="aboutMe">
        <div className="header">
          <p>{t("aboutmetitle")}</p>
        </div>
        <div className="infoaboutme">
          <p>{t("aboutmeinfo")}</p>
        </div>
        <div className="explore">
          <p>{t("explore")}</p>
        </div>
        <img src={separator} alt="separator" className="separator1" />
        <div className="services">
          <div className="designanddevelopment">
            <div className="design">
              <img src={design} alt="designlogo" />
              <p className="title">{t("designtitle")}</p>
              <p className="info">{t("designinfo")}</p>
            </div>
            <div className="development">
              <img src={development} alt="developmentlogo" />
              <p className="title">{t("developmenttitle")}</p>
              <p className="info">{t("developmentinfo")}</p>
            </div>
          </div>
          <div className="maintenance">
            <img src={maintenance} alt="maintenancelogo" />
            <p className="title">{t("maintenancetitle")}</p>
            <p className="info">{t("maintenanceinfo")}</p>
          </div>
        </div>
        <img src={separator} alt="separator" className="separator2" />
      </div>
      <div className="Skills" id="skills">
        <div className="header">
          <p>{t("skillstitle")}</p>
        </div>
        <div className="skillsused">
          <div className="usingnow">
            <p>{t("skillsusingnow")}:</p>
            <div className="usinglist">
              <div className="logo html">
                <img src={html} alt="htmllogo" />
                <p>{t("html")}</p>
              </div>
              <div className="logo css">
                <img src={css} alt="csslogo" />
                <p>{t("css")}</p>
              </div>
              <div className="logo javascript">
                <img src={javascript} alt="javascriptlogo" />
                <p>{t("javascript")}</p>
              </div>
              <div className="logo react">
                <img src={react} alt="reactlogo" />
                <p>{t("react")}</p>
              </div>
              <div className="logo bootstrap">
                <img src={bootstrap} alt="bootstraplogo" />
                <p>{t("bootstrap")}</p>
              </div>
              <div className="logo git">
                <img src={git} alt="gitlogo" />
                <p>{t("git")}</p>
              </div>
              <div className="logo figma">
                <img src={figma} alt="figmalogo" />
                <p>{t("figma")}</p>
              </div>
            </div>
          </div>
          <div className="learning">
            <p>{t("skillslearningnow")}:</p>
            <div className="learninglist">
              <div className="logo nodejs">
                <img src={nodejs} alt="nodejslogo" />
                <p>{t("nodejs")}</p>
              </div>
              <div className="logo reactnative">
                <img src={react} alt="reactnativelogo" />
                <p>{t("reactnative")}</p>
              </div>
              <div className="logo typescript">
                <img src={typescript} alt="typescriptlogo" />
                <p>{t("typescript")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
