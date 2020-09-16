import React from "react";

function Title({ name }) {
  console.log("Title render");

  return <h3>{name}</h3>;
}

export default React.memo(Title);
