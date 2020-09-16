import React from "react";

function EditUser(props) {
  return (
    <React.Fragment>
      <input type="text" value={props.user} onChange={(event) => props.handleChange(event, props.index)}></input>
    </React.Fragment>
  );
}

export default EditUser;
