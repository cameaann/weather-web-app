import { createContext} from "react";
import { type SettingContextType } from "../types"

const defaultSettings: SettingContextType = {
  settings: {
	units: 'metric',
	temperatureUnit: 'C',
  windSpeedUnit: 'km/h',
  precipitationUnit: 'millimeters'
  },
  setSettings: () => {}
};

export const SettingContext = createContext<SettingContextType>(defaultSettings);

