import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="p-0">
        <h1>{props.data.city}</h1>

        <h2>
          <span className="date">
            <FormattedDate date={props.data.date} />
          </span>
        </h2>

        <div className="row">
          <div className="col-8 text-center p-0 align-self-center">
            <WeatherIcon code={props.data.icon} size={64} />
            <WeatherTemperature temp={props.data.temperature} />
          </div>

          <div className="col-4 p-0">
            <ul>
              <li>{props.data.description}</li>
              <li>
                Humidity: <strong>{props.data.humidity}%</strong>
              </li>
              <li>
                Wind: <strong>{Math.round(props.data.wind)} mph </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
