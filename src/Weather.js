import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.name,
      date: "Saturday 22:22",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container container-fluid">
          <form>
            <div className="row search-engine">
              <div className="col-8">
                <input
                  type="search"
                  className="form-control city-input"
                  placeholder="Type to search..."
                  autoComplete="off"
                  autoFocus="on"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn shadow-sn search-button"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Current"
                  className="btn shadow-sn current-button d-none d-sm-block"
                />
              </div>
            </div>
          </form>

          <div className="card-body p-0">
            <h1>{weatherData.cityName}</h1>

            <h2>
              <div className="date">Last updated: {weatherData.date}</div>
            </h2>

            <div className="row">
              <div className="col-8 text-center p-0">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="icon"
                />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°F</span>
              </div>

              <div className="col-4 p-0">
                <ul>
                  <li>{weatherData.description}</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} mph</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/JanaZorigt/react-weather-app"
            className="footerLink"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/JanaZorigt"
            className="footerLink"
            target="_blank"
            rel="noreferrer"
          >
            Jana Zorigt
          </a>
        </footer>
      </div>
    );
  } else {
    // const apiKey = "58d4db6a0d6b79cac80768197bced22d";
    let unit = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
