import { createContext } from 'react';
import { type WeatherContextType } from '../types';

export const defaultValue: WeatherContextType = {
  weatherData: null,
  setWeatherData: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
};
export const WeatherContext = createContext<WeatherContextType>(defaultValue);