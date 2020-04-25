import React,{useState,useMemo} from 'react';
import './App.css';
import UseMemo from './components/useMemo';


function App(){

    const [i,setI]=useState(0);
    
    function onClickHandle(){
        setI(i+1);
    }

    const memo=useMemo(()=>{
        return <UseMemo />;
    },[i]);

    return (
    <div className="App">
      <header className="App-header">
        <h1>Use Memo Hook for Memoization </h1>
        <h3>I : {i}</h3>
        <button onClick={onClickHandle}>Increment I</button>
        <h3>Normal Render</h3>
        <UseMemo />
        <h3>Memo Render</h3>
        {memo}
      </header>
    </div> 
    )
}

export default App;