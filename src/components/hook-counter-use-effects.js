import React, { useState, useEffect } from "react";

function HookCounterUseEffects() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  // invoke after each render call
  useEffect(() => {
    document.title = `Effect Count ${counter}`;
  }, [counter]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <p>Hook Counter - UseEffect</p>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((prev) => prev + 1)}>Clicked {counter}</button>
      <div>
        <input type="text" onChange={(event) => handleChange(event)}></input>
        <h3>Name: {name}</h3>
      </div>
    </div>
  );
}

export default HookCounterUseEffects;
