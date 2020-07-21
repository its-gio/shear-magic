import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
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
        <nav className="navbar">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button>About</Button>
          </Link>
          <Link
            activeClass="active"
            to="shearing"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button>Shearing</Button>
          </Link>
          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button>Pricing</Button>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button>Contact</Button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
