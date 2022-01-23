import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />;
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
