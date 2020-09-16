import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setStateX] = useState(0);
  const [y, setStateY] = useState(0);

  const logMouseEvent = (event) => {
    // console.log(event);
    setStateX(event.clientX);
    setStateY(event.clientY);
  };

  useEffect(() => {
    console.log("HookMouse :: add EventLister Mouse Over");
    window.addEventListener("mouseover", logMouseEvent);

    return () => {
      console.log("HookMouse :: remove EventListener Mouse Over");
      window.removeEventListener("mouseover", logMouseEvent);
    };
  }, []); /* only do this once */

  return (
    <div className="container">
      <h3>
        Hook Mouse Over ({x}, {y})
      </h3>
    </div>
  );
}

export default HookMouse;
