import React from "react";
import "./Contact.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        fullName: "",
        _replyto: "",
        subject: "",
        message: ""
      },
      errors: {
        fullName: "",
        _replyto: "",
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
      case "fullName":
        errors.fullName = value.length < 5 ? "Please enter your full name" : "";
        break;
      case "_replyto":
        errors._replyto = validEmailRegex.test(value)
          ? ""
          : "Email is not valid";
        break;
      case "subject":
        errors.subject = value.length < 3 ? "Please enter a subject" : "";
        break;
      case "message":
        errors.message = value.length < 5 ? "Please enter a message" : "";
      default:
        break;
    }
    let form = { ...this.state.form };
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  };

  formCanBeSubmitted = () => {
    const errors = Object.values(this.state.errors);
    const form = Object.values(this.state.form);

    function isFilledIn(element) {
      return element.length > 0;
    }

    function noErrors(element) {
      return element === "";
    }

    let filledIn = form.every(isFilledIn);
    let hasNoErrors = errors.every(noErrors);

    return filledIn & hasNoErrors;
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const formCanBeSubmitted = this.formCanBeSubmitted();
    return (
      <div className="contact-section">
        <div className="contact-section__border">
          <h1 className="contact-section__title">Get in touch!</h1>
          <form
            action="https://formspree.io/hello@anitachan.dev"
            method="POST"
            className="contact-section__form"
          >
            <input
              className="contact-section_field"
              type="text"
              name="fullName"
              placeholder="Name"
              maxLength="20"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <div className="contact-section_field_error">
              {this.state.errors.fullName}
            </div>
            <input
              className="contact-section_field"
              type="email"
              name="_replyto"
              placeholder="Email"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <div className="contact-section_field_error">
              {this.state.errors._replyto}
            </div>
            <input
              className="contact-section_field"
              type="text"
              name="subject"
              placeholder="Subject"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <div className="contact-section_field_error">
              {this.state.errors.subject}
            </div>
            <textarea
              className="contact-section_field"
              placeholder="Message"
              name="message"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <div className="contact-section_field_error">
              {this.state.errors.message}
            </div>
            <input
              type="submit"
              value="Send"
              disabled={!formCanBeSubmitted}
              className="contact-section__submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
