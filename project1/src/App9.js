import React, {useState, useEffect} from 'react';
import './App.css';


let initXY={
    x:null,
    y:null
}    

function App() {

    const [time,setTime]=useState(Date);
    const [XY,setXY]=useState(initXY);

    useEffect(()=>{
        let handle=setInterval(()=>{
            setTime(Date);
        },1000);

        return ()=>{
            clearInterval(handle);
        };
    });

    function handleMouseMove(e){
        setXY({
            x:e.clientX,
            y:e.clientY
        })
    };

    useEffect(()=>{
        window.addEventListener("mousemove",handleMouseMove);

        return ()=>{
            window.removeEventListener("mousemove",handleMouseMove);
        }
    });

    return (
        <div className="App">
            <header className="App-header">
                <h1>Use Effect Example</h1>
                <h3>Date & Time : {time}</h3>
                <h4>{`X:${XY.x} & Y: ${XY.y} `}</h4>
            </header>
        </div>
    );
}

export default App;
