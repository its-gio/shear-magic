import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import logo from "../imgs/shear-magic-logo.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo-container--img"
            src={logo}
            alt="Shear Magic Logo"
          />
        </div>
        <nav className="navbar">
          <Button onClick={() => this.props.scroll("About")}>About</Button>
          <Button onClick={() => this.props.scroll("Shearing")}>
            Shearing
          </Button>
          <Button onClick={() => this.props.scroll("Pricing")}>Pricing</Button>
          <Button onClick={() => this.props.scroll("Contact")}>Contact</Button>
        </nav>
      </div>
    );
  }
}

export default Header;
