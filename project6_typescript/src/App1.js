import React,{useState, useEffect} from "react";
import "./App.css";
import MyComp from "./components/MyComp";


function App(){

    function onClickHandle(){
        alert("Click Me")
    }

    return (
        <div className="App">
        <header className="App-header">
            <h1>Learn Typescript by React</h1>
            <MyComp onClick={onClickHandle} str="Click"></MyComp>
        </header>
        </div>    
    );
}

export default App;
