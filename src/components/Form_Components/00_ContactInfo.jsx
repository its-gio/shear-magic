import React, { Component } from "react";
import MaskedInput from "react-text-mask";
import {
  TextField,
  Button,
  Input,
  InputLabel,
  FormControl
} from "@material-ui/core";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        /\d?/,
        /\d/,
        "(",
        /\d/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
    />
  );
}

class ContactInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange } = this.props;
    const { fullName, phoneNumber, location } = this.props.values;

    return (
      <div className="form-component form">
        <h4 className="form-component--sub-title">Personal Info</h4>
        <TextField
          id="fullName"
          label="Full Name"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={handleChange("fullName")}
        />
        <FormControl>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <Input
            id="phoneNumber"
            value={phoneNumber}
            onChange={handleChange("phoneNumber")}
            inputComponent={TextMaskCustom}
          />
        </FormControl>
        <TextField
          id="location"
          label="Location"
          placeholder="Enter Location"
          value={location}
          onChange={handleChange("location")}
        />
        <div className="form-component--buttons">
          <Button onClick={this.continue} variant="contained" color="primary">
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
