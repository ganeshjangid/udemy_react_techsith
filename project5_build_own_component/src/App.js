import React,{useState, useEffect} from "react";
import "./App.css";

import Button from './component/Button/Button';

function App(){


    return (
        <div className="App">
        <header className="App-header">
            <h1>Build Own Component Using React</h1>
             <Button 
                text="Click Me"

             />   
        </header>
        </div>    
    );
}

export default App;
