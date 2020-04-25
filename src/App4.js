import React, { useState } from 'react';
import './App.css';
import NameTag from './components/nameTag';

const initName=[
    {firstName:"Test1",lastName:"Components1"},
    {firstName:"Test2",lastName:"Components2"},
    {firstName:"Test3",lastName:"Components3"},
    {firstName:"Test4",lastName:"Components4"}

];

function App() {
    const [name,setNames]=useState(initName);
    //console.log(name);
    
    return (
      <div className="App">
        <header className="App-header">
        <h1>Name List</h1>
          {name.map((val,i)=>{
               //console.log(val);
            return <NameTag 
            key={i}
            firstName={val.firstName}
            lastName={val.lastName}/>
          
          })}  


        </header>
      </div>
    );
  }


export default App;


