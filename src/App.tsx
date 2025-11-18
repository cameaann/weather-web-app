import "./assets/fonts/fonts.css";
import "./App.css";
import LocationSearch from "./components/LocationSearch";
import WeatherProvider from "./weatherContext";
import WeatherInfoCard from "./components/WeatherInfoCard";

function App() {
  return (
    <>
      <WeatherProvider>
        <h1 className="hero-header">How's the sky looking today?</h1>
        <LocationSearch />
        <WeatherInfoCard/>
      </WeatherProvider>
    </>
  );
}

export default App;
