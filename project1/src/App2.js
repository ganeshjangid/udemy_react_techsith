import React from 'react';
import './App.css';
import NameTag from './components/nameTag';



const styleName={color:"pink",textDecoration:"underline"};
const styleMadan={border:"2px dotted yellow",fontSize:"20px"};


const makeGreen=BaseComponent => props=>{
    const addGreen={
      style:{
        color:"green"
      }
    }

    const newProps={
      ...props,...addGreen
    }

    return <BaseComponent {...newProps} />  
}

const GreenTag=makeGreen(NameTag);

function App() {
  //const styleName={color:"pink",textDecoration:"underline"};  
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color:"red",border:"2px solid green"}}>Hello World</h1>
        <h2 style={styleName}>Ganesh Suthar</h2>
        <h2 style={{...styleName,...styleMadan}}>Madanlal Suthar</h2>
        <h1 className="test">Test My Name</h1>
        <NameTag firstName="Test" lastName="Components1"/>
        <NameTag  firstName="Test" lastName="Components2 "/>
        <NameTag  firstName="Test" lastName="Components3 "/>
        <NameTag />
        <GreenTag  firstName="Test" lastName="Components4 "/>
      </header>
    </div>
  );
}

export default App;
