import { createContext} from "react";
import { type SettingContextType } from "../types"

const defaultSettings: SettingContextType = {
  settings: {
	units: 'metric',
	temperatureUnit: 'C'
  },
  setSettings: () => {}
};

export const SettingContext = createContext<SettingContextType | undefined>(defaultSettings);

