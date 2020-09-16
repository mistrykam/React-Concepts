import React from "react";

function CustomButton({ handleClick, children }) {
  console.log(`CustomButton render - ${children}`);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(CustomButton);
