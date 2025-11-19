import axios from "axios";
import { LOCATION_API, WEATHER_API } from "../constants";

const API_KEY = import.meta.env.VITE_API_KEY;
const getLocation = async (city: string) => {
  const res = await axios(
    LOCATION_API + `${city}&format=json&apiKey=${API_KEY}`
  );
  const { results } = res.data;
  if (results && results.length > 0) {
    return results;
  }
};

const getCurrentWeather = async (lat: number, lon: number) => {
  console.log("request for Current Weather");
  
  const res = await axios(
    WEATHER_API +
      `?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,apparent_temperature,relative_humidity_2m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature`
  );
  const { current, hourly } = res.data;
  const weatherData = {
    current: {
      temperature_2m: current.temperature_2m,
      relative_humidity_2m: current.relative_humidity_2m,
      wind_speed_10m: current.wind_speed_10m,
      apparent_temperature: current.apparent_temperature,
      precipitation: current.precipitation,
    },
    hourly: {
      temperature_2m: hourly.temperature_2m,
      relative_humidity_2m: hourly.relative_humidity_2m,
      wind_speed_10m: hourly.wind_speed_10m,
      apparent_temperature: hourly.apparent_temperature
    },
  };

  console.log(res.data);
  return weatherData;
};

const getLast10daysWeather = async (lat: number, lon: number) => {
  const res = await axios(
    WEATHER_API +
      `?latitude=${lat}&longitude=${lon}&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&`
  );
  const { results } = res.data;
  console.log(results);
  return results;
};

export { getLocation, getCurrentWeather, getLast10daysWeather };
