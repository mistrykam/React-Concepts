import React from "react";
import ComponentC from "./component-C";

function ComponentB() {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h3>Component B</h3>
      <ComponentC></ComponentC>
    </div>
  );
}

export default ComponentB;
