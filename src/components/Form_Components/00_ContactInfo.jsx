import React, { Component } from "react";
import MaskedInput from "react-text-mask";
import { TextField, Button, Input } from "@material-ui/core";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
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
      showMask
    />
  );
}

class ContactInfo extends Component {
  render() {
    const { handleChange } = this.props;
    const { fullName, phoneNumber } = this.props.values;

    return (
      <div className="form-component form">
        <TextField
          id="fullName"
          label="Full Name"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={handleChange("fullName")}
        />
        <Input
          id="phoneNumber"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={handleChange("phoneNumber")}
          inputComponent={TextMaskCustom}
        />
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </div>
    );
  }
}

export default ContactInfo;
