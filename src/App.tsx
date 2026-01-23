import "./assets/fonts/fonts.css";
import "./App.css";
import LocationSearch from "./components/LocationSearch";
import WeatherProvider from "./contexts/weatherContext";
import WeatherInfo from "./components/WeatherInfo";
import DailyForcast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import Header from "./components/Header";
import { SettingsProvider } from "./contexts/settingsProvider";

function App() {
  return (
    <>
      <SettingsProvider>
        <WeatherProvider>
            <Header />
            <h1 className="hero-header">How's the sky looking today?</h1>
            <LocationSearch />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
              <div className="col-span-1 lg:col-span-2">
                <WeatherInfo />
                <DailyForcast />
              </div>
              <HourlyForecast />
            </div>
        </WeatherProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
