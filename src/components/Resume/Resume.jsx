import React from "react";
import "./resume.css";
import Emoji from "../../images/Smiling Face with Halo.png";
import ResumePdf from "../../images/updated.pdf";

const Resume = () => {
  return (
    <div className="resumebox">
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="downloadcv">
        <span className="download_btn">
          <a href={ResumePdf} download>
            Download Resume
          </a>
          <b>&#8595;</b>
        </span>
      </div>
      <div className="rightside_cv">
        <h3>
          <span className="headcapital">H</span>ere is <br />{" "}
          <span className="headcapital">M</span>y{" "}
          <span className="headcapital">R</span>esume
        </h3>
        <img src={Emoji} alt="" />
      </div>
    </div>
  );
};

export default Resume;
