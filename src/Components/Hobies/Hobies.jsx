import React from "react";
import "./Hobies.css";
import treck from "../../Assets/treckk.jpg";
import topic from "../../Assets/things.jpg";
import volley from "../../Assets/volley.jpg";

const Hobies = () => {
  return (
    <div id="hobbie" className="hobies">
      <div className="hb-head">
        <h1>Hobies</h1>
      </div>
      <div className="Hobies">
        <div className="Hobies-A">
          <div className="hb">Tracking </div>
          <div className="ttext">
            Trekking allows you to experience the beauty of the natural world
            firsthand. Many trekkers develop a deep appreciation for the
            environment and often engage in eco-friendly practices.
          </div>
          <div className="">
            <img className="topic" src={treck} alt="" />
          </div>
        </div>
        <div className="Hobies-B">
          <div className="hb">Learning new things.</div>
          <div className="ttext">
            The tech field is always evolving with new programming languages,
            frameworks, and tools. As a hobby, coding offers endless
            opportunities to learn and stay up-to-date with the latest trends.
          </div>
          <div className="">
            <img className="topic" src={topic} alt="" />
          </div>
        </div>
        <div className="Hobies-C">
          <div className="hb">Playing Volleyball</div>
          <div className="ttext">
            Volleyball involves an physical activities like jumping,
            and diving,which build cardiovascular endurance, strength, and
            agility. It improves hand-eye coordination, reflexes, and motor
            skills.
          </div>
          <div className="">
            <img className="topic" src={volley} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobies;
