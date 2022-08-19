import React, { Component } from "react";

export class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "website",
      comments: "",
    };
  }
  handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h2>Controlled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              type="text"
              name="name"
              id="id-name"
              value={this.state.name}
              onChange={this.handleFormFieldChange}
            />
          </div>
          <div>
            <label htmlFor="id-category">Query category:</label>
            <select
              name="category"
              id="id-category"
              value={this.state.category}
              onChange={this.handleFormFieldChange}
            >
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
              value={this.state.comments}
              onChange={this.handleFormFieldChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledForm;
