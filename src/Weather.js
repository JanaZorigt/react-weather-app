import React from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";

export default function Weather(props) {
  function displayWeather(response) {
    //alert(`It's ${response.data.main.temp} C in ${props.cityName}`);
  }

  let apiKey = "58d4db6a0d6b79cac80768197bced22d";
  let unit = "metric";
  let apiUrl = `
    https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(displayWeather);

  return <Hearts heigth="100" width="100" color="grey" arialLabel="loading" />;
}
