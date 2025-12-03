import "./assets/fonts/fonts.css";
import "./App.css";
import LocationSearch from "./components/LocationSearch";
import WeatherProvider from "./weatherContext";
import WeatherInfo from "./components/WeatherInfo";
import DailyForcast from "./components/DailyForecast";

function App() {
  return (
    <>
      <WeatherProvider>
        <h1 className="hero-header">How's the sky looking today?</h1>
        <LocationSearch />
        <WeatherInfo />
        <DailyForcast />
      </WeatherProvider>
    </>
  );
}

export default App;
