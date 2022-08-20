import React, { useState, useEffect } from "react";

export default function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const [time, setTime] = useState(0);

  // useEffect runs on every render, no matter what.. which is bad for
  // performance

  /* useEffect(() => {
    document.title = count;
  }); */

  // To fix this a 2nd argument is provided, an array containing all the
  // properties that this effect should be watching for changes. This tells the
  // useEffect Hook that the function should only run when count changes

  useEffect(() => {
    console.log("count 1 effect");
    document.title = count;
  }, [count]);

  useEffect(() => {
    console.log("count 2 effect");
    document.title = count2;
  });

  // This timer example adds a listener to update the time state variable by 1.
  // With its default behavior, useEffect will run this code every time the
  // element rerenders, adding another listener!

  // To prevent this we can pass an empty array as the 2nd argument of
  // useEffect, thereby making the hook more like the componentDidMount method.

  // To mimic the functionality of the componentWillUnmount method we return a
  // cleanup function that will be executed when the component in unmounted.

  useEffect(() => {
    console.log("creating timer");
    const interval = setInterval(() => {
      console.log("interval executed");
      setTime((time) => time + 1);
    }, 1000);
    // Cleanup function
    return () => {
      console.log("Cleaning up!");
      clearInterval(interval);
    };
  }, []); // Empty array, run once

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Count ({count})
      </button>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        Increment Count 2 ({count2})
      </button>
      <h2>Time is {time}</h2>
    </div>
  );
}
