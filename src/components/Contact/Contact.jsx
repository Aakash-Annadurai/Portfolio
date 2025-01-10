import React from "react";
import "./contact.css";
import separator from "./assets/separator.png";
import Swal from "sweetalert2";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

    formData.append("access_key", ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Form sent successfully!",
        icon: "success",
        confirmButtonColor: "#1a1a1a",
      });
      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!, Try again.",
        confirmButtonColor: "#1a1a1a",
      });
    }
  };

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
        <form onSubmit={onSubmit}>
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
          <button className="btn submit" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
