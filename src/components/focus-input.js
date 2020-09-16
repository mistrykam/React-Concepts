import React, { useEffect, useRef } from "react";

const labelStyle = {
  width: "80px",
  display: "inline-block"
};

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // inputRef.current.focus();
  }, []); // done only once

  return (
    <div>
      <div>
        <label style={labelStyle}>Login</label>
        <input ref={inputRef} type="text"></input>
      </div>
      <div>
        <label style={labelStyle}>Password</label>
        <input type="Password"></input>
      </div>
    </div>
  );
}

export default FocusInput;
