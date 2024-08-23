import React from "react";
import "./WeatherForecast.css"; // Add this line to include the CSS file

const WeatherForecast = ({ forecast, unit }) => {
  return (
    <div className="forecast-container">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-cards">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-card-header">
              <p className="forecast-date">
                {new Date(day.dt_txt).toLocaleDateString()}
              </p>
              <img
                className="forecast-icon"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <p className="forecast-description">
                {day.weather[0].description}
              </p>
            </div>
            <div className="forecast-details">
              <p className="forecast-temp">
                <strong>Average Temperature:</strong> {day.main.temp} °
                {unit === "metric" ? "C" : "F"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
