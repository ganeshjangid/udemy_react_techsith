import React, { useEffect,useRef } from 'react';
import './App.css';

function App() {
  const nameRef=useRef();
  const ageRef=useRef();
  const marriedRef=useRef();
  const submitRef=useRef();

  useEffect(()=>{

  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024 (UseRef)
        </p>  
          <div>
            <span>Name:</span>
            <input ref={nameRef} type='text' placeholder='Enter Name'/>
          </div>
          <div>
            <span>AGe:</span>
            <input type='text' ref={ageRef} placeholder='Enter Age'/>
          </div>
          <div>
            <span>Married:</span>
            <input type="checkbox" ref={marriedRef} />
          </div>
          <div>
            <input type="button"  ref={submitRef} value="Submit" />
          </div>


      </header>
    </div>
  );
}

export default App;
