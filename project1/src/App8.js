import React,{useState,useEffect} from 'react';
import './App.css';

let born=false;
function App(){
    const [growth,setGrowth]=useState(0);
    const [nirvana,setNirvana]=useState(false);

    useEffect(()=>{
        if(born){
            document.title="Nirvana Attained";
        }
    },[nirvana]);

    useEffect(()=>{
        console.log("I am Born Now");
    },[]);

    useEffect(()=>{
        if(born){
            console.log("Mistake And Learn");
        }else{
            born=true;
        }

        if(growth > 70){
            setNirvana(true) ;
        }
        
    })

    function growthHandle(){
        setGrowth(growth+10);
    }

    return (
    <div className="App">
      <header className="App-header">
        <h1>Use Effect </h1>
        <h3>growth : {growth}</h3>
        <button onClick={growthHandle}>Learn And Growth</button>
      </header>
    </div> 
    )
}

export default App;