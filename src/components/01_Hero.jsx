import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero--content">
          <h1 className="hero--content__headline">
            Alpaca, Llama, &amp; Sheep Shearing Services
          </h1>
          <p className="hero--content__claimer">Shearing since 2013</p>
          <button className="hero--content__contact">
            Make An Appointment
          </button>
        </div>
      </div>
    );
  }
}

export default Hero;
