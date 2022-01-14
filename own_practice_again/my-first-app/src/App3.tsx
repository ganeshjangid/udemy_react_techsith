import React,{useState} from "react";
import "./App.css";


function App() {
  const [cnt,setCnt]=useState(0);
  const handleInAndDec=(e:any)=> (e.target.value === "plus") ? setCnt(cnt+1) : setCnt(cnt-1);

  return (
    <>
      <h1>Use State For Increment and Decrement</h1>

      <button  onClick={handleInAndDec} value="plus">+</button>
      <button onClick={handleInAndDec} value="minus">-</button>
    

      <h3>Value = {cnt}</h3>
    </>
  );
}

export default App;
