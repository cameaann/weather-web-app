export interface DailyForecast {
  date: string;
  temperature_max: number;
  temperature_min: number;
  weather_code: number;
}

export interface HourlyForecast {
  time: string;
  date: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  apparent_temperature: number;
  weather_code: number;
}

export interface WeatherData {
  city: string;
  country?: string;
  state?: string;
  //   date: ;
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    apparent_temperature: number;
    relative_humidity_2m?: number;
    precipitation?: number | undefined;
  };
  hourly:  HourlyForecast[];
  daily: DailyForecast[];
  hourlyByDay: Record<string, HourlyForecast[]>;
}

export type WeatherContextType = {
  weatherData: WeatherData | null;
  setWeatherData: (weather: WeatherData) => void;
};
