import "../App.css";
import React, { useState } from "react";
import EditUser from "./edit-user";

function HookCounterFour() {
  const [users, setUser] = useState(["Jenna", "Alice", "Samantha", "Debra"]);

  const changeHandler = (event, index) => {
    // console.log(event.target.value);
    // console.log(index);

    // array up to index + index item + array after index to the end

    setUser([...users.slice(0, index), event.target.value, ...users.slice(index + 1)]);
  };

  return (
    <div className="container">
      <p>Hook Counter Four</p>
      <form>
        <ul>
          {users.map((item, index) => (
            <li key={index}>
              <EditUser index={index} user={item} handleChange={changeHandler}></EditUser>
            </li>
          ))}
        </ul>
      </form>
      <h2>{JSON.stringify(users)}</h2>
    </div>
  );
}

export default HookCounterFour;
