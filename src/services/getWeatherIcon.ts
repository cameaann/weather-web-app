import clearSky from "../assets/images/icon-sunny.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import overcast from "../assets/images/icon-overcast.webp";
import fog from "../assets/images/icon-fog.webp";
import rain from "../assets/images/icon-rain.webp";
import snow from "../assets/images/icon-snow.webp";
import thunderstorm from "../assets/images/icon-storm.webp";

export const getWeatherIcon = (code: number): string => {
  switch (code) {
    case 0:
      return clearSky; // Clear sky
    case 1:
      return clearSky; // Mainly clear
    case 2:
      return partlyCloudy; // Partly cloudy
    case 3:
      return overcast; // Overcast
    case 45:
    case 48:
      return fog; // Fog and depositing rime fog
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return rain; // All rain variations
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return snow; // All snow variations
    case 95:
    case 96:
    case 99:
      return thunderstorm; // All thunderstorm variations
    default:
      return clearSky; // Default fallback
  }
};

export const getWeatherDescription = (code: number): string => {
  switch (code) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
    case 48:
      return "Foggy";
    case 51:
      return "Light drizzle";
    case 53:
      return "Moderate drizzle";
    case 55:
      return "Dense drizzle";
    case 61:
      return "Slight rain";
    case 63:
      return "Moderate rain";
    case 65:
      return "Heavy rain";
    case 71:
      return "Slight snow";
    case 73:
      return "Moderate snow";
    case 75:
      return "Heavy snow";
    case 77:
      return "Snow grains";
    case 80:
      return "Slight rain showers";
    case 81:
      return "Moderate rain showers";
    case 82:
      return "Violent rain showers";
    case 85:
      return "Slight snow showers";
    case 86:
      return "Heavy snow showers";
    case 95:
      return "Thunderstorm";
    case 96:
      return "Thunderstorm with hail";
    case 99:
      return "Severe thunderstorm";
    default:
      return "Unknown";
  }
};