import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class JobInfo extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
        <div className="form-component--buttons">
          <Button onClick={this.back} variant="contained" color="secondary">
            Back
          </Button>
          <Button onClick={this.continue} variant="contained" color="primary">
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

export default JobInfo;
