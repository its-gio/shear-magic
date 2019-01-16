import React, { Component } from "react";
import img from "../imgs/the-man.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2 className="about--title">About The Shearer</h2>
        <div className="about--content">
          <div className="about--content__img-container">
            <img
              className="about--content__img"
              src={img}
              alt="The Magic Man"
            />
          </div>
          <p className="about--content__text">
            Sergio Balcorta has worked with alpacas since 2007 at Derwydd
            Alpacas. He worked his way from cleaning alpaca manure to ranch and
            animal are. In 2013 a well known shearer Steve Murray in Northern
            California taught Sergio how to shear alpacas. As result Sergio has
            left the farm to attend Portland Community College in Portland
            Oregon. Sergio will not be enrolled in spring term and intends to
            shear animals in that time. Starting in California and ending his
            shearing season in Oregon, back in time for summer school to start.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
