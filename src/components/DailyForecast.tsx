import { useContext } from "react";
import { WeatherContext } from "../weatherContext";
import type { WeatherContextType } from "../types";
import DailyCard from "./DailyCard";

const DailyForcast = () => {
  const { weatherData } = useContext(WeatherContext) as WeatherContextType;
  const dailyData = weatherData?.daily;

  return (
    <div>
      {dailyData ? (
        <ul className="flex my-4 flex-row ">
          {dailyData.map((day, index) => (
            <DailyCard key={day.date || index} day={day} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DailyForcast;
