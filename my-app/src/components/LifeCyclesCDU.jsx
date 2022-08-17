import React, { Component } from "react";
import LifeCyclesCDUChild from "./LifeCyclesCDUChild";

export class LifeCyclesCDU extends Component {
  constructor(props) {
    console.log("Constructor called");
    super(props);

    this.state = {
      greeting: "Hello!",
    };
  }

  updateGreeting = () => {
    console.log("updateGreeting method called");
    this.setState((prevState) => {
      return {
        greeting: this.state.greeting === "Hello!" ? "Goodbye!" : "Hello!",
      };
    });
  };

  componentDidUpdate() {
    console.log("componentDidUpdate method called");
  }

  render() {
    console.log("render method called");
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
      </div>
    );
  }
}

export default LifeCyclesCDU;
