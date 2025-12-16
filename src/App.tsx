import "./assets/fonts/fonts.css";
import "./App.css";
import LocationSearch from "./components/LocationSearch";
import WeatherProvider from "./weatherContext";
import WeatherInfo from "./components/WeatherInfo";
import DailyForcast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import Header from "./components/Header";
function App() {
  return (
    <>
      <WeatherProvider>
        <Header />
        <h1 className="hero-header">How's the sky looking today?</h1>
        <LocationSearch />
        <div className="grid md:grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-1 md:col-span-2">
            <WeatherInfo />
            <DailyForcast />
          </div >
          <HourlyForecast />
        </div>
      </WeatherProvider>
    </>
  );
}

export default App;
