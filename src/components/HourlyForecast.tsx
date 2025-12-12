import { useContext, useState } from "react";
import { WeatherContext } from "../weatherContext";
import type { WeatherContextType } from "../types";
import dayjs from "dayjs";
import type { HourlyForecast } from "../types";
import HourlyCard from "./HourlyCard";
import Select from "./custom/Select";

const HourlyForecast = () => {
  const { weatherData } = useContext(WeatherContext) as WeatherContextType;
  const [selectedDay, setSelectedDay] = useState<string>(
    dayjs().format("YYYY-MM-DD")
  );
  const formatedDay = (date: string) => {
    return { value: date, label: dayjs(date).format("dddd")};
  };
  const hourlyData = weatherData?.hourlyByDay[selectedDay];
  // Filter hourly data for the selected day

  return (
    <>
      {weatherData ? (
        <div className="bg-neutral-800 rounded-lg m-2 p-4">
          <div className="flex p-2 items-center justify-between">
            <h2 className="text-2xl font-bold">Hourly Forecast</h2>
			<Select
			  options={Object.keys(weatherData?.hourlyByDay || {}).map((date) =>
				formatedDay(date)
			  )}
			  value={selectedDay}
			  onChange={setSelectedDay}
			/>
          </div>
          <ul>
            {hourlyData?.map((hour: HourlyForecast) => (
              <HourlyCard key={hour.time} hour={hour} />
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
export default HourlyForecast;
