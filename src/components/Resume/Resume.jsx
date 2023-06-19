import React from "react";
import "./resume.css";
import Emoji from "../../images/Smiling Face with Halo.png";
import ResumePdf from "../../images/updated.pdf";

const Resume = () => {
  return (
    <div className="resumebox">
      <h1>
        <span className="headcapital">H</span>ere's {"    "}
        <span className="headcapital">M</span>y {"    "}
        <span className="headcapital">R</span>esume
      </h1>

      <div className="downloadcv">
        <span className="download_btn">
          <a href={ResumePdf} download>
            Download Resume
          </a>
        </span>
      </div>
    </div>
  );
};

export default Resume;
