import React, { useState } from "react";

export default function CIHooksCounter(props) {
  // count: a new state property
  // setCount: a method to update count
  // useState(0): initialize count to 0
  const [count, setCount] = useState(0);
  

  // Example of working with the previous state when using the useState Hook
  // Now we just have to pass the setter function an arrow function that 
  // contains the previous value as a param, and returns the new value based on this param
  // e.g. () => setCount(count => count + 1)
  return (
    <div className="greeting">
      <h1>Hello {props.name}! I'm a functional component with hooks!</h1>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count => count + 1)}>Increment Counter</button>
    </div>
  );
}
