import React from "react";
import "./Projects.css";
import college from "../../Assets/clg.png";
import vehicle from "../../Assets/vp.png";
import port from "../../Assets/prt.jpg";
import food from "../../Assets/food.png";
import vault from "../../Assets/work1.jpg";
import paper from '../../Assets/paper.png'

const Projects = () => {
  return (
    <div id="projects" className="my-work">
      <div className="project-head">
        <h1>My Lattest Projects</h1>
      </div>
      <div className="mywork_container">
        <div className="project-1">
          <img className="fodie" src={college} alt="" />
        </div>
        <div className="project-1">
          <img className="filmy" src={port} alt="" />
        </div>
        <div className="project-1">
          <img className="prt" src={vehicle} alt="" />
        </div>
      </div>
      <div className="mywork-container2">
        <div className="project-2">
          <img className="fodd" src={food} alt="" />
        </div>
        <div className="project-2">
          <img className="film" src={vault} alt="" />
        </div>
        <div className="project-2">
          <img className="paperr" src={paper} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
