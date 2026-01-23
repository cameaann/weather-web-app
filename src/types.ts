export interface DailyForecast {
  date: string;
  temperature_max: number;
  temperature_min: number;
  weather_code: number;
}

export interface HourlyForecastType {
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
  hourly:  HourlyForecastType[];
  daily: DailyForecast[];
  hourlyByDay: Record<string, HourlyForecastType[]>;
}

export type WeatherContextType = {
  weatherData: WeatherData | null;
  setWeatherData: (weather: WeatherData) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};


export interface SettingsType {
  units: string;
  temperatureUnit: string;
  windSpeedUnit: string;
  precipitationUnit: string;
}

export interface SettingContextType {
  settings: SettingsType;
  setSettings: (settings: SettingsType) => void;
}