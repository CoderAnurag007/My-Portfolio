import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="formbox">
        <div className="contact_text">Feel free to Message me</div>
        <form action="">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <textarea
            name="message"
            id=""
            cols="37"
            rows="5"
            placeholder="Enter Your message"
          ></textarea>
          <button className="send_btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
