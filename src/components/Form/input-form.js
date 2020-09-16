import React from "react";
import { useForm } from "./useForm";

const InputForm = () => {
  const [values, handleChange] = useForm({ username: "", password: "" });

  return (
    <div className="container">
      <div class="">
        <label>User Name</label>
        <input type="text" id="username" name="username" value={values.username} onChange={(event) => handleChange(event)}></input>
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" name="password" value={values.password} onChange={(event) => handleChange(event)}></input>
      </div>
      <div>User Name: {values.username}</div>
      <div>Password: {values.password}</div>
    </div>
  );
};

export default InputForm;
