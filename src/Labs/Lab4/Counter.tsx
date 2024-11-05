import React, { useState } from "react";
export default function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        // variable updates on console
        // but fails to update the DOM as desired
        onClick={() => setCount(count + 1)} 
        id="wd-counter-up-click"
        style={{
            backgroundColor: "green",
            color: "white",
            marginRight: "8px",
            border: "none",
            borderRadius: "5px",
          }}>
        Up
      </button>
      <button
        onClick={() =>setCount(count - 1)}
        id="wd-counter-down-click"
        style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}>
        Down
      </button>
      <hr/>
      </div>
);}