import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";
import type { WeatherContextType } from "../types";
import Header from "./Header";
import LocationSearch from "./LocationSearch";
import WeatherInfo from "./WeatherInfo";
import DailyForcast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import HandleErrorComponent from "./HandleErrorComponent";

export const AppContent = () => {
  const { error } = useContext(WeatherContext) as WeatherContextType;

  return (
    <>
      <Header />
	  <main>
      {error && error?.type === "general" ? (
        <HandleErrorComponent error={error} />
      ) : (
        <>
          <h1 className="hero-header">How's the sky looking today?</h1>
          <LocationSearch />
          {error && error?.type === "no-results" ? (
            <div className="text-3xl text-color-neutral-0 font-bold">
              {error.message}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
              <div className="col-span-1 lg:col-span-2">
                <WeatherInfo />
                <DailyForcast />
              </div>
              <HourlyForecast />
            </div>
          )}
        </>
      )}
	  </main>
    </>
  );
};
