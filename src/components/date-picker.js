import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Descontruction() {
  const Person = {
    FirstName: "Diane",
    LastName: "Lomper",
    Address: "1 Mainway Road",
    City: "Miami"
  };

  const { Address, City } = Person;
  console.log(`${Address} ${City}`);

  Person.Address = "494 Binhop Ave";
  Person.City = "Orlando";

  console.log(`${Person.Address} ${Person.City}`);
  console.log(`${Address} ${City}`);
}

function DatePickerExample() {
  const [selectedDate, setSelectedDate] = useState(null);

  Descontruction();

  return (
    <div className="container">
      <h3>Select a date</h3>
      <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="yyyy/MM/dd"></DatePicker>
    </div>
  );
}

export default DatePickerExample;
