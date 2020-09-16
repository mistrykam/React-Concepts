import "../App.css";
import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const byNumber = 5;
  const [counter, setCount] = useState(initialCount);

  // setCount() <-- what ever data is passed in will be assigned to 'counter'
  //                should use an arrow function to accomlish this
  //    eg. setCount(prev => prev + 1)  <-- safe version

  const incrementByNumber = () => {
    setCount((prev) => prev + 5);
  };

  return (
    <div className="container">
      <p>Hook Counter Two</p>
      <h3>{counter}</h3>
      <button onClick={() => setCount(() => initialCount)}>Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <br />
      <button onClick={() => incrementByNumber(byNumber)}>Increment By {byNumber}</button>
    </div>
  );
}

export default HookCounterTwo;
