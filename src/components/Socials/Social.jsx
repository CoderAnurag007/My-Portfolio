import React from "react";
import "./social.css";
import Linkedin from "../../logos/linkedin-logo-png-2026.png";
import Insta from "../../logos/instalogo.png";
import Codechef from "../../logos/codechef.png";
import Hacker from "../../logos/hackerrank.png";
import Github from "../../logos/github.png";

const Social = () => {
  return (
    <div className="socialbox">
      <h1 className="headcolor">Online Presence / Socials</h1>

      <div className="leftsocial">
        <div className="socialcard">
          <img src={Linkedin} alt="" />
          <a
            href="https://www.linkedin.com/in/anurag-singh-97009b1a0/"
            target={"_blank"}
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className="socialcard">
          <img src={Insta} alt="" />
          <a
            href="https://www.instagram.com/anurag_or_ayush/"
            target={"_blank"}
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="socialcard">
          <img src={Codechef} alt="" />
          <a
            href="https://www.codechef.com/users/zeptox"
            target={"_blank"}
            rel="noreferrer"
          >
            CodeChef
          </a>
        </div>
        <div className="socialcard">
          <img src={Hacker} alt="" />
          <a
            href="https://www.hackerrank.com/Anuragsingh99"
            target={"_blank"}
            rel="noreferrer"
          >
            Hacker Rank
          </a>
        </div>
        <div className="socialcard">
          <img src={Github} alt="" />
          <a
            href="https://github.com/CoderAnurag007"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
