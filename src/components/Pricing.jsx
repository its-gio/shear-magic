import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return (
      <div className="pricing component-container">
        <h2 className="pricing--title">Pricing Schedule:</h2>
        <div className="pricing--content-container break">
          <ul className="pricing--content-container__list">
            <li>$25 per alpaca</li>
            <li>$45 per llama</li>
            <li>$10 per sheep</li>
            <li>$5 per animal nail trimming (alpaca and sheep)</li>
            <li>$10 nail trimming per llama</li>
            <li>$50 Ranch Call</li>
          </ul>
          <p className="pricing--content-container__request">
            Please ensure you are prepared on the day of your appointment. Those
            details can be found in the shearing tab above. If you are not
            prepared when Sergio arrives, at his discretion he may cancel or
            reschedule the appointment.
          </p>
        </div>
        <blockquote className="pricing--blockquote">
          <p>Note:</p>
          <p>
            If contact and establishing an appointment is made after May 1st
            ranch call will be $100
          </p>
        </blockquote>
      </div>
    );
  }
}

export default Pricing;
