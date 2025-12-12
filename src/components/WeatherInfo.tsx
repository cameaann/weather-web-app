import { useContext } from "react";
import WeatherInfoCard from "./WeatherInfoCard";
import { WeatherContext } from "../weatherContext";
import WeatherItemCard from "./WeatherItemCard";
import type { WeatherContextType } from "../types";

const WeatherInfo = () => {
  const { weatherData } = useContext(WeatherContext) as WeatherContextType;
  const {
    apparent_temperature,
    relative_humidity_2m,
    wind_speed_10m,
    precipitation,
  } = weatherData?.current || {};

  console.log(weatherData);
  return (
    <>
      <WeatherInfoCard />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {apparent_temperature ? (
          <WeatherItemCard
            title="Feels Like"
            value={`${apparent_temperature} °`}
          />
        ) : null}
        {relative_humidity_2m ? (
          <WeatherItemCard
            title="Humidity"
            value={`${relative_humidity_2m} %`}
          />
        ) : null}
        {wind_speed_10m ? (
          <WeatherItemCard title="Wind" value={`${wind_speed_10m} km/h`} />
        ) : null}
        {precipitation !== undefined && (
          <WeatherItemCard
            title="Precipitation"
            value={`${precipitation} in`}
          />
        )}
      </div>
    </>
  );
};

export default WeatherInfo;
