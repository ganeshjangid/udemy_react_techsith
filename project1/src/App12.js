import React,{useState} from 'react';
import './App.css';
import UsePrevious from './hooks/usePrevious';

function App(){

    const [age,setAge] =useState(21);
    const previousAge=UsePrevious(age);
    return (
        <div className="App">
          <header className="App-header">
            <h1>Use Previous State Hook  </h1>
            <h2>Current Age:{age}</h2>      
            <h2>Previous Age: {previousAge}</h2>  
            <button onClick={()=>setAge(age+1)}>Make Me younger</button>
          </header>
        </div> 
        )
}

export default App;