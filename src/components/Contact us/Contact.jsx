import React from "react";
import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [loading, setloading] = useState(false);
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact_container">
      <div className="formbox">
        <div className="contact_text">Feel free to Message me</div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Enter Your Name" name="user_name" />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="user_email"
          />
          <textarea
            name="message"
            id=""
            cols="37"
            rows="5"
            placeholder="Enter Your message"
          ></textarea>
          <button className="send_btn" type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
