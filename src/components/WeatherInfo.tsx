import { useContext } from "react";
import WeatherInfoCard from "./WeatherInfoCard";
import { WeatherContext } from "../weatherContext";
import WeatherItemCard from "./WeatherItemCard";
import type { SettingContextType, WeatherContextType } from "../types";
import { SettingContext } from "../contexts/settingsProvider";

const WeatherInfo = () => {
  const { weatherData } = useContext(WeatherContext) as WeatherContextType;
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

  return (
    <>
      <WeatherInfoCard />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {apparent_temperature ? (
          <WeatherItemCard
            title="Feels Like"
            value={`${apparent_temperature} ${unit}`}
          />
        ) : null}
        {relative_humidity_2m ? (
          <WeatherItemCard
            title="Humidity"
            value={`${relative_humidity_2m} %`}
          />
        ) : null}
        {wind_speed_10m ? (
          <WeatherItemCard
            title="Wind"
            value={`${wind_speed_10m} ${wind_unit}`}
          />
        ) : null}
        {precipitation !== undefined && (
          <WeatherItemCard
            title="Precipitation"
            value={`${precipitation} ${precipitation_unit}`}
          />
        )}
      </div>
    </>
  );
};

export default WeatherInfo;
