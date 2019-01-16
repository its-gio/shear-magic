import React, { Component } from "react";
import "./index.scss";
import Header from "./components/00_Header.jsx";
import Hero from "./components/01_Hero.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />
      </React.Fragment>
    );
  }
}

export default App;
