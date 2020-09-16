import React, { useState } from "react";
import HookMouse from "./hook-mouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setDisplay(!display)}>Toogle Mouse Tracking</button>
      {display && <HookMouse></HookMouse>}
    </div>
  );
}

export default MouseContainer;
