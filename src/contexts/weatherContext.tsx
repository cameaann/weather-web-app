import { createContext } from 'react';
import { type WeatherContextType } from '../types';
export const WeatherContext = createContext<WeatherContextType | null>(null);