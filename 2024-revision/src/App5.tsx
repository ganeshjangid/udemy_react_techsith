import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const marriedRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(nameRef.current){
      nameRef.current.focus();
    }

  }, []);

  const handleKeyPress=(e: { keyCode: any; target:any })=>{
    console.log(e.keyCode);
    if(e.keyCode === 13){
      if (e.target.id === "nameInput" && ageRef.current ) {
        ageRef.current.focus();
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024 (UseRef)
        </p>
        <div>
          <span>Name:</span>
          <input ref={nameRef} type='text' id="nameInput" placeholder='Enter Name' onKeyDown={handleKeyPress} />
        </div>
        <div>
          <span>AGe:</span>
          <input type='text' ref={ageRef} placeholder='Enter Age' onKeyDown={handleKeyPress}/>
        </div>
        <div>
          <span>Married:</span>
          <input type="checkbox" ref={marriedRef} onKeyDown={handleKeyPress} />
        </div>
        <div>
          <input type="button" ref={submitRef} value="Submit" onKeyDown={handleKeyPress}/>
        </div>


      </header>
    </div>
  );
}

export default App;
