import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import About from './components/pages/about';
import User from './components/pages/user';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const setActiveColor = (isActive: any) => {
    return ({ color: isActive ? 'red' : 'green' })
  }
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p className='startHeading'>
            Start Revision from 2024 (UsePrevious)
          </p>
          <div>
            <ul>
              <li><NavLink to="/" className='appLink' style={({ isActive }) => setActiveColor(isActive)}>Home</NavLink></li>
              <li><NavLink to="/about" className='appLink' style={({ isActive }) => setActiveColor(isActive)}>About</NavLink></li>
              <li><NavLink to="/user/Ganesh" className='appLink' style={({ isActive }) => setActiveColor(isActive)}>User</NavLink></li>
            </ul>
          </div>
          <div>
            {loggedIn ? <button onClick={() => setLoggedIn(!loggedIn)}>Logout</button> : <button onClick={() => setLoggedIn(!loggedIn)}>Login</button>}

          </div>
          <Routes>
            <Route path='/' Component={Home} ></Route>
            <Route path='/about' Component={About} ></Route>
            <Route path='/user/:name' element={<User loggedIn={loggedIn} />} ></Route>
          </Routes>

        </header>
      </div></BrowserRouter>

  );
}

export default App;
