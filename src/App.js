import "./App.css";
import { MapView } from "./components/MapView";

function App() {
  return (
    <div className="container">
      <div className="box-form"></div>
      <div className="box-map">
        <MapView />
      </div>
    </div>
  );
}

export default App;
