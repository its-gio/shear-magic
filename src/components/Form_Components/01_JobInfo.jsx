import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class JobInfo extends Component {
  Back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div className="form-component form">
        <h4 className="form-component--sub-title">Job Info</h4>
        <TextField
          id="fullName"
          label="Full Name"
          placeholder="Enter Full Name"
        />
        <Button onClick={this.Back} variant="contained" color="primary">
          Back
        </Button>
        <Button onClick={this.continue} variant="contained" color="primary">
          Continue
        </Button>
      </div>
    );
  }
}

export default JobInfo;
