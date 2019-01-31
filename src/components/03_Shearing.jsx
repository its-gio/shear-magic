import React, { Component } from "react";
import checklist from "../imgs/shear-day-checklist.jpg";
import parts from "../imgs/shearing-parts.png";

class Shearing extends Component {
  render() {
    return (
      <div className="shearing">
        <div className="shearing--top">
          <h2 className="shearing--top__title">
            Shearing Day Checklist (Alpaca):
          </h2>
          <div className="shearing--top__content-container">
            <div className="shearing--top__img-container">
              <img
                src={checklist}
                alt="Shear Day Checklist"
                className="shearing--top__img"
              />
            </div>
            <ul className="shearing--top__list">
              <li>Electricity within 100ft</li>
              <li>A level shaded area 15ft X 15 ft</li>
              <li>Tarp minimum size 10ft X 10ft</li>
              <li>
                Two points to tie ropes at opposite ends of the level shearing
                area.
              </li>
              <li>Bags to collect fleece</li>
              <li>Animals in a small catch area when the shearer arrives.</li>
              <li>All animals must be dry</li>
              <li>
                Two people to help, one to hold heads, second to collect fleece.
              </li>
              <li>
                Alpaca/llama halters and lead ropes on the animals​ (goat/sheep
                halters don&apos;t work well)
              </li>
            </ul>
          </div>
          <blockquote className="shearing--top__blockquote">
            <p>Note:</p>
            <p>
              If these needs can not be met please call/email and discuss with
              Sergio any complications. He can be flexible and work with the
              needs of clients.
            </p>
          </blockquote>
        </div>
        <hr />
        <div className="shearing--middle">
          <h3 className="shearing--middle__title">Shearing Alpacas:</h3>
          <div className="shearing--middle__content-container">
            <div className="shearing--middle__content">
              <p>
                There is no international standard on how to remove a fleece
                from an alpaca. Therefore the diagram to the right best
                describes how Sergio will remove the fleece. Fleece will be
                removed in the order below.
              </p>
              <ol>
                <li>Prime blanket also called (firsts)</li>
                <li>Thirds on the belly (usually garbage)</li>
                <li>Seconds on the rump</li>
                <li>Seconds on the neck/shoulder</li>
                <li>Thirds on the legs and overall touching up</li>
              </ol>
              <p>Then the animal is rolled over and we start over.</p>
              <p>
                Please keep in mind alpacas can vary wildly from where and how
                much Prime/ Seconds is viable from any one animal.
              </p>
            </div>
            <div className="shearing--middle__img-container">
              <img
                src={parts}
                alt="Alpaca shearing diagram"
                className="shearing--middle__img"
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Shearing;
