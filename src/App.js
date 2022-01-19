import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <Weather cityName="Tampa" />
      </header>
    </div>
  );
}

export default App;
