import "./section2.css";

const Section2 = () => {
  return (
    <div className="sec2box">
      <h1>
        <span className="abouthead">A</span>bout
        <span className="abouthead"> M</span>e
      </h1>
      <div className="textbox2">
        <p>
          My name is Anurag Singh . I am an Hardworking Computer Science
          Engineer. I Am Persuing B-Tech from Jawaharlal Nehru college of
          technology , Rewa associated with Rajiv gandhi Prodyogiki
          vishwavidyalaya University Bhopal . I am a MERN Stack Web Developer
          and Programmer . I have good Communication skills in Both English and
          Hindi languages . I am Tech enthusiast and a quick learner and problem
          solver.
        </p>

        <div className="edubox">
          <h2 className="eduhead">Education</h2>
          <div className="educontent">
            <div className="educard">
              <h3>High School - 10th</h3>
              <ul>
                <li>
                  <b>Board</b> - State board Madhya Pradesh , Bhopal.
                </li>
                <li>
                  <b>School</b> - Vindhya Academy Higher Secondary School ,
                  churhat.
                </li>
                <li>
                  <b>Percentage</b> - 86% .
                </li>
                <li>
                  <b>Year</b> - 2017 .
                </li>
              </ul>
            </div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="educard">
              <h3>Higher Secondary -12th</h3>
              <ul>
                <li>
                  <b>Board</b>- State board Madhya Pradesh , Bhopal.
                </li>
                <li>
                  <b>School</b> - Vindhya Academy Higher Secondary School ,
                  churhat.
                </li>
                <li>
                  <b>Percentage</b> - 80%.
                </li>
                <li>
                  <b>Year</b> - 2019.
                </li>
              </ul>
            </div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="educard">
              <h3>B-Tech</h3>
              <ul>
                <li>
                  <b>University</b> - RGPV , Bhopal.
                </li>
                <li>
                  <b>College</b> - Jawaharlal nehru college of technology ,
                  Rewa.
                </li>
                <li>
                  <b>CGPA</b> - 8.78.
                </li>
                <li>
                  <b>Year</b> -from 2019 to 2023(expected).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
