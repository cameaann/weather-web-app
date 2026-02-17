import { useState } from "react";
import { WeatherContext } from "./weatherContext";
import { type WeatherContextType, type WeatherData } from "../types";

export type ErrorType = {
  type: "no-results" | "general";
  message: string;
}


const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, loading, setLoading, error, setError } as WeatherContextType}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;