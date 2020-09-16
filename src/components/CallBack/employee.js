import React, { useState, useCallback } from "react";
import Title from "./title";
import Count from "./count";
import CustomButton from "./custom-button";

function Employee() {
  const name = "Jenna Flind";
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(80000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  console.log("Employee render");

  return (
    <div className="container">
      <Title name={name}></Title>
      <Count text="Age" count={age}></Count>
      <CustomButton handleClick={incrementAge}>Increment Age</CustomButton>
      <Count text="Salary" count={salary}></Count>
      <CustomButton handleClick={incrementSalary}>Increment Salary</CustomButton>
    </div>
  );
}

export default Employee;
