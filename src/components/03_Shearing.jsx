import React, { Component } from "react";
import img from "../imgs/shear-day-checklist.jpg";

class Shearing extends Component {
  render() {
    return (
      <div className="shearing">
        <h2 className="shearing--title">Shearing Day Checklist (Alpaca):</h2>
        <div className="shearing--top">
          <div className="shearing--top__img-container">
            <img src={img} alt="Shear Day Checklist" />
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
            Sergio any complications. He can be flexible and work with the needs
            of clients.
          </p>
        </blockquote>
        <hr />
      </div>
    );
  }
}

export default Shearing;
