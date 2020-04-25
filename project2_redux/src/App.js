import React,{useReducer} from "react";
import "./App.css";

const initState={
    Count:0
}

function reducerFunction(state,action){
    switch (action.type) {
        case "INCREMENT":
            return {count:state.Count+1}    
        break;
        
        case "DECREMENT":
            return {count:state.Count-1} 
        break;
    
        default:
            return state; 
            break;
    }
}

function App(){

    const [state,dispatch]=useReducer(reducerFunction,initState)

    function plusOne(){
        dispatch({type:"INCREMENT"});
    }

    function minusOne(){
        dispatch({type:"DECREMENT"});
    }


    return (
        <div className="App">
        <header className="App-header">
            <h1>useReducer Hook</h1>
            <h3>Count: {state.count}</h3>
            <button className="remove-button" onClick={plusOne} >Plus</button>
            <button className="remove-button"  onClick={minusOne}>Minus</button>
        </header>
        </div>    
    );
}

export default App;
