import React from "react";

class StatefulGreetingWithCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello",
      buttonText: "Exit",
      boolTest: false,
    };
  }

  handleClick() {
    this.setState(
      {
        introduction: "Goodbye!",
        buttonText: "Enter",
      },
      // Callback function should be used if there is code that needs to be run after the async setState function
      () => {
        console.log("new state", this.state.introduction);
        console.log("new state", this.state.buttonText);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default StatefulGreetingWithCallback;
