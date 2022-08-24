import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mary",
      surname: "Poppins",
      width: window.innerWidth,
    };
    // One method of binding, remember:
    //
    // By default in javascript classes, methods are not automatically bound to
    // the class. Therefore the 'this' keyword in the method is 'undefined' by
    // default and the 'this' keyword needs to be bound to the component/class.

    //this.handleNameChange = this.handleNameChange.bind(this);
    //this.handleSurnameChange = this.handleSurnameChange.bind(this);
    //this.handleResize = this.handleResize.bind(this);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSurnameChange = (e) => {
    this.setState({
      surname: e.target.value,
    });
  };

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  componentDidMount() {
    window.document.title = this.state.name + " " + this.state.surname;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    window.document.title = this.state.name + " " + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <section>
        <h2>Class Component</h2>
        <div>
          <label htmlFor="id_name">Name</label>
          <input
            type="text"
            name="name"
            id="id_name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="id_surname">Surname</label>
          <input
            type="text"
            name="surname"
            id="id_surname"
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
        </div>
        <div>
          <p>Window Width = {this.state.width}</p>
        </div>
      </section>
    );
  }
}

export default ClassComponent;
