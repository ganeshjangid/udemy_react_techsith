import React, { useState } from 'react';
import './App.css';

function App() {
  const [name,setName]=useState('');
  const [income,setIncome]=useState('');

  const handleSubmitForm=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setName(name);;
    setIncome(income);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024
        </p>  
        <form onSubmit={(e)=>handleSubmitForm(e)}>
          <div>
            <span>Name:</span>
            <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          
          <div>
            <span>Income:</span>
           <select value={income} onChange={(e)=>setIncome(e.target.value)}>
            <option value="High">High</option>
            <option value="Med">Meduum</option>
            <option value="Low">Low</option>
           </select>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>

      </header>
    </div>
  );
}

export default App;
