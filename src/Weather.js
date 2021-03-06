import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { BallTriangle } from "react-loader-spinner";

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
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
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
        <form onSubmit={handleSubmit}>
          <div className="row d-flex mt-2 mb-4">
            <div className="col-9">
              <input
                type="search"
                className="form-control city-input"
                placeholder="Type to search..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn w-100 shadow-sn search-button"
              />
            </div>
          </div>
        </form>

        <hr />
        <WeatherInfo data={weatherData} />
        <hr />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader d-flex justify-content-center">
        {" "}
        <BallTriangle
          height="100"
          width="100"
          color="black"
          ariaLabel="loading"
        />
      </div>
    );
  }
}
