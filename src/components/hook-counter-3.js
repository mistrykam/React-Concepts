import "../App.css";
import React, { useState } from "react";

function HookCounterThree() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  // you need to set the entire object - use ...

  const changeHandler = (event) => {
    // const field = event.target.name;
    // const value = event.target.value;

    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <p>Hook Counter Three</p>
      <form>
        <div>
          <input type="text" name="firstName" placeholder="First Name" onChange={(event) => changeHandler(event)}></input>
        </div>
        <div>
          <input type="text" name="lastName" placeholder="Last Name" onChange={(event) => changeHandler(event)}></input>
        </div>
      </form>
      <div>
        {user.firstName !== "" && user.lastName !== "" ? (
          <h3>
            You name is {user.firstName} {user.lastName}
          </h3>
        ) : (
          <h3>Enter your name</h3>
        )}
        <h2>{JSON.stringify(user)}</h2>
      </div>
    </div>
  );
}

export default HookCounterThree;
