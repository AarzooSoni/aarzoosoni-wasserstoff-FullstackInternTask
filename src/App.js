import React, { useState } from "react";
import { fetchWeather, fetchForecast } from "./api";
import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const weatherResponse = await fetchWeather(city, unit);
      const forecastResponse = await fetchForecast(city, unit);

      setWeather(weatherResponse.data);
      setForecast(
        forecastResponse.data.list.filter((_, index) => index % 8 === 0)
      );
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  const toggleUnit = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  return (
    <div className="container">
      <div className="weather-app">
        <h1>Weather Forecast Dashboard</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Get Weather</button>
        <button onClick={toggleUnit}>
          Toggle to °{unit === "metric" ? "F" : "C"}
        </button>

        {error && <p className="error">{error}</p>}

        {weather && <WeatherCard weather={weather} unit={unit} />}
        {forecast.length > 0 && (
          <WeatherForecast forecast={forecast} unit={unit} />
        )}
      </div>
    </div>
  );
}

export default App;
