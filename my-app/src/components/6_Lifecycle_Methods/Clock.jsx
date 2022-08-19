import React, { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
    console.log("Constructor");
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("componentWillUnmount");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    console.log("tick!");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
