import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

const [time,setTime]=useState(Date);

useEffect(()=>{
  let handleTime=setInterval(()=>setTime(Date),1000);
  return ()=>clearInterval(handleTime);
});
  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024 (UseRef)
        </p>
    <div>
      Date & Time : {time}
    </div>

      </header>
    </div>
  );
}

export default App;

