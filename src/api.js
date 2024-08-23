import axios from "axios";

const API_KEY = "bfc0b2f2adc94883860ceb452e1ddcca"; // Replace with your OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = (city, unit) => {
  return axios.get(`${BASE_URL}weather`, {
    params: {
      q: city,
      units: unit,
      appid: API_KEY,
    },
  });
};

export const fetchForecast = (city, unit) => {
  return axios.get(`${BASE_URL}forecast`, {
    params: {
      q: city,
      units: unit,
      appid: API_KEY,
    },
  });
};
