import "./assets/fonts/fonts.css";
import "./App.css";
import WeatherProvider from "./contexts/weatherProvider";
import { SettingsProvider } from "./contexts/settingsProvider";
import { AppContent } from "./components/AppContent";

function App() {
  return (
    <SettingsProvider>
      <WeatherProvider>
        <AppContent />
      </WeatherProvider>
    </SettingsProvider>
  );
}

export default App;
