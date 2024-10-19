import React from "react";
import "./Contact.css";

const Contact = () => {
  function sucessful(){
    alert('Sucessful')
  }
  return (
    <div id="contact" className="container">
        <div className="header">
            <h1>Contact Me</h1>
        </div>
      <form className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your Name" name="name" />
        <label htmlFor="">Email Id</label>
        <input type="text" placeholder="Enter your Email Id" name="email" />
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your Name" />
        <label htmlFor="">Write message</label>
        <textarea
          name="message"
          rows="8"
          placeholder="Enter your message"
        ></textarea>
        <button className="contact-submit">Submit</button>
        <script>
          
        </script>
        
      </form>
    </div>
  );
};

export default Contact;
