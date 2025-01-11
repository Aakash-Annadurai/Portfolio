import React, { useContext } from "react";
import "./contact.css";
import separator from "./assets/separator.png";
import { FunctionContext } from "../../utils/FunctionProvider";

export default function Contact() {
  const { t } = useContext(FunctionContext);
  return (
    <>
      <div className="Contact" id="contactMe">
        <div className="header">
          <p>{t("contacttitle")}</p>
        </div>
        <div className="contactinfo">
          <p>{t("contactinfo")}</p>
        </div>
        <img src={separator} alt="separator" />
        <form>
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
              required
            />
            <textarea
              type="text"
              name="message"
              placeholder={t("inputmessage")}
              className="inputmessage"
              required
            />
          </div>
          <button className="btn submit">{t("submitbtn")}</button>
        </form>
      </div>
    </>
  );
}
