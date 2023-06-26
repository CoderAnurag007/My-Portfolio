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
          Engineer. I have done B-Tech from Jawaharlal Nehru college of
          technology , Rewa associated with Rajiv gandhi Prodyogiki
          vishwavidyalaya University Bhopal with overall CGPA of 8.71 . I am a
          MERN Stack Web Developer and Programmer . I have good Communication
          skills in Both English and Hindi languages . I am Tech enthusiast and
          a quick learner and problem solver. Now in order to kickstart my
          Professional career and grow. I am actively looking for Full time Job
          Opportunities .
        </p>

        {/* <div className="edubox">
          <h2 className="eduhead">Education</h2>
          <div className="educontent">
            <div className="educard">
              <h3>High School - 10th</h3>
              <ul>
                <div>
                  <span>Board</span> - State board Madhya Pradesh , Bhopal.
                </div>
                <div>
                  <span>School</span> - Vindhya Academy Higher Secondary School ,
                  churhat.
                </div>
                <div>
                  <span>Percentage</span> - 86% .
                </div>
                <div>
                  <span>Year</span> - 2017 .
                </div>
              </ul>
            </div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="educard">
              <h3>Higher Secondary -12th</h3>
              <ul>
                <div>
                  <span>Board</span>- State board Madhya Pradesh , Bhopal.
                </div>
                <div>
                  <span>School</span> - Vindhya Academy Higher Secondary School ,
                  churhat.
                </div>
                <div>
                  <span>Percentage</span> - 80%.
                </div>
                <div>
                  <span>Year</span> - 2019.
                </div>
              </ul>
            </div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="educard">
              <h3>B-Tech</h3>
              <ul>
                <div>
                  <span>University</span> - RGPV , Bhopal.
                </div>
                <div>
                  <span>College</span> - Jawaharlal nehru college of technology ,
                  Rewa.
                </div>
                <div>
                  <span>CGPA</span> - 8.78.
                </div>
                <div>
                  <span>Year</span> -from 2019 to 2023(expected).
                </div>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="edubox">
          <h2 className="eduhead">Education</h2>
          <div className="cardsshell">
            <div className="educard">
              <div className="eduh2">High School - 10th</div>
              <div className="detailshell">
                <div>
                  <span>Board</span> - State board Madhya Pradesh , Bhopal.
                </div>
                <div>
                  <span>School</span> - Vindhya Academy Higher Secondary School
                  , churhat.
                </div>
                <div>
                  <span>Percentage</span> - 86% .
                </div>
                <div>
                  <span>Year</span> - 2017 .
                </div>
              </div>
            </div>
            <div className="educard">
              <div className="eduh2">Higher Secondary -12th</div>
              <div className="detailshell">
                <div>
                  <span>Board</span>- State board Madhya Pradesh , Bhopal.
                </div>
                <div>
                  <span>School</span> - Vindhya Academy Higher Secondary School
                  , churhat.
                </div>
                <div>
                  <span>Percentage</span> - 80%.
                </div>
                <div>
                  <span>Year</span> - 2019.
                </div>
              </div>
            </div>
            <div className="educard">
              <div className="eduh2">Graduation - B-Tech</div>
              <div className="detailshell">
                <div>
                  <span>University</span> - RGPV , Bhopal.
                </div>
                <div>
                  <span>College</span> - Jawaharlal nehru college of technology
                  , Rewa.
                </div>
                <div>
                  <span>Overall Score</span> - 8.7 CGPA
                </div>
                <div>
                  <span>Year</span> -from 2019 to 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
