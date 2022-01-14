import React from "react";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Own Custom Component</h1>
        <Button text="Click Me" type="disabled" />
      </header>
    </div>
  );
}

export default App;
