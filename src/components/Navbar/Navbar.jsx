import React from "react";
import "./navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

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
    <div className={`Navbar ${isSticky ? "sticky" : ""}`}>
      <div className="btn aboutme">
        <button onClick={() => scrollScreenTo("aboutMe")}>About Me</button>
      </div>
      <div className="btn skills">
        <button onClick={() => scrollScreenTo("skills")}>Skills</button>
      </div>
      <div className="btn portfolio">
        <button onClick={() => scrollScreenTo("portfolio")}>Portfolio</button>
      </div>
      <div className="btn contactme">
        <button onClick={() => scrollScreenTo("contactMe")}>CONTACT ME</button>
      </div>
    </div>
  );
}
