import React from "react";
import "./resume.css";
import ResumePdf from "../../images/newresume.pdf";

const Resume = () => {
  return (
    <div className="resumebox">
      <h1>
        Here's {"    "}
        My {"    "}
        Resume
      </h1>

      <div className="downloadcv">
        <span className="download_btn">
          <a href={ResumePdf} download>
            Download Resume{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Resume;
