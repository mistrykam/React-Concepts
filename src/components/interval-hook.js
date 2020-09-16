import React, { useState, useEffect } from "react";

function IntervalHook() {
  const [counter, setState] = useState(0);

  const tick = () => {
    setState((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <div className="container">
      <h3>
        Counter <span style={{ color: "red" }}>{counter}</span>
      </h3>
    </div>
  );
}

export default IntervalHook;
