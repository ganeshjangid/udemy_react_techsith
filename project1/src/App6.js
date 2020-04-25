import React, { useState } from 'react';
import './App.css';

function App(){

    const [name,setName]=useState("");
    const [income,setIncome]=useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleIncome(e){
        setIncome(e.target.value);
    }

    function handleOnSubmit(event){
        event.defaultPrevent();
        console.log(`State= ${name} , Income= ${income}`);
        
    }

    return (
        <div className="App">
          <header className="App-header">
            <form onSubmit={handleOnSubmit}>
                <div>
                    <span>Name :</span>
                    <input type="text" value={name} onChange={handleNameChange}></input>
                </div>
                
                <div>
                    <span>Income :</span>
                    <select vlaue={income} onChange={handleIncome}>
                        <option value="high">High</option>
                        <option value="mid">Mid</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <input type="submit" value="Submit"/>
            </form>
          </header>
        </div>      
        );
}

export default App;