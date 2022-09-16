import Skillcard from "../skillcard/skillcard";
import "./section3.css";
import { Skill } from "../../skill";

const Section3 = () => {
  return (
    <>
      <div className="section3-container">
        <h1>
          <span className="skillhead">S</span>kills /{" "}
          <span className="skillhead">T</span>echnology
        </h1>

        <div className="skills-container">
          {Skill.map((skill) => {
            return (
              <Skillcard
                title={skill.name}
                imgUrl={skill.img}
                key={skill.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section3;
