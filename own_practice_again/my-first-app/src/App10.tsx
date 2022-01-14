import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import Child from "./components/child";

function App() {
  const [i, setI] = useState(0);

  function handleOnclick() {
    setI(i + 1);
  }

  const memoChild = useMemo(() => {
    return <Child></Child>;
  }, [i]);

  return (
    <>
      <h1>Use Memo Example:</h1>
      <h3>i : {i}</h3>
      <button onClick={handleOnclick}>Increment I</button>

      <h3>Normal Render</h3>
      <Child />

      <h3>Memo Render</h3>
      {memoChild}
    </>
  );
}

export default App;
