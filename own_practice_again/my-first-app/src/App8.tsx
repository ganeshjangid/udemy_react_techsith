import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(Date);

  useEffect(() => {
    let handleTime = setInterval(() => {
      setTime(Date);
    }, 3000);

    return () => {
      clearInterval(handleTime);
    };
  }, [time]);

  return (
    <>
      <h1>Use Effect Example:</h1>
      <h3>Date : {time}</h3>
      <h3>
        <input type="text"></input>
      </h3>
    </>
  );
}

export default App;
