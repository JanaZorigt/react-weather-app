import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Chicago",
    date: "Saturday 22:22",
    temperature: 33,
    description: "Mostly sunny",
    humidity: 57,
    wind: 5,
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

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
          <h1>{weatherData.city}</h1>

          <h2>
            <div className="date">Last updated: {weatherData.date}</div>
          </h2>

          <div className="row">
            <div className="col-8 text-center p-0">
              <img
                src={weatherData.imageUrl}
                alt={weatherData.description}
                className="icon"
              />
              <span className="temperature">{weatherData.temperature}</span>
              <span className="unit">°F</span>
            </div>

            <div className="col-4 p-0">
              <ul>
                <li>{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} mph</li>
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
        by Jana Zorigt
      </footer>
    </div>
  );
}
