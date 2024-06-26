import React from "react";

import Machz from "../../logos/machz.png";
import Text from "../../logos/text utils.png";
import Pokemon from "../../logos/poke.png";
import Dashboard from "../../logos/react dashboard.png";
import Paint from "../../logos/paint.png";
import Ayum from "../../logos/Screenshot (89).png";
import Tourplan from "../../logos/tourplan.png";
import SocialMedia from "../../images/rezzit.png";
import "./project2.css";
const Project2 = () => {
  return (
    <div className="project-container">
      <h1>
        <span className="project-head">P</span>ROJECTS
      </h1>
      <div className="project-cards">
        <div className="project-card">
          <h1>1</h1>
          <img src={Ayum} alt="" />
          <h5>Ayum.in - Health Care App</h5>
          <div className="desc">
            This is an Fully functional Health care Progressive web app built
            using Nextjs , Reactjs and Nodejs . deployed in vercel
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/dwivediom/ayumClient"
              target={"_blank"}
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.ayum.in/"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <h1>2</h1>
          <img src={Tourplan} alt="" />
          <h5 style={{ textAlign: "center" }}>
            Tourplanner AI - Tourplanning website with Chatbot integrated
          </h5>
          <div className="desc">
            This is an Fully functional Health care web app built using Nextjs ,
            Reactjs and Nodejs . deployed in vercel having chatbot integration
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/CoderAnurag007/Tourplannerai-Frontend.git"
              target={"_blank"}
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://tourplannerai.netlify.app/"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <h1>3</h1>
          <img src={SocialMedia} alt="" />
          <h5>Notes Posting</h5>
          <div className="desc">
            This is an fully functional Full stack Notes sharing website where
            user can share his important notes and can do all CRUD operation on
            it
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/CoderAnurag007/Rezzit-frontend"
              target={"_blank"}
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://thoughtshare.netlify.app/"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <h1>4</h1>
          <img src={Machz} alt="" />
          <h5>MachZ Clothing</h5>
          <div className="desc">
            This is an fully functional Full stack E-commerce website built
            using Firebase and ReactJs
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/CoderAnurag007/Machz_Clothing"
              target={"_blank"}
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://calm-cannoli-d6d618.netlify.app/"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <h1>5</h1>
          <img src={Text} alt="" />
          <h5>Text Manipulator</h5>
          <div className="desc">
            This is an text editor website with some features to edit and modify
            text . this is built using react js
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/CoderAnurag007/Scripter"
              target={"_blank"}
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://coderanurag007.github.io/Scripter/"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <h1>6</h1>
          <img src={Paint} alt="" />
          <h5>Online Paint App</h5>
          <div className="desc">
            This is an paint website built using Fabric Js and React Js. using
            this someone can do drwaings
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/CoderAnurag007/Paint-App-Backend"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </div>
        <div className="project-card">
          <h1>7</h1>
          <img src={Pokemon} alt="..." />
          <h5>Pokemon Search Web App</h5>
          <div className="desc">
            This is pokemon search app built using React js and Pokemon Api .
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/CoderAnurag007/Pokemon-Search-app"
              target={"_blank"}
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://curious-pegasus-f25ff2.netlify.app/"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <h1>8</h1>
          <img src={Dashboard} alt="..." />
          <h5>Responsive Dashboard UI</h5>
          <div className="desc">
            This is an UI of an Trading dashboard with graphs and beautiful
            theme.
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/CoderAnurag007/Analytic-Dashboard-using-react-js"
              target={"_blank"}
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://venerable-bavarois-c20bb4.netlify.app/"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="scroll">Scroll &#62;&#62;</div>
    </div>
  );
};

export default Project2;
