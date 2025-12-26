import { useContext } from "react";
import { WeatherContext } from "../weatherContext";
import type { SettingContextType, WeatherContextType } from "../types";
import SunImage from "../assets/images/icon-sunny.webp";
import dayjs from "dayjs";
import { SettingContext } from "../contexts/settingsContext";

const WeatherInfoCard = () => {
  const { weatherData } = useContext(WeatherContext) as WeatherContextType;
  const currentDay = dayjs().format("dddd, MMMM D");
  const { settings } = useContext(SettingContext) as SettingContextType
  const unit = settings?.temperatureUnit === "C" ? "°C" : "°F";

  return (
    <>
      {weatherData ? (
        <div className="info-card h-[28.6rem] flex flex-col md:flex-row md:justify-between items-center bg-cover bg-no-repeat bg-center  rounded-3xl p-6 md:p-10 lg:p-14 text-white justify-center mb-2">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="text-5xl bold italic">
              {weatherData.city}, {weatherData.country}
            </div>
            <div className="text-2xl mt-3 mb-6 md:my-0">{currentDay}</div>
          </div>

          <div className="text-8xl flex items-center gap-8">
            <img className="w-40" src={SunImage} alt="sun icon" />
            <span className="semibold italic">
              {weatherData.current.temperature_2m} {unit}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WeatherInfoCard;
