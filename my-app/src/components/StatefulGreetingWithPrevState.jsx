import React from "react";

class StatefulGreetingWithCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello",
      buttonText: "Exit",
      count: 0,
    };
  }

  incrementByOne() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State:", prevState)
      console.log("Previous Properties:", prevProps);
      return { count: prevState.count + 1 }
    })
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State:", prevState)
      console.log("Previous Properties:", prevProps);
      return {
        introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
        buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
      }
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        <p>Button clicked {this.state.count} times.</p>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
        <button onClick={() => this.incrementByOne()}>
          Add one
        </button>
      </div>
    );
  }
}

export default StatefulGreetingWithCallback;
