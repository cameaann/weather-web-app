import { useContext } from "react";
import WeatherInfoCard from "./WeatherInfoCard";
import { WeatherContext } from "../contexts/weatherContext";
import WeatherItemCard from "./WeatherItemCard";
import type { SettingContextType, WeatherContextType } from "../types";
import { SettingContext } from "../contexts/settingsProvider";
import { Skeleton } from "./custom/Skeleton";

const WeatherInfo = () => {
  const { weatherData, loading } = useContext(
    WeatherContext,
  ) as WeatherContextType;
  const {
    apparent_temperature,
    relative_humidity_2m,
    wind_speed_10m,
    precipitation,
  } = weatherData?.current || {};
  const { settings } = useContext(SettingContext) as SettingContextType;
  const unit = settings.temperatureUnit === "C" ? "°C" : "°F";
  const wind_unit = settings.windSpeedUnit === "km/h" ? "km/h" : "mph";
  const precipitation_unit =
    settings.precipitationUnit === "millimeters" ? "mm" : "in";
  const skeletonArray = Array.from({ length: 4 }, (_, index) => index);

  return (
    <>
      <WeatherInfoCard />
      {weatherData?.current && !loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <WeatherItemCard
            title="Feels Like"
            value={`${apparent_temperature} ${unit}`}
          />
          <WeatherItemCard
            title="Humidity"
            value={`${relative_humidity_2m} %`}
          />
          <WeatherItemCard
            title="Wind"
            value={`${wind_speed_10m} ${wind_unit}`}
          />
          <WeatherItemCard
            title="Precipitation"
            value={`${precipitation} ${precipitation_unit}`}
          />
        </div>
      ) : loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {skeletonArray.map((index) => (
            <Skeleton key={index} width="100%" height="8rem" />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default WeatherInfo;
