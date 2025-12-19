import React, { useState } from "react";
import { SettingContext } from "./settingsContext";
import { type SettingContextType, type SettingsType } from "../types"


const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
	const [settings, setSettings] = useState<SettingsType>({units: 'metric', temperatureUnit: 'C', windSpeedUnit: 'km/h', precipitationUnit: 'millimeters'});

	return (
		<SettingContext.Provider value={{settings, setSettings} as SettingContextType}>
			{children}
		</SettingContext.Provider>
	);
}
export { SettingContext, SettingsProvider };