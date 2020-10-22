import "../App.css";
import React, { useState } from "react";

function HookCounterOne() {
  const [counter, setCount] = useState(0);
  const [person, setPerson] = useState({ name: "John Smith", points: 1 });

  // setCount() <-- what ever data is passed in will be assigned to 'counter'
  //    eg. setCount(counter + 1)
  //    eg. setCount(prev => prev + 1)  <-- safe version

  return (
    <div className="container">
      <div>
        <p>Hook Counter One</p>
        <h3>{counter}</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      </div>
      <div>
        <h3>
          {person.name} has {person.points}
        </h3>
        <button onClick={() => setPerson((prev) => ({ ...prev, points: prev.points + 1 }))}>Add Points</button>
      </div>
    </div>
  );
}

export default HookCounterOne;
