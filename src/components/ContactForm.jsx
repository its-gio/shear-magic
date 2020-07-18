import React, { Component } from "react";
import ContactInfo from "./Form_Components/ContactInfo.jsx";
import JobInfo from "./Form_Components/JobInfo.jsx";

class ContactForm extends Component {
  state = {
    step: 1,
    fullName: "",
    phoneNumber: "",
    location: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, fullName, phoneNumber, location } = this.state;
    const values = { fullName, phoneNumber, location };

    switch (step) {
      case 1:
        return (
          <div className="component-container">
            <h2>Contact Form</h2>
            <ContactInfo
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div className="component-container">
            <h2>Contact Form</h2>
            <JobInfo
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </div>
        );
      default:
        return (
          <div className="component-container">
            <h2>Contact Form</h2>
            <ContactInfo
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              values={values}
            />
          </div>
        );
    }
  }
}

export default ContactForm;
