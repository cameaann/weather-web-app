import "./assets/fonts/fonts.css";
import "./App.css";
import LocationSearch from "./components/LocationSearch";

function App() {
  return (
    <>
      <h1 className="hero-header">How's the sky looking today?</h1>

      <LocationSearch />
    </>
  );
}

export default App;
