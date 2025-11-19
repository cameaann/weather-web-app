import { useContext } from "react";
import { WeatherContext } from "../weatherContext";
import type { WeatherContextType } from "../types";
import SunImage from "../assets/images/icon-sunny.webp";
import dayjs from "dayjs";

const WeatherInfoCard = () => {
  const { weatherData } = useContext(WeatherContext) as WeatherContextType;
const currentDay = dayjs().format('dddd, MMMM D');

  return (
    <>
      {weatherData ? (
        <div className="info-card h-[28.6rem] flex flex-col md:flex-row md:justify-between items-center bg-cover bg-no-repeat bg-center  rounded-3xl p-6 md:p-10 lg:p-14 text-white justify-center">
          <div className="text-5xl bold italic">
            {weatherData.city}, {weatherData.country}
          </div>
		  <div className="text-2xl mt-3 mb-6 md:my-0">{currentDay}</div>
          <div className="text-8xl flex items-center gap-8">
			<img className="w-40" src={SunImage} alt="sun icon" />
            <span className="semibold italic">{weatherData.current.temperature_2m} &deg;</span>

          </div>
        </div>
      ) : null}
    </>
  );
};

export default WeatherInfoCard;
