import React, { Component } from "react";

export class UncontrolledForm extends Component {
  render() {
    return (
      <div>
        {/* Uncontrolled Form as it is controlled by the DOM */}
        <h2>Uncontrolled Form</h2>
        <form action="">
          <label htmlFor="id-name">Your Name:</label>
          <input type="text" name="name" id="id-name" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
