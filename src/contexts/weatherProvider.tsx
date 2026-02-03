import { useState } from "react";
import { WeatherContext } from "./weatherContext";
import { type WeatherContextType, type WeatherData } from "../types";



const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, loading, setLoading } as WeatherContextType}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;
