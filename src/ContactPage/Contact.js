import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length < 5 ? "Please enter your full name!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "subject":
        errors.subject = value.length < 3 ? "Please enter a subject!" : "";
        break;
      case "message":
        errors.message = value.length < 5 ? "Please enter a message" : "";
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  canBeSubmitted = () => {
    const filledIn =
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.subject.length > 0 &&
      this.state.message.length > 0;
    const { name, email, subject, message } = this.state.errors;
    const hasErrors =
      name.length > 0 ||
      email.length > 0 ||
      subject.length > 0 ||
      message.length > 0;
    return filledIn && !hasErrors;
  };

  handleSubmit = event => {
    alert("submitted");
    event.preventDefault();
  };

  render() {
    let canBeSubmitted = this.canBeSubmitted();
    return (
      <div className="contact-section">
        <div className="contact-section__border">
          <h1 className="contact-section__title">Get in touch!</h1>
          <form
            className="contact-section__form"
            method="post"
            action="mailto:hello@anitachan.dev"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              maxLength="20"
              onChange={this.handleChange}
            />
            <div>{this.state.errors.name}</div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              maxLength="20"
              onChange={this.handleChange}
            />
            <div>{this.state.errors.email}</div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={this.handleChange}
            />
            <div>{this.state.errors.subject}</div>
            <textarea
              className="contact-section__message"
              placeholder="Message"
              name="message"
              onChange={this.handleChange}
            />
            <div>{this.state.errors.message}</div>
            <input
              disabled={!canBeSubmitted}
              type="submit"
              className="contact-section__submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
