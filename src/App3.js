import React, {useState} from 'react';
import './App.css';

function App() {

    const [count,setAge]=useState(1);

    function calAge(event){
        //console.log(event.target.name);
        const {name,value}=event.target;
        //console.log(name);
        setAge((count)=> {
            if(name === "plus"){
                return count+1;
            }else{
                return count-1;
            }
        });
    }

    return (
        <div className="App">
          <header className="App-header">
            <h1>Use State Hook</h1>
            <h2>Count : {count}</h2>
            <button name="plus" onClick={calAge}>Increment(+)</button>
            <button name="minus" onClick={calAge}>Increment(-)</button>
            
          </header>
         </div>
    );  
}

export default App;