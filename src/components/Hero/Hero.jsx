import React, { useContext } from "react";
import { FunctionContext } from "../../utils/FunctionProvider";
import Navbar from "../Navbar/Navbar";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import seperator from "./assets/separator.png";
import "./hero.css";

export default function Hero() {
  const { t } = useContext(FunctionContext);
  return (
    <div className="Hero">
      <Navbar />
      <div className="TitleIntro">
        <p className="intro">{t("greetings")}</p>
        <p className="name">{t("name")}</p>
        <p className="role">{t("role")}</p>
      </div>
      <div className="mobileview">
        <p className="mobileviewintro">{t("mobileviewintro")}</p>
        <p className="mobileviewrole">{t("mobileviewrole")}</p>
        <img
          src={seperator}
          alt="divider icon"
          className="separatormobileview"
        />
      </div>
      <div className="iconbtn">
        <button
          onClick={() =>
            window.open("https://github.com/Aakash-Annadurai", "_blank")
          }
        >
          <img src={github} className="githubicon" alt="github" />
        </button>
        <button
          onClick={() =>
            window.open(
              "https://linkedin.com/in/aakash-annadurai-8516b5321",
              "_blank"
            )
          }
        >
          <img src={linkedin} className="linkedinicon" alt="linkedin" />
        </button>
      </div>
      <div className="HeroFooter">
        <div className="Objective">
          <p>{t("objectivetitle")}</p>
        </div>
        <div className="ObjectiveInfo">
          <p>{t("objectiveinfo")}</p>
        </div>
        <div className="ReadMore">
          <p>{t("readmore")}</p>
        </div>
      </div>
    </div>
  );
}
