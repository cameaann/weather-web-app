import { useContext, useState, useEffect, useRef } from "react";
import { SettingContext } from "../contexts/settingsContext";
import settingsIcon from "../assets/images/icon-units.svg";
import { type SettingsType } from "../types";

const Settings = () => {
  const { settings, setSettings } = useContext(SettingContext);
  const [showSettings, setShowSettings] = useState(false);
  const [tempUnit] = useState(settings.temperatureUnit || "C");
  const [windUnit] = useState(settings.windSpeedUnit || "km/h");
  const [precipUnit] = useState(
    settings.precipitationUnit || "millimeters"
  );
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const label = () => (
    <button className="flex gap-3 items-center  bg-neutral-800 p-3 rounded-lg cursor-pointer select-none" type="button">
      <i>
        <img src={settingsIcon} alt="Units" />
      </i>
      Units
       <svg
        className={`w-6 h-6 transition-transform duration-300 ${
          showSettings ? "rotate-180" : ""
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
  const units = settings.units === "metric" ? "Imperial" : "Metric";

  const handleSwitchUnits = () => {
    const newUnits = settings.units === "metric" ? "imperial" : "metric";
    const newSettings: SettingsType = {
      ...settings,
      units: newUnits,
      windSpeedUnit: newUnits === "metric" ? "km/h" : "mph",
      precipitationUnit: newUnits === "metric" ? "millimeters" : "inches",
      temperatureUnit: newUnits === "metric" ? "C" : "F",
    };
    setSettings(newSettings);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSettings: SettingsType = {
      units: units,
      temperatureUnit: tempUnit,
      windSpeedUnit: windUnit,
      precipitationUnit: precipUnit,
    };
    setSettings(newSettings);
    setShowSettings(false);
  };

  // const handleTempUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTempUnit(e.target.value);
  //   setSettings({
  //     ...settings,
  //     temperatureUnit: e.target.value,
  //   });
  // };

  return (
    <div ref={settingsRef}>
      <div onClick={() => setShowSettings(!showSettings)}>{label()}</div>

      {showSettings && (
        <form
          className="absolute w-[21.4rem] right-[1rem] top-30 p-5 rounded-lg bg-neutral-800 text-left z-10 border-1 border-solid border-neutral-800"
          onSubmit={handleSubmit}
        >
          <button
            className="text-lg text-left font-bold"
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
                checked={settings.temperatureUnit === "C"}
                onChange={(handleSwitchUnits)}
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
                checked={settings.temperatureUnit === "F"}
                onChange={handleSwitchUnits}
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
                checked={settings.windSpeedUnit === "km/h"}
                onChange={handleSwitchUnits}
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
                checked={settings.windSpeedUnit === "mph"}
                onChange={handleSwitchUnits}
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
                checked={settings.precipitationUnit === "millimeters"}
                onChange={handleSwitchUnits}
              />
              <span className="basis-60 h-[2rem] flex items-center">
                Millimeters (mm)
              </span>
            </label>
            <label className="radio-label" htmlFor="inches">
              <input
                type="radio"
                id="inches"
                name="precipitation"
                value="in"
                className="custom-radio"
                checked={settings.precipitationUnit === "inches"}
                onChange={handleSwitchUnits}
              />
              <span className="basis-60 h-[2rem] flex items-center">
                Inches (in)
              </span>
            </label>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default Settings;
