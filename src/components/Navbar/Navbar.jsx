import React from 'react'
import "./navbar.css"
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

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
        <button>About Me</button>
      </div>
      <div className="btn skills">
      <button>Skills</button>
      </div>
      <div className="btn portfolio">
      <button>Portfolio</button>
      </div>
      <div className="btn contactme">
      <button>CONTACT ME</button>
      </div>
    </div>
  )
}
