import { React, useEffect, useRef } from "react";
import "./section1.css";

const Section1 = () => {
  const parentRef = useRef(null);
  const divRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const parentDiv = parentRef.current;
    const divs = divRefs.map((ref) => ref.current);

    const getRandomPosition = () => {
      const parentRect = parentDiv.getBoundingClientRect();
      const radius = Math.min(parentRect.width, parentRect.height) / 2 - 50;

      const angle = Math.random() * Math.PI * 2;
      const x = parentRect.width / 2 + Math.cos(angle) * radius;
      const y = parentRect.height / 2 + Math.sin(angle) * radius;

      return { x, y };
    };

    const animateDivs = () => {
      divs.forEach((div) => {
        const position = getRandomPosition();
        div.style.transform = `translate(${position.x}px, ${position.y}px)`;
      });

      setTimeout(animateDivs, 2000); // Repeat the animation after 2 seconds
    };

    animateDivs();
  }, []);

  return (
    <>
      <div className="body">
        {/* <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div> */}

        <div className="parent" ref={parentRef}>
          <div className="ball1 circle" ref={divRefs[0]}></div>
          <div className="ball2 circle" ref={divRefs[1]}></div>
          <div className="ball3 circle" ref={divRefs[2]}></div>
        </div>

        <div className="text">
          <div className="textwrap">
            <span className="first">Hello</span>

            <br />

            <span className="other">I'am </span>

            <span className="other">Anurag</span>
            <br />
            <span className="occu">I am a</span>
            <br />
            <span className="field">
              <div className="words">
                <span>Computer Science Engineer</span>
                <span>Full Stack Web Developer</span>
                <span>Programmer</span>
                <span>UI/UX Designer</span>
              </div>
            </span>
          </div>
          <div className="imagesec1"></div>
        </div>
      </div>
      {/* <hr className="sec1part" /> */}
    </>
  );
};
export default Section1;
