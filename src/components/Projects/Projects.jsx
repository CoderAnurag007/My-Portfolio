import React from "react";
import "./project.scss";
import Machz from "../../logos/machz.png";
import Text from "../../logos/text utils.png";
import Pokemon from "../../logos/poke.png";
import Dashboard from "../../logos/react dashboard.png";
// import HomeDecor from "../../logos/Homedecor.png";
const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-head-container">
        <h1>
          <span className="project-head">P</span>ROJECTS
        </h1>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide imageslider "
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Machz} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block project-detail">
              <h5>Full Stack React Web App - MachZ Clothing</h5>
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
          </div>
          <div className="carousel-item">
            <img src={Text} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block project-detail">
              <h5>React Web App - Text Editor </h5>
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
          </div>
          <div className="carousel-item">
            <img src={Pokemon} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block project-detail">
              <h5>Pokemon Search App - React App Using Pokemon Api</h5>
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
          </div>
          <div className="carousel-item">
            <img src={Dashboard} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block project-detail">
              <h5>Frontend - Responsive React Ui Dashboard</h5>
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
        </div>
        <button
          className="carousel-control-prev changer"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next changer"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
