import type { DailyForecast } from "../types";
import dayjs from "dayjs";
import { getWeatherIcon, getWeatherDescription } from "../services/getWeatherIcon";

type DailyProps = {
  day: DailyForecast;
};
const DailyCard = ({ day }: DailyProps) => {
  const formatedDate = dayjs(day.date).format("ddd");
  const weatherIcon = getWeatherIcon(day.weather_code);
  const weatherDesc = getWeatherDescription(day.weather_code);

  return (
    <li className="flex flex-col items-center bg-neutral-800 border-1 border-solid border-neutral-600 rounded-xl py-[1.6rem] px-[.8rem] gap-4">
      <span className="text-lg">{formatedDate}</span>
       <img
          src={weatherIcon}
          alt={weatherDesc}
          className="w-16 h-16"
        />
      <div className="flex flex-row gap-2 text-xl">
        <span className="text-lg">{day.temperature_max} °</span>
        <span className="text-lg">{day.temperature_min} °</span>
      </div>
    </li>
  );
};

export default DailyCard;
