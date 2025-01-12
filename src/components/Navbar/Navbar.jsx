import React, { useContext } from "react";
import "./navbar.css";
import { useEffect, useState } from "react";
import { FunctionContext } from "../../utils/FunctionProvider";
import menuIcon from "./assets/svg/Group8.svg"
import crossIcon from "./assets/svg/Group.svg"

export default function Navbar() {
  const { t, setLang, i18n } = useContext(FunctionContext);
  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };
  const [isSticky, setIsSticky] = useState(false);
  const [menu,setmenu]=useState(false)
  const scrollScreenTo = (divId) => {
    const div = document.getElementById(divId);
    if (div) {
      div.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const stickyOffset = 65;
      setIsSticky(window.scrollY > stickyOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${menu?"mobileMenu":""} ${isSticky ? "sticky" : ""}`}>
       <div onClick={()=>setmenu(!menu)} className="closeIcon">
        <img src={crossIcon}>

        </img>
      </div>
      <div className="btn  aboutme">
        <button onClick={() => scrollScreenTo("aboutMe")}>
          {t("aboutmebtn")}
        </button>
      </div>
      <div className="btn skills">
        <button onClick={() => scrollScreenTo("skills")}>
          {t("skillsbtn")}
        </button>
      </div>
      <div className="btn portfolio">
        <button onClick={() => scrollScreenTo("portfolio")}>
          {t("portfoliobtn")}
        </button>
      </div>
      <div className="btn contactme">
        <button onClick={() => scrollScreenTo("contactMe")}>
          {t("contactmebtn")}
        </button>
      </div>
      <div className="btn dropdown">
        <select onChange={handleLanguageChange}>
          <option value="en">{t("engoptionbtn")}</option>
          <option value="tn">{t("tamoptionbtn")}</option>
        </select>
      </div>
      <div onClick={()=>setmenu(!menu)} className="menuIcon">
        <img src={menuIcon}>

        </img>
      </div>
    </div>
  );
}
