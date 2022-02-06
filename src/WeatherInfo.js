import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="card-body p-0">
        <h1>{props.data.city}</h1>

        <h2>
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
        </h2>

        <div className="row">
          <div className="col-8 text-center p-0">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemperature temp={props.data.temperature} />
          </div>

          <div className="col-4 p-0">
            <ul>
              <li>{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
