import React from 'react'
import './footer.css'
import doublearrow from './assets/doublearrow.png'
import linkedin from './assets/linkedin.png'
import instagram from './assets/instagram.png'

export default function Footer() {
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
          <p>BACK TO TOP</p>
        </div>
        <div className="contacticons">
          <button onClick={() => window.open("www.linkedin.com/in/aakash-annadurai-8516b5321", "_blank")}><img src={linkedin} alt="linkedinicon" /></button>
          <button onClick={() => window.open("www.linkedin.com/in/aakash-annadurai-8516b5321", "_blank")}><img src={instagram} alt="instaicon" /></button>        </div>
        <div className="copyrights">
          <p>@2020 Tomasz Gajda All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}
