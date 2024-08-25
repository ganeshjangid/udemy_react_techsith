import React from 'react';
import './App.css';
//import FirstProject from './project1';
import NameTag from './components/nameTag';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024
        </p>
        {/* <FirstProject /> */}
        <NameTag name="Ganesh"/>
        <NameTag name="Paresh"/>
        <NameTag name="Kamlesh"/>
        <NameTag name="Nagesh"/>
        <NameTag name=""/>    
      </header>
    </div>
  );
}

export default App;
