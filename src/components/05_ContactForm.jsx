import React, { Component } from "react";
import ContactInfo from "./Form_Components/01_ContactInfo.jsx";

class ContactForm extends Component {
  state = {
    step: 1,
    fullName: ""
  };

  nextStep = () => {
    const step = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const step = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, fullName } = this.state;
    const values = { fullName };

    switch (step) {
      case 1:
        return (
          <ContactInfo
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
          />
        );
      default:
        return (
          <ContactInfo
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            values={values}
          />
        );
    }
  }
}

export default ContactForm;
