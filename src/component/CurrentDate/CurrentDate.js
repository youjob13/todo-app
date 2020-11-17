import React from "react";
import "./current.css";

const date = new Date();
const month = date.toLocaleString("en", { month: "long" });
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const CurrentDate = () => (
  <div className="date-block">
    <div className="date">
      <p className="date-day">{date.getDate()}</p>
      <div>
        <p className="date-month">{month}</p>
        <p className="date-year">{date.getFullYear()}</p>
      </div>
    </div>
    <div className="date-weekDay">{days[date.getDay()]}</div>
  </div>
);

export default CurrentDate;
