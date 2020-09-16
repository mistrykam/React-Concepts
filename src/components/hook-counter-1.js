import "../App.css";
import React, { useState } from "react";

function HookCounterOne() {
  const [counter, setCount] = useState(0);

  // setCount() <-- what ever data is passed in will be assigned to 'counter'
  //    eg. setCount(counter + 1)
  //    eg. setCount(prev => prev + 1)  <-- safe version

  return (
    <div className="container">
      <p>Hook Counter One</p>
      <h3>{counter}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}

export default HookCounterOne;
