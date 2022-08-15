import React from 'react';

class EventBinding extends React.Component {

  constructor(props) { // best practice to always pass props to the constructor and super function
    super(props); // ensures the parent class is also called (React.Component)
    this.state = {
      introduction: "Hello",
      buttonText: "Exit",
      boolTest: false,
    };
    // 3. Bind the event handler in the constructor
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({
  //     introduction: "Goodbye!",
  //     buttonText: "Enter",
  //   });
  //   console.log(this.state.introduction);
  // }

  // ** USE METHOD 4 TO BIND 'THIS' PRIMARILY **
  // ** IF EVENT HANDLER NEEDS TO TAKE PARAMS, USE METHOD 1 **

  // 4. Define the handler as an arrow function
  // Works as arrow functions adopt the 'this' from where they are defined.
  // In this case, that is the class component.
  handleClick = () => {
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
      
      {/* USE IF EVENT HANDLER NEEDS TO TAKE PARAMS */}
      {/*1. Bind using arrow function - ensures 'this' is bound to the class
      as arrow functions execute in the scope in which they were created.
      In this case, that is the component. */}
      {/* <button onClick={() => this.handleClick()}>{this.state.buttonText}</button> */}

      {/*2. Call the bind method on the handler with 'this' which outside the context 
      of the event handler refers to this. */}
      {/* <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button> */}

      <button onClick={this.handleClick}>{this.state.buttonText}</button>
    </div>
    )
  }
}

export default EventBinding;