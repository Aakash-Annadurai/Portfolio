import React, { useContext } from "react";
import "./contact.css";
import separator from "./assets/separator.png";
import Swal from "sweetalert2";
import { FunctionContext } from "../../utils/FunctionProvider";

export default function Contact() {
  const { t } = useContext(FunctionContext);
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
          <p>{t("contacttitle")}</p>
        </div>
        <div className="contactinfo">
          <p>{t("contactinfo")}</p>
        </div>
        <img src={separator} alt="separator" c className="contactseparator" />
        <form onSubmit={onSubmit}>
          <div className="inputfields">
            <input
              type="text"
              name="name"
              placeholder={t("inputname")}
              className="inputname"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("inputemail")}
              className="inputemail"
              required
            />
            <input
              type="number"
              name="phone number"
              placeholder={t("inputnumber")}
              className="inputphonenumber"
            />
            <textarea
              type="text"
              name="message"
              placeholder={t("inputmessage")}
              className="inputmessage"
              required
            />
          </div>
          <button className="btn submit" type="submit">
            {t("submitbtn")}
          </button>
        </form>
      </div>
    </>
  );
}
