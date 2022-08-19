// import React, { Component } from 'react';  // imrc
import React from 'react';                    // imr

// class StatefulGreeting extends Component { // for use with imrc
class StatefulGreeting extends React.Component {

  constructor(props) { // best practice to always pass props to the constructor and super function
    super(props); // ensures the parent class is also called (React.Component)
    this.state = {
      introduction: "Hello",
      buttonText: "Exit",
      boolTest: false,
    };
  }

  handleClick() {
    this.setState({
      introduction: "Goodbye!",
      buttonText: "Enter",
    });
    console.log(this.state.introduction);
  }

  render() {
    return (
    <div>
      <h1>{this.state.introduction} {this.props.greeting}</h1>
      <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
    </div>
    )
  }
}

export default StatefulGreeting;