import React from "react";
import "./About.css";
import me from "../../Assets/Myphoto.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-section">
        <div className="about-me">
          <img className="me" src={me} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              A Skilled IT professional with a strong background in software
              development, particularly in web and mobile technologies.
              Passionate about learning new technologies and frameworks, with
              hands-on experience in React.js, React Native.
            </p>
            <p>
              {" "}
              Committed to delivering high-quality result and working
              collaboratively in a friendly and dynamic environment. Looking
              forward to adding value through my passion and expertise.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Power BI</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
