import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  // console.log("Hook Timer render");

  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null); // since the HookTmer is rebuild on every render - this needs to be store in a ref

  useEffect(() => {
    intervalRef.current = setInterval(() => setCounter((prev) => prev + 1), 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopTimer = () => {
    return clearInterval(intervalRef.current);
  };

  return (
    <div>
      <div>Count is {counter}</div>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default HookTimer;
