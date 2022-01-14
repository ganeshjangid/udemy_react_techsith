import React, { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [income, setIncome] = useState("high");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`State name ${name} And Income :${income}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Name:</span>
          <span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </span>
        </div>
        <div>
          <span>Income:</span>
          <span>
            <select value={income} onChange={(e) => setIncome(e.target.value)}>
              <option value="high">High</option>
              <option value="mid">Mid</option>
              <option value="low">Low</option>
            </select>
          </span>
        </div>
        <div>
          <span>
            <input type="submit" value="Submit" />
          </span>
        </div>
      </form>
    </>
  );
}

export default App;
