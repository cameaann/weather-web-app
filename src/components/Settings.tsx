import { useContext } from "react";
import { useState } from "react";
import { SettingContext } from "../contexts/settingsContext";
import settingsIcon from "../assets/images/icon-units.svg";
import { type SettingsType } from "../types";

const Settings = () => {
  const settingsContext = useContext(SettingContext);
  const [showSettings, setShowSettings] = useState(false);
  const [tempUnit, setTempUnit] = useState(settingsContext?.settings.temperatureUnit || "C");
  const [windUnit, setWindUnit] = useState(settingsContext?.settings.windSpeedUnit || "km/h");
  const [precipUnit, setPrecipUnit] = useState(settingsContext?.settings.precipitationUnit || "millimeters");

  const label = () => (
    <span className="flex gap-3 items-center">
      <i>
        <img src={settingsIcon} alt="Units" />
      </i>
      Units
    </span>
  );
  const units =
    settingsContext?.settings.units === "metric" ? "Imperial" : "Metric";

  const handleSwitchUnits = () => {
    const newUnits =
      settingsContext?.settings.units === "metric" ? "imperial" : "metric";
    const newSettings: SettingsType = {
      ...settingsContext!.settings,
      units: newUnits,
      windSpeedUnit: newUnits === "metric" ? "km/h" : "mph",
      precipitationUnit: newUnits === "metric" ? "millimeters" : "inches",
    };
    settingsContext?.setSettings(newSettings);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSettings: SettingsType = {
      units: units,
      temperatureUnit: tempUnit,
      windSpeedUnit: windUnit,
      precipitationUnit: precipUnit,
    };
    settingsContext?.setSettings(newSettings);
    setShowSettings(false);
  };

  return (
    <>
      <div onClick={() => setShowSettings(!showSettings)}>{label()}</div>

      {showSettings && (
        <form
          className="absolute w-[21.4rem] right-5 top-20 p-5 rounded-lg bg-neutral-800 text-left z-10 border-1 border-solid border-neutral-800"
          onSubmit={handleSubmit}
        >
          <button
            className="text-lg text-left"
            onClick={handleSwitchUnits}
            type="button"
          >
            Switch to {units}
          </button>
          <fieldset className="flex flex-col mt-2">
            <legend className="text-left py-3 px-1 opacity-70">
              Temperature
            </legend>
            <label className="radio-label" htmlFor="celsius">
              <input
                type="radio"
                id="celsius"
                name="temperature"
                value="C"
                className="custom-radio"
                checked={tempUnit === "C"}
                onChange={() => setTempUnit("C")}
              />
              <span className="basis-60 h-[2rem] flex items-center">
                Celsius (C)
              </span>
            </label>
            <label className="radio-label" htmlFor="fahrenheit">
              <input
                type="radio"
                id="fahrenheit"
                name="temperature"
                value="F"
                className="custom-radio"
                checked={tempUnit === "F"}
                onChange={() => setTempUnit("F")}
              />
              <span className="basis-60 h-[2rem] flex items-center">
                Fahrenheit (F)
              </span>
            </label>
          </fieldset>
          <hr className="border-solid border-neutral-600 mt-1" />
          <fieldset className="flex flex-col mt-1">
            <legend className="text-left py-3 px-1 opacity-70">
              Wind speed
            </legend>
            <label className="radio-label" htmlFor="kmh">
              <input
                type="radio"
                id="kmh"
                name="windSpeed"
                value="km/h"
                className="custom-radio"
                checked={settingsContext?.settings.windSpeedUnit === "km/h"}
                onChange={() => setWindUnit("km/h")}
              />
              <span className="basis-60 h-[2rem] flex items-center">km/h</span>
            </label>
            <label className="radio-label" htmlFor="mph">
              <input
                type="radio"
                id="mph"
                name="windSpeed"
                value="mph"
                className="custom-radio"
                checked={settingsContext?.settings.windSpeedUnit === "mph"}
                onChange={() => setWindUnit("mph")}
              />
              <span className="basis-60 h-[2rem] flex items-center">mph</span>
            </label>
          </fieldset>
          <hr className="border-solid border-neutral-600 mt-1" />
          <fieldset className="flex flex-col mt-1">
            <legend className="text-left py-3 px-1 opacity-70">
              Precipitation
            </legend>
            <label className="radio-label" htmlFor="millimeters">
              <input
                type="radio"
                id="millimeters"
                name="precipitation"
                value="millimeters"
                className="custom-radio"
                checked={settingsContext?.settings.precipitationUnit === "millimeters"}
                onChange={() => setPrecipUnit("millimeters")}
              />
              <span className="basis-60 h-[2rem] flex items-center">
                millimeters (mm)
              </span>
            </label>
            <label className="radio-label" htmlFor="inches">
              <input
                type="radio"
                id="inches"
                name="precipitation"
                value="in"
                className="custom-radio"
                checked={settingsContext?.settings.precipitationUnit === "inches"}
                onChange={() => setPrecipUnit("inches")}
              />
              <span className="basis-60 h-[2rem] flex items-center">
                inches (in)
              </span>
            </label>
          </fieldset>
        </form>
      )}
    </>
  );
};

export default Settings;
