import React, { useEffect, useState, useContext } from "react";
import { getCurrentWeather, getLocation } from "../services/getDataService";

import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

import { WeatherContext } from "../contexts/weatherContext";
import type { SettingContextType, WeatherContextType } from "../types";
import Button from "./custom/Button";
import { SettingContext } from "../contexts/settingsContext";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";

const API_KEY = import.meta.env.VITE_API_KEY;

type PlaceProperties = {
  formatted: string;
  lat: number;
  lon: number;
  city: string;
  country?: string;
  state?: string;
};

export interface ILocation {
  properties: PlaceProperties;
}

const LocationSearch = () => {
  const [selectedLocation, setLocation] = useState<PlaceProperties | null>(
    null,
  );
  const [place, setPlace] = useState<string>("");

  const { setWeatherData, setLoading, setError, error } = useContext(
    WeatherContext,
  ) as WeatherContextType;
  const { settings } = useContext(SettingContext) as SettingContextType;

  const onPlaceSelect = (place: ILocation) => {
    if (!place) {
      return;
    }
    const location = {
      formatted: place.properties.formatted,
      lat: place.properties.lat,
      lon: place.properties.lon,
      city: place.properties.city,
      country: place.properties.country,
      state: place.properties.state,
    };
    setLocation(location);
  };

  useEffect(() => {
    if (selectedLocation) {
      setLoading(true);
      void (async () => {
        try {
          const res = await getCurrentWeather(
            selectedLocation.lat,
            selectedLocation.lon,
            settings.units,
            settings.temperatureUnit,
          );

          const weather = res;
          const weatherData = {
            city: selectedLocation.city,
            country: selectedLocation.country,
            ...weather,
          };

          setWeatherData(weatherData);
        } catch (error) {
          if (error instanceof Error) {
            setError({
              type: "general",
              message:
                "We couldn’t connect to the server (API error). Please try again in a few moments.",
            });
          } else {
            console.log(error);
          }
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [selectedLocation, settings, setWeatherData, setLoading, setError]);

  const onUserInput = (input: string) => {
    setLocation(null);
    setWeatherData(null);
    setError(null);
    setPlace(input);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (place !== "") {
      const location = await getLocation(place);
      if (location === undefined || location === null) {
        setError({ type: "no-results", message: "No search result found!" });
        setLocation(null);
        return;
      }

      if (location && location.length > 0) {
        const selected = location[0];

        setLocation({
          formatted: selected.formatted,
          lat: selected.lat,
          lon: selected.lon,
          city: selected.city,
          country: selected.country,
          state: selected.state,
        });
      } else {
        console.log("LOcation", location);
        setError({ type: "no-results", message: "No search result found" });
      }
    }
  };

  return (
    <form
      className="my-[4.8rem] flex flex-col justify-center md:flex-row gap-[2rem]"
      onSubmit={handleSubmit}
    >
      <div className="w-[100%] md:w-[50rem] flex flex-col relative">
        <GeoapifyContext
          apiKey={API_KEY}
          className="w-[100%] md:w-[50rem] flex flex-col relative"
        >
          <MagnifyingGlassIcon className="w-6 h-6 absolute top-[1.2rem] left-[1.5rem] z-20" />
          <GeoapifyGeocoderAutocomplete
            value={selectedLocation ? selectedLocation.formatted : place}
            placeholder="Search for a place"
            placeSelect={onPlaceSelect}
            onUserInput={onUserInput}
            type="city"
            skipIcons={true}
          />
        </GeoapifyContext>
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
  );
};

export default LocationSearch;
