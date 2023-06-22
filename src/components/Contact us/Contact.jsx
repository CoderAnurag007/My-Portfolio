import React from "react";
import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [loading, setloading] = useState(false);
  const [sent, setsent] = useState(false);
  const [error, seterror] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    setloading(true);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_8pobz9d",
        "template_egtbran",
        form.current,
        "ds_ou3oEaggMjlkMB"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setloading(false);
          setsent(true);
        },
        (error) => {
          console.log(error.text);
          setsent(true);
          seterror(true);
          setloading(false);
        }
      );
  };
  return (
    <div className="formbox">
      {sent ? (
        error ? (
          <div className="thankyoumsg">
            <h3 className="error">An Error Occured!</h3>
            <p>Please Mail Me - Anuragsinghg999@gmail.com</p>
          </div>
        ) : (
          <div className="thankyoumsg">
            <h3>
              Thankyou for Connecting , I will get back to you as soon as
              possible
            </h3>
            <img src="/celebrate.gif" alt="celebrate" />
          </div>
        )
      ) : (
        <>
          <div className="contact_text">
            {" "}
            <span className="headcapital">F</span>eel{" "}
            <span className="headcapital">F</span>ree{" "}
            <span className="headcapital">T</span>o{" "}
            <span className="headcapital">M</span>essage{" "}
            <span className="headcapital">M</span>e
          </div>
          <form ref={form}>
            <div className="namediv">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="user_name"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="user_email"
              />
            </div>
            <div>
              <textarea
                name="message"
                id=""
                cols="37"
                rows="5"
                placeholder="Enter Your message"
              ></textarea>
            </div>
            <div
              onClick={(e) => sendEmail(e)}
              className="send_btn"
              type="submit"
            >
              {loading ? "Sending..." : "Send >>"}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
