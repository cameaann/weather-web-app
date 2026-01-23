import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";
import type { WeatherContextType } from "../types";
import DailyCard from "./DailyCard";
import { Skeleton } from "./custom/Skeleton";

const DailyForcast = () => {
  const { weatherData, loading } = useContext(
    WeatherContext,
  ) as WeatherContextType;
  const dailyData = weatherData?.daily;
  const skeletonArray = Array.from({ length: 7 }, (_, index) => index);

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
      ) : loading ? (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-left mb-4 ml-2">
            Daily Forecast
          </h2>
          <ul className="grid xs:grid-cols-3 md:grid-cols-7 gap-3">
            {skeletonArray.map((index) => (
              <Skeleton key={index} width="100%" height="50px" />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default DailyForcast;
