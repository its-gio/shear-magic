import React, { Component } from "react";
import logo from "../imgs/Shear-Magic-Logo.png";

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
      </div>
    );
  }
}

export default Header;
