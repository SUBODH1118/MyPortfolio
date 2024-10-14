import React from "react";
import mail from "../../Assets/maail.jpg";
import call from "../../Assets/call.jpg";
import location from "../../Assets/location.jpg";
import "./Form.css";

const Form = () => {
  return (
    <div id="form" className="touch">
      <h1 className="head">Get In Touch</h1>
      <div className="contact-details">
        <div className="contact-detail">
          <img className="imgg" src={mail} alt="" />
          <p>subodhmanjrekar1@gmail.com</p>
        </div>
        <div className="contact-detail">
          <img className="imgg" src={call} alt="" />
          <p>+91 8856902744</p>
        </div>
        <div className="contact-detail">
          <img className="imgg" src={location} alt="" />
          <p>Mumbai, India</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
