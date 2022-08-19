import React, { Component } from "react";
import { createRef } from "react";

export class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.inputName = createRef();
    this.selectCategory = createRef();
    this.textareaComments = createRef();
  }
  handleSubmit = (event) => {
    console.log(this.inputName.current.value);
    console.log(this.selectCategory.current.value);
    console.log(this.textareaComments.current.value);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h2>Uncontrolled Form with Refs</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              type="text"
              name="name"
              id="id-name"
              defaultValue="Your Name"
              ref={this.inputName}
            />
          </div>
          <div>
            <label htmlFor="id-category">Query category:</label>
            <select name="category" id="id-category" ref={this.selectCategory}>
              <option value="website">Website issue</option>
              <option value="order">Order Issue</option>
              <option value="general">General inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments:</label>
            <textarea
              name="comments"
              id="id-comments"
              cols="30"
              rows="10"
              ref={this.textareaComments}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledForm;
