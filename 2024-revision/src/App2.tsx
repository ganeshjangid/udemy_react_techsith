import React from 'react';
import './App.css';
//import CountCal from './components/countCal';
import List from './components/list';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024
        </p>
    {/* <CountCal /> */}
    <List></List>
      </header>
    </div>
  );
}

export default App;
