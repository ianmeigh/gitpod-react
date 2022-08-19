import React from "react";

export default class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // the document title not part of the component (browser tab name is outside the 
    // ClassCounter component) so this action (to set it) is considered a side effect
    document.title = this.state.count;
  }

  componentDidUpdate() {
    // the document title not part of the component (browser tab name is outside the 
    // ClassCounter component) so this action (to set it) is considered a side effect
    document.title = this.state.count;
  }

  render() {
    return (
      <div className="greeting">
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          Increment Count ({this.state.count})
        </button>
      </div>
    );
  }
}
