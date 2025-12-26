import axios from "axios";
import { LOCATION_API, WEATHER_API } from "../constants";
import type { DailyForecast, HourlyForecastType } from "../types";

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

const getCurrentWeather = async (lat: number, lon: number, units: string, temperatureUnit: string) => {
  console.log("request for Current Weather");

  const unitsParam = units === "metric" ? "wind_speed_unit=kmh" : "wind_speed_unit=mph";
  const temp = temperatureUnit === "C" ? "celsius" : "fahrenheit";


  const res = await axios(
    WEATHER_API +
      `?latitude=${lat}&longitude=${lon}&forecast_days=7&daily=apparent_temperature_max,apparent_temperature_min,weather_code&current=temperature_2m,wind_speed_10m,apparent_temperature,relative_humidity_2m,precipitation&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,weather_code&temperature_unit=${temp}&${unitsParam}`
  );
  const { current, hourly, daily } = res.data;
  const dailyForecast = daily.time.map((date: string, index: number) => ({
    date: date,
    temperature_max: daily.apparent_temperature_max[index],
    temperature_min: daily.apparent_temperature_min[index],
    weather_code: daily.weather_code[index],
  }));

  const hourlyForecast = hourly.time.map((time: string, index: number) => ({
    time: time,
    date: time.split('T')[0],
    temperature_2m: hourly.temperature_2m[index],
    relative_humidity_2m: hourly.relative_humidity_2m[index],
    wind_speed_10m: hourly.wind_speed_10m[index],
    apparent_temperature: hourly.apparent_temperature[index],
    weather_code: hourly.weather_code[index],
  }));

  // Group hourly data by day
  const hourlyByDay = dailyForecast.reduce((acc: Record<string, HourlyForecastType[]>, day: DailyForecast) => {
    acc[day.date] = hourlyForecast.filter((hour: HourlyForecastType )=> hour.date === day.date);
    return acc;
  }, {} as Record<string, typeof hourlyForecast>);

  const weatherData = {
    daily: dailyForecast,
    current: {
      temperature_2m: current.temperature_2m,
      relative_humidity_2m: current.relative_humidity_2m,
      wind_speed_10m: current.wind_speed_10m,
      apparent_temperature: current.apparent_temperature,
      precipitation: current.precipitation,
    },
    hourly: hourlyForecast,
    hourlyByDay: hourlyByDay,
  };

  return weatherData;
};

const getLast10daysWeather = async (lat: number, lon: number) => {
  const res = await axios(
    WEATHER_API +
      `?latitude=${lat}&longitude=${lon}&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
  );
  const { results } = res.data;
  return results;
};

export { getLocation, getCurrentWeather, getLast10daysWeather };
