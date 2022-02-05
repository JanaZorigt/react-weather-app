import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  function search() {
    const apiKey = "58d4db6a0d6b79cac80768197bced22d";
    let unit = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="row search-engine">
              <div className="col-8">
                <input
                  type="search"
                  className="form-control city-input"
                  placeholder="Type to search..."
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
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

          <WeatherInfo data={weatherData} />
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
    search();
    return "Loading...";
  }
}
