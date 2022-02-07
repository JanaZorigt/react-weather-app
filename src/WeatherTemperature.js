import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{Math.round(props.temp)}</span>
      <span className="unit">°F</span>
    </span>
  );
}

/*
import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.temp - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span>
        <span className="temperature">{Math.round(props.temp)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" className="link" onClick={showCelsius}>
            °C
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" className="link" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
*/
