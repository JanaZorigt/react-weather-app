import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container container-fluid">
        <Weather defaultCity="Chicago" />
      </div>
      <footer>
        <a
          href="https://github.com/JanaZorigt/react-weather-app"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/JanaZorigt"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jana Zorigt
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
