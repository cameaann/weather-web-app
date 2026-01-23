import React, { useEffect, useState, useContext } from "react";
import { getLocation, getCurrentWeather } from "../services/getDataService";

import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import SearchSuggestion from "./SearchSuggestion";
import { WeatherContext } from "../contexts/weatherContext";
import type { SettingContextType, WeatherContextType } from "../types";
import Button from "./custom/Button";
import { SettingContext } from "../contexts/settingsContext";

export interface LocationSuggestion {
  displayName: string;
  lat: number;
  lon: number;
  city: string;
  country?: string;
  state?: string;
}

const LocationSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [selectedLocation, setLocation] = useState<LocationSuggestion | null>(
    null
  );
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const { setWeatherData, setLoading } = useContext(WeatherContext) as WeatherContextType;
  const { settings } = useContext(SettingContext) as SettingContextType;

  useEffect(() => {
    try {
      if (query.length === 0) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      } else {
        getLocation(query).then((res) => {
          if (res && res.length > 1) {
            setSuggestions(res);
            setShowSuggestions(true);
          }
        });
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  }, [query]);

  useEffect(() => {
    if (selectedLocation) {
      setLoading(true);
      setTimeout(() => {
        try {
          getCurrentWeather(
            selectedLocation.lat,
            selectedLocation.lon,
            settings.units,
            settings.temperatureUnit
          ).then((res) => {
            console.log("From Second useEffect", res);
            const weather = res;
            const weatherData = {
              city: selectedLocation.city,
              country: selectedLocation.country,
              ...weather,
            };

            setWeatherData(weatherData);
          });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
        setLoading(false);
      }, 2000);
    }
  }, [selectedLocation, settings]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (event.key === "Enter" && highlightedIndex >= 0) {
      event.preventDefault();
      setLocation(suggestions[highlightedIndex]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="my-[4.8rem]">
      <form className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 justify-center">
        <div className="w-[100%] md:w-[50rem] flex flex-col relative">
          <label className="input h-[4rem] w-full rounded-xl px-[2.4rem]  bg-neutral-700 border-none focus-visible:outline-none focus-within:outline-none border-none">
            <MagnifyingGlassIcon className="w-6 h-6" />
            <input
              type="search"
              className="grow py-[1.6rem] w-full h-[4rem] text-xl focus:outline-none focus-visible:outline-none focus-within:outline-none bg-neutral-700 border-none"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              placeholder="Search for a place..."
              tabIndex={0}
            />
          </label>
          {showSuggestions && suggestions.length > 0 && (
            <div className="dropdown dropdown-open">
              <SearchSuggestion
                suggestions={suggestions}
                setLocation={(location: LocationSuggestion) => {
                  setLocation(location);
                  console.log("location nnn", selectedLocation);
                  setShowSuggestions(false);
                }}
                highlightedIndex={highlightedIndex}
                setHighlightedIndex={setHighlightedIndex}
              />
            </div>
          )}
        </div>

        <Button
          type="submit"
          name="search"
          className="btn"
          variant="primary"
          size="xl"
          aria-label="Search"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default LocationSearch;
