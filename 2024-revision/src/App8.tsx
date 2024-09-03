import React, { useState,useMemo } from 'react';
import './App.css';
import Child from './child';

function App() {
const [i,setI]=useState(0);

const handleIncrement=()=>{
  setI(i+1);
}

const memoChild=useMemo(()=>{
  return <Child />
},[i])
  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024 (UseMemo)
        </p>
        <p>i {i}</p>
        <p><button onClick={handleIncrement}>Increment 1</button></p>
          <h3>Normal Render</h3>
          <Child/>
          <h3>Memo Child</h3>
          {memoChild}
      </header>
    </div>
  );
}

export default App;
