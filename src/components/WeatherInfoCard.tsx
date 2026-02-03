import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";
import type { WeatherContextType } from "../types";
import SunImage from "../assets/images/icon-sunny.webp";
import dayjs from "dayjs";
// import { SettingContext } from "../contexts/settingsContext";
import { Skeleton } from "./custom/Skeleton";

const WeatherInfoCard = () => {
  const { weatherData, loading } = useContext(
    WeatherContext,
  ) as WeatherContextType;
  const currentDay = dayjs().format("dddd, MMM D, YYYY");
  // const { settings } = useContext(SettingContext) as SettingContextType;
  // const unit = settings?.temperatureUnit === "C" ? "°C" : "°F";

  return (
    <>
      {weatherData && !loading ? (
        <div className="info-card h-[28.6rem] flex flex-col md:flex-row md:justify-between items-center bg-cover bg-no-repeat bg-center  rounded-3xl p-6 md:p-10 lg:p-14 text-white justify-center mb-2">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="text-5xl font-bold italic text-center mb-4 md:text-left ">
              <span>{weatherData.city}, </span>
              <span>{weatherData.country}</span>
            </div>
            <div className="text-2xl mt-3 mb-6 md:my-0">{currentDay}</div>
          </div>

          <div className="text-8xl flex items-center">
            <img className="w-40" src={SunImage} alt="sun icon" />
            <span className="semibold italic">
              {weatherData.current.temperature_2m}
            </span>
          </div>
        </div>
      ) : loading ? (
        <Skeleton height="28.6rem" width="100%" borderRadius="1.5rem" />
      ) : null}
    </>
  );
};

export default WeatherInfoCard;
