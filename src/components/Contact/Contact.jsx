import React from "react";
import "./contact.css";
import separator from './assets/separator.png'

export default function Contact() {
  return (
    <>
      <div className="Contact" id="contactMe">
        <div className="header">
          <p>CONTACT</p>
        </div>
        <div className="contactinfo">
          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>
        </div>
        <img src={separator}alt="separator" />
        <div className="inputfields">
            <input type="text" name="name" placeholder="ENTER YOUR NAME*" className="inputname"/>
            <input type="email" name="email" placeholder="ENTER YOUR EMAIL*" className="inputemail"/>
            <input type="number" name="phone number" placeholder="PHONE NUMBER" className="inputphonenumber"/>
            <input type="text" name="message" placeholder="YOUR MESSAGE*" className="inputmessage"/>
        </div>
        <button className="btn submit">SUBMIT</button>
      </div>
    </>
  );
}
