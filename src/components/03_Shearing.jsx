import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import checklist from "../imgs/shear-day-checklist.jpg";
import parts from "../imgs/shearing-parts.png";

class Shearing extends Component {
  render() {
    return (
      <div className="shearing component-container">
        <div className="shearing--top">
          <h2 className="shearing--top__title">
            Shearing Day Checklist (Alpaca):
          </h2>
          <div className="shearing--top__content-container break">
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
            <div className="shearing--top__img-container">
              <img
                src={checklist}
                alt="Shear Day Checklist"
                className="shearing--top__img"
              />
            </div>
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
        <Divider variant="middle" />
        <div className="shearing--middle">
          <h3 className="shearing--middle__title">Shearing Alpacas:</h3>
          <div className="shearing--middle__content-container break">
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
        <Divider variant="middle" />
        <div className="shearing--bottom break">
          <div className="shearing--bottom__left">
            <h3>Llama Shearing:</h3>
            <p>Llamas are sheared standing up.</p>
            <p>Requirements are:</p>
            <ol>
              <li>Electricity within 100ft</li>
              <li>Must be dry</li>
              <li>Haltered and in a catch pen or stall</li>
              <li>
                A corner of a barn where lead rope can be tied above the llamas
                head
              </li>
              <li>No feed or water 12 hours prior</li>
            </ol>
            <p>
              If your llama is not trained or does not handle well. Please have
              some means to sedate ready for use. If llamas are not well behaved
              only the barrel (torso) of the llama will be sheared. It is at the
              shearers discretion to continue if the animals behavior becomes
              dangerous.
            </p>
          </div>
          <div className="shearing--bottom__right">
            <h3>Sheep Shearing:</h3>
            <p>Requirements for shearing sheep:</p>
            <ol>
              <li>
                Have sheep in a small catch area. (rule of thumb: can you catch
                them in this space?)
              </li>
              <li>Must be dry</li>
              <li>Electricity within 100ft</li>
              <li>Remove all feed and water 24 hrs prior to shearing</li>
              <li>Means for fleece collection</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Shearing;
