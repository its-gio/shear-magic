import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class ContactInfo extends Component {
  onChange(event) {
    // formatted pretty value
    console.log(event.target.value);

    // raw value
    console.log(event.target.rawValue);
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="form-component form">
        <TextField
          id="fullName"
          label="Full Name"
          placeholder="Enter Full Name"
          value={values.fullName}
          onChange={handleChange("fullName")}
        />
        <Button>Continue</Button>
      </div>
    );
  }
}

export default ContactInfo;
