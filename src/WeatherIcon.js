import React from "react";
import { ReactSkycon, SkyconType } from "react-skycons-extended";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": SkyconType.CLEAR_DAY,
    "01n": SkyconType.CLEAR_NIGHT,
    "02d": SkyconType.PARTLY_CLOUDY_DAY,
    "02n": SkyconType.PARTLY_CLOUDY_NIGHT,
    "03d": SkyconType.CLOUDY,
    "03n": SkyconType.CLOUDY,
    "04d": SkyconType.CLOUDY,
    "04n": SkyconType.CLOUDY,
    "09d": SkyconType.RAIN,
    "09n": SkyconType.RAIN,
    "10d": SkyconType.SHOWERS_DAY,
    "10n": SkyconType.SHOWERS_NIGHT,
    "11d": SkyconType.THUNDER,
    "11n": SkyconType.THUNDER,
    "13d": SkyconType.SNOW,
    "13n": SkyconType.SNOW,
    "50d": SkyconType.FOG,
    "50n": SkyconType.FOG,

    color: {
      sun: "#FCDE00",
      moon: "#FCDE00",
      cloud: "#cfcfcf",
      light_cloud: "#cfcfcf",
      dark_cloud: "#cfcfcf",
      rain: "#62B1F6",
      snow: "#62B1F6",
      fog: "#62B1F6",
      thunder: "#FCDE00",
    },
  };

  return (
      <ReactSkycon
        icon={codeMapping[props.code]}
        color={codeMapping.color}
        size={props.size}
        animate={true}
      />
  );
}