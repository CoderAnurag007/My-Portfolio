import React from "react";
import "./social.css";
import Linkedin from "../../logos/linkedin-logo-png-2026.png";
import Insta from "../../logos/instalogo.png";
import Codechef from "../../logos/codechef.png";
import Hacker from "../../logos/hackerrank.png";

const Social = () => {
  return (
    <div className="socialbox">
      <div className="rightsocial">
        <h1 className="headcolor">
          <span className="headcapital">O</span>nline
          <span className="headcapital"> P</span>resence /{" "}
          <span className="headcapital"> S</span>ocials
        </h1>
      </div>
      <div className="leftsocial">
        <div className="socialcard">
          <img src={Linkedin} alt="" />
          <a
            href="https://www.linkedin.com/in/anurag-singh-97009b1a0/"
            target={"_blank"}
          >
            Linkedin
          </a>
        </div>
        <div className="socialcard">
          <img src={Insta} alt="" />
          <a
            href="https://www.instagram.com/anurag_or_ayush/"
            target={"_blank"}
          >
            Instagram
          </a>
        </div>
        <div className="socialcard">
          <img src={Codechef} alt="" />
          <a href="https://www.codechef.com/users/zeptox" target={"_blank"}>
            CodeChef
          </a>
        </div>
        <div className="socialcard">
          <img src={Hacker} alt="" />
          <a href="https://www.hackerrank.com/Anuragsingh99" target={"_blank"}>
            Hacker Rank
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
