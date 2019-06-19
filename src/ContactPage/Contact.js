import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-section__title">Contact Me</h1>
      <form className="contact-section__form">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="message" placeholder="Message" />
        <button className="contact-section__submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
