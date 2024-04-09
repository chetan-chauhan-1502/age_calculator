import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthDate;

    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.436875; // Average days in a month
    const ageInYears = ageInMonths / 12;

    setAge({
      years: Math.floor(ageInYears),
      months: Math.floor(ageInMonths % 12),
      days: Math.floor(ageInDays % 30.436875),
      hours: Math.floor(ageInHours % 24),
      seconds: Math.floor(ageInSeconds % 60),
    });
  };

  return (
    <div className="main">
      <h1 className="heading" disable>
        Age Count{" "}
      </h1>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={calculateAge} className="CA">
        Calculate Age
      </button>
      <br />
      {age && (
        <div>
          <p>Years: {age.years}</p>
          <p>Months: {age.months}</p>
          <p>Days: {age.days}</p>
          <p>Hours: {age.hours}</p>
          <p>Seconds: {age.seconds}</p>
        </div>
      )}
    </div>
  );
};

export default App;
