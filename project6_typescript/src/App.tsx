import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './components/MyComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComp name="ganesh"></MyComp>
      </header>
    </div>
  );
}

export default App;
