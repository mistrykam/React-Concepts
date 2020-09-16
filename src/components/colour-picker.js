import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColourPicker() {
  const [display, setDisplay] = useState(false);
  const [colour, setColour] = useState("#fffff");

  return (
    <div className="container">
      <button onClick={() => setDisplay((current) => !current)}>Toggle Colour Picker</button>
      <p>Colour selected {colour}</p>
      {display && <ChromePicker color={colour} onChange={(newColour) => setColour(newColour.hex)}></ChromePicker>}
    </div>
  );
}

export default ColourPicker;
