import React, { useState } from 'react';
import './App.css';
import Item from './components/item';
import useList from './hooks/useList';
const initName=[
  {name:"Ganesh"},
  {name:"Nagesh"},
  {name:"Kumar"},
  {name:"Suthar"},

]
function App() {
const lists=useList(initName);
  const HandleOnClick=(selectedKey:number)=>{
      lists.remove(selectedKey);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024
        </p>  
        {
          lists.item.map((val: { name: string; },ind: any)=>{
            return (
              <Item name={val.name}  keys={ind} handleOnClick={HandleOnClick}></Item>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
