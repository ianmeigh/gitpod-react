import React, { Component } from "react";

export class EventsClass extends Component {
  eventHandler() {
    console.log("Clicked the class button");
  }

  render() {
    return (
      <div>
        <button onClick={this.eventHandler}>click me - class component</button>
      </div>
    );
  }
}

export default EventsClass;
