import React, { useEffect, useState } from "react";
import "./App.css";

let born = false;
function App() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect(() => {
    if (born) {
      document.title = "Nirvana Attained";
    }
  }, [nirvana]);

  useEffect(() => {
    console.log("I am Born.");
  }, []);

  useEffect(() => {
    if (born) {
      console.log("Make Mistake and Learn");
    } else {
      born = true;
    }

    if (growth >= 80) {
      setNirvana(true);
    }
  });

  function handleGrowth() {
    setGrowth(growth + 10);
  }

  return (
    <>
      <h1>Use Effect</h1>
      <h3>Growth : {growth}</h3>
      <button onClick={handleGrowth}>Learn And Growth</button>
    </>
  );
}

export default App;
