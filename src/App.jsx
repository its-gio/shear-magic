import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import "./index.scss";
import Header from "./components/00_Header.jsx";
import Hero from "./components/01_Hero.jsx";
import About from "./components/02_About.jsx";
import Shearing from "./components/03_Shearing.jsx";
import Pricing from "./components/04_Pricing.jsx";

class App extends Component {
  state = {};

  handleScroll = () => {
    scrollToComponent(this.About, { offset: 0, align: "top", duration: 1500 });
  };

  render() {
    return (
      <React.Fragment>
        <Header scroll={this.handleScroll} />
        <Hero />
        <About
          ref={section => {
            this.About = section;
          }}
        />
        <div className="divider shearing-div" />
        <Shearing />
        <div className="divider pricing-div" />
        <Pricing />
      </React.Fragment>
    );
  }
}

export default App;
