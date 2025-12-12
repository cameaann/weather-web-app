import {
  getWeatherIcon,
  getWeatherDescription,
} from "../services/getWeatherIcon";
import type HourlyForecast from "./HourlyForecast";
import dayjs from "dayjs";

const HourlyCard = ({ hour }: { hour: HourlyForecast }) => {
  const weatherIcon = getWeatherIcon(hour.weather_code);
  const weatherDesc = getWeatherDescription(hour.weather_code);
  const time = dayjs(hour.time).format("hh A");

  return (
    <li className="flex justify-between p-4 bg-neutral-700 border-1 border-solid border-neutral-600 rounded-xl mb-2 items-center" key={hour.time}>
      <div className="flex items-center gap-2">
        <img src={weatherIcon} alt={weatherDesc} className="w-8 h-8" />
        {time}
      </div>
      {hour.temperature_2m}°C
    </li>
  );
};
export default HourlyCard;
