import React from "react";
import "./contact.css";
import separator from "./assets/separator.png";

export default function Contact() {
  return (
    <>
      <div className="Contact" id="contactMe">
        <div className="header">
          <p>CONTACT</p>
        </div>
        <div className="contactinfo">
          <p>"Let's Connect and Create Something Amazing Together!"</p>
        </div>
        <img src={separator} alt="separator" />
        <form>
          <div className="inputfields">
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              className="inputname"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              className="inputemail"
              required
            />
            <input
              type="number"
              name="phone number"
              placeholder="PHONE NUMBER"
              className="inputphonenumber"
              required
            />
            <textarea
              type="text"
              name="message"
              placeholder="YOUR MESSAGE*"
              className="inputmessage"
              required
            />
          </div>
          <button className="btn submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
}
