import React from "react"; // Not required in later versions of React but including this here increases backwards compatibility

const FunctionalGreetingWithProps = (props) => {
  console.log(props);
  return <h1>Hello, {props.name}!, I see you're {props.age} years old; {props.greeting}</h1>
}

export default FunctionalGreetingWithProps;