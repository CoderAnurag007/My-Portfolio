import React from "react";
import "./section1.css";

const Section1 = () => {
  return (
    <>
      <div className="body">
        <div className="text">
          <div className="textwrap">
            <span className="first">H</span>
            <span className="other">ello </span>
            <br />
            <span className="first">I</span>
            <span className="other">'am </span>

            <span className="first">A</span>
            <span className="other">nurag</span>
            <br />
            <span className="occu">I am a</span>
            <br />
            <span className="field">
              <div className="words">
                <span>Computer Science Engineer</span>
                <span>MERN Stack Web Developer</span>
                <span>Programmer</span>
                <span>UI/UX Designer</span>
              </div>
            </span>
          </div>
          <div className="imagesec1"></div>
        </div>
      </div>
      <hr className="sec1part" />
    </>
  );
};
export default Section1;
