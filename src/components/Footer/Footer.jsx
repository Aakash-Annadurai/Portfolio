import React, { useContext } from "react";
import "./footer.css";
import doublearrow from "./assets/doublearrow.svg";
import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";
import { FunctionContext } from "../../utils/FunctionProvider";

export default function Footer() {
  const { t } = useContext(FunctionContext);
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="Footer">
        <div className="backtotop" onClick={backToTop}>
          <img src={doublearrow} alt="arrow icon" />
          <p>{t("backtotopbtn")}</p>
        </div>
        <div className="contacticons">
          <button
            onClick={() =>
              window.open(
                "https://linkedin.com/in/aakash-annadurai-8516b5321",
                "_blank"
              )
            }
          >
            <img src={linkedin} alt="linkedinicon" className="footericon" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.instagram.com/aakxshfr?igsh=MWFlM2lmd3lwdGw5cw==",
                "_blank"
              )
            }
          >
            <img src={instagram} alt="instaicon" className="footericon" />
          </button>
        </div>
        <div className="copyrights">
          <a
            href="https://www.figma.com/design/4HS9ri5oCjc9bpFPNiNOuY/Portfolio---Tomasz-Gajda-(Community)?node-id=7-4&t=ruWZCE3r8fBx1iQa-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{t("copyrights")}</p>
          </a>
          <p>
            {t("developedby")}{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {t("footeremail")}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
