import { useContext } from "react";
import { WeatherContext } from "../weatherContext";
import type { WeatherContextType } from "../types";
import SunImage from "../assets/images/icon-sunny.webp";

const WeatherInfoCard = () => {
  const { weatherData } = useContext(WeatherContext) as WeatherContextType;

  return (
    <>
      {weatherData ? (
        <div className="info-card h-[28.6rem] flex flex-col md:flex-row md:justify-between items-center bg-cover bg-no-repeat bg-center bordered rounded-lg p-6 md:p-10 lg:p-14 text-white justify-center">
          <div className="text-3xl semibold italic">
            {weatherData.city}, {weatherData.country}
          </div>
          <div className="text-8xl flex items-center gap-6">
			<img className="w-40" src={SunImage} alt="sun icon" />
            <span className="semibold italic">{weatherData.current.temperature_2m} &deg;</span>

          </div>
        </div>
      ) : null}
    </>
  );
};

export default WeatherInfoCard;
