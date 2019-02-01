import React, { Component } from "react";
import "./index.scss";
import Header from "./components/00_Header.jsx";
import Hero from "./components/01_Hero.jsx";
import About from "./components/02_About.jsx";
import Shearing from "./components/03_Shearing.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
        <About />
        <div className="divider shearing-div" />
        <Shearing />
        <div className="divider pricing-div" />
      </React.Fragment>
    );
  }
}

export default App;
