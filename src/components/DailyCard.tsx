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
    <li className="flex flex-col w-[10rem] h-[16.5rem] items-center bg-neutral-800 border-neutral-400 rounded-lg m-2 p-[1.6rem]">
      <span className="text-lg">{formatedDate}</span>
       <img
          src={weatherIcon}
          alt={weatherDesc}
          className="w-16 h-16"
        />
      <div className="flex flex-row gap-2">
        <span>{day.temperature_max} °</span>
        <span>{day.temperature_min} °</span>
      </div>
    </li>
  );
};

export default DailyCard;
