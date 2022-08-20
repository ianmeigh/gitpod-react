import React, { useState } from "react";
import UseEffectCounter from "./UseEffectCounter";

export default function UseEffectCounterContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {display && <UseEffectCounter />}
      <p>This is the value {display ? "True" : "False"}</p>
    </div>
  );
}
