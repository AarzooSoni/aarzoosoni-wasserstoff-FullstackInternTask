import React from "react";
import "./WeatherCard.css"; // Add this line to include the CSS file

const WeatherCard = ({ weather, unit }) => {
  const { name, main, wind, weather: weatherData } = weather;
  const [weatherInfo] = weatherData;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">{name}</h2>
        <p className="weather-description">{weatherInfo.description}</p>
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div className="weather-details">
        <p className="temperature">
          <strong>Temperature:</strong> {main.temp} °
          {unit === "metric" ? "C" : "F"}
        </p>
        <p className="temperature">
          <strong>Min Temperature:</strong> {main.temp_min} °
          {unit === "metric" ? "C" : "F"}
        </p>
        <p className="temperature">
          <strong>Max Temperature:</strong> {main.temp_max} °
          {unit === "metric" ? "C" : "F"}
        </p>
        <p className="humidity">
          <strong>Humidity:</strong> {main.humidity}%
        </p>
        <p className="wind">
          <strong>Wind Speed:</strong> {wind.speed}{" "}
          {unit === "metric" ? "m/s" : "mph"}
        </p>
        <p className="wind">
          <strong>Wind Direction:</strong> {wind.deg}°
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
