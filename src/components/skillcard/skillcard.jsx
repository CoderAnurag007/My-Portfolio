import React from "react";
import "./skillcard.css";

const Skillcard = (props) => {
  const { title, imgUrl } = props;
  return (
    <div className="skillcard">
      <div className="skill_logo">
        <img src={imgUrl} alt="" />
      </div>
      <div className="skill_title">{title}</div>
    </div>
  );
};

export default Skillcard;
