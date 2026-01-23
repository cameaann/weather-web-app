import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/weatherContext";
import type { WeatherContextType } from "../types";
import dayjs from "dayjs";
import type { HourlyForecastType } from "../types";
import HourlyCard from "./HourlyCard";
import Select from "./custom/Select";
import { Skeleton } from "./custom/Skeleton";

const HourlyForecast = () => {
  const { weatherData, loading } = useContext(
    WeatherContext,
  ) as WeatherContextType;
  const [selectedDay, setSelectedDay] = useState<string>(
    dayjs().format("YYYY-MM-DD"),
  );
  const formatedDay = (date: string) => {
    return { value: date, label: dayjs(date).format("dddd") };
  };
  const hourlyData = weatherData?.hourlyByDay[selectedDay];
  const skeletonArray = Array.from({ length: 8 }, (_, index) => index);

  const options = weatherData
    ? Object.keys(weatherData?.hourlyByDay || {}).map((date) =>
        formatedDay(date),
      )
    : [];

  return (
    <>
      {weatherData ? (
        <div className="bg-neutral-800 rounded-3xl my-4 md:my-0 p-8">
          <div className="flex p-2 items-center justify-between">
            <h2 className="text-2xl font-bold">Hourly Forecast</h2>
            <Select
              options={options}
              value={selectedDay}
              onChange={setSelectedDay}
            />
          </div>
          <ul className="mt-2 flex flex-col gap-2 ">
            {hourlyData?.map((hour: HourlyForecastType) => (
              <HourlyCard key={hour.time} hour={hour} />
            ))}
          </ul>
        </div>
      ) : loading ? (
        <Skeleton
          height="100rem"
          width="100%"
          backgroundColor="var(--color-neutral-700)"
          borderRadius="1.5rem"
          style={{ padding: "2rem" }}
        >
          <div className="flex p-2 items-center justify-between">
            <h2 className="text-2xl font-bold">Hourly Forecast</h2>
            <Select
              options={options}
              value={selectedDay}
              onChange={setSelectedDay}
            />
          </div>

          <ul className="flex flex-col gap-2 justify-center items-center mt-2">
            {skeletonArray.map((index) => (
              <Skeleton
                key={index}
                width="100%"
                height="4rem"
                backgroundColor="var(--color-neutral-600)"
                borderRadius="1rem"
              />
            ))}
          </ul>
        </Skeleton>
      ) : null}
    </>
  );
};
export default HourlyForecast;
