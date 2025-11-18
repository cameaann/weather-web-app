export interface WeatherData {
  city: string;
  country?: string;
  state?: string;
//   date: ;
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
  };
  hourly: {
    temperature_2m: number[];
    relative_humidity_2m: number[];
    wind_speed_10m: number[];
  };
}


export type WeatherContextType = {
  weatherData: WeatherData | null;
  setWeatherData: (weather: WeatherData) => void;
};