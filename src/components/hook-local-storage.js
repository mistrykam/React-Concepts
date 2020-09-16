import React, { useState, useEffect } from "react";

export const HookLocalStorage = () => {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));

  useEffect(() => localStorage.setItem("count", JSON.stringify(count)), [count]);

  return (
    <div className="container">
      Counter <b>{count}</b>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
