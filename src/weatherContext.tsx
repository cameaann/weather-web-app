import { useState, createContext } from "react";
import { type WeatherContextType, type WeatherData } from "./types";

export const WeatherContext = createContext<WeatherContextType | null>(null)

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  return(
	<WeatherContext.Provider value={{weatherData, setWeatherData}}>
		{children}
	</WeatherContext.Provider>
  )
}
export default WeatherProvider;