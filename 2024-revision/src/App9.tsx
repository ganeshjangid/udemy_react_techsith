import React, { useState } from 'react';
import './App.css';
import usePrevious from './hooks/usePrevious';


function App() {
const [age,setAge]=useState(21);
const previousAge=usePrevious(age);
  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024 (UsePrevious)
        </p>

        <p>Current Age: {age}</p>
        <p>Previous Age: {previousAge}</p>
        <p><button onClick={()=>setAge(age-1)}>Make me Younger </button></p>
      </header>
    </div>
  );
}

export default App;
