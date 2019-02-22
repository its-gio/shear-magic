import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import "./index.scss";
import Header from "./components/00_Header.jsx";
import Hero from "./components/01_Hero.jsx";
import About from "./components/02_About.jsx";
import Shearing from "./components/03_Shearing.jsx";
import Pricing from "./components/04_Pricing.jsx";
import ContactForm from "./components/05_ContactForm.jsx";

class App extends Component {
  handleScroll = input => {
    const options = { offset: 0, align: "top", duration: 1000 };

    scrollToComponent(this[input], options);
  };

  render() {
    return (
      <React.Fragment>
        <Header scroll={this.handleScroll} />
        <Hero scroll={this.handleScroll} />
        <About ref={section => (this.About = section)} />
        <div className="divider shearing-div" />
        <Shearing ref={section => (this.Shearing = section)} />
        <div className="divider pricing-div" />
        <Pricing ref={section => (this.Pricing = section)} />

        <ContactForm ref={section => (this.Contact = section)} />
      </React.Fragment>
    );
  }
}

export default App;
