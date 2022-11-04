import React from "react";
import "./Main.css";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Resume from "./Resume/Resume";
import Social from "./Socials/Social";
import Contact from "./Contact us/Contact";
import Footer from "./Footer/Footer";
import Project2 from "./Projects/Project2";

const Main = () => {
  return (
    <>
      <div className="maindiv">
        <Section1 />
        <Section2 />
        <Section3 />
        {/* <Projects /> */}
        <Project2 />
        <Resume />
        <Social />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default Main;
