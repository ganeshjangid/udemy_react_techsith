import React,{useState, useEffect} from "react";
import "./App.css";

const initList=[1,2,3,4,5,6,7,8,9];

function App(){
    const [list,setList]=useState(initList);
    const [dragItem,setDragItem]=useState(null);
    
    function onDragStartHandle(e,index){
        setDragItem(list[index]);
        e.dataTransfer.effectAllowed="move";
        e.dataTransfer.setData('text/html',e.dataTransfer.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode,20,20);
    }

    function onDragOverHandle(idx){
        const dragOverItem=list[idx];

        if(dragOverItem === dragItem){
            return;
        }

        const items=list.filter(item => item !== dragItem);
        items.splice(idx,0,dragItem);
        
        setList(items);
    }

    return (
        <div className="App">
        <header className="App-header">
            <h1>Dragable List Using React</h1>
            <h3>Drag And Drop Project</h3>
                <ul>
                   {
                       list.map((item,i)=>{
                           return <li key={i} onDragOver={()=> onDragOverHandle(i)} class='li-style'>
                           <div draggable onDragStart={(e)=>onDragStartHandle(e,i)}>{item}</div>
                           
                           </li>
                       })
                   }     
                </ul>


        </header>
        </div>    
    );
}

export default App;
