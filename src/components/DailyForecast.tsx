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
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-left mb-4 ml-2">
            Daily Forecast
          </h2>
          <ul className="grid grid-cols-3 md:grid-cols-7 gap-3">
            {dailyData.map((day, index) => (
              <DailyCard key={day.date || index} day={day} />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default DailyForcast;
