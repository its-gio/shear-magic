import React, { Component } from "react";
import "./index.scss";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Shearing from "./components/Shearing.jsx";
import Pricing from "./components/Pricing.jsx";
// import ContactForm from "./components/ContactForm.jsx";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <About />
        <div className="divider shearing-div" />
        <Shearing />
        <div className="divider pricing-div" />
        <Pricing />
      </>
    );
  }
}

export default App;
