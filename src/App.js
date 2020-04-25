import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import messageContext  from './context/messageContext';



function App() {
  const [logIn, setLogIn] = useState(false);
  const [age, setAge] = useState(null);
  const [msg,setMsg]=useState("I am beign Shared");



  function onClickHandle() {
    setLogIn(!logIn);
  }

  function onchangeHandle(e){
    setAge(e.target.value);
  }

  return (
    <BrowserRouter>
    <messageContext.Provider value={[msg,setMsg]}>
      <div className="App">
        <header className="App-header">
          <h2>Setting Up Routes</h2>

          <ul className="ul-style">
            <li className="li-style">
              <NavLink
                to="/"
                exact
                className="Link-Style"
                activeClassName="link-active-style"
              >
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                to="/about"
                exact
                className="Link-Style"
                activeClassName="link-active-style"
              >
                About Us
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                to="/user/ganesh/suthar"
                exact
                className="Link-Style"
                activeClassName="link-active-style"
              >
                User Ganesh Suthar
              </NavLink>
            </li>
          </ul>

        <Prompt when={logIn && !age} message={(location)=>{
          return location.pathname.startsWith('/user') ? true : "Are You Sure Want to Go?"
        }}></Prompt>  

          <button onClick={onClickHandle} className="remove-button">
            {logIn ? "Logout" : "LogIn"}
          </button>

          <Route
            path="/"
            exact
            component={HomePage}
          ></Route>

          <Route path="/about" exact component={AboutPage}></Route>
          <Route
            path="/user/:fName/:lName"
            exact
            render={({ match }) => {
              return logIn ? (
                <h2>
                  <p>Age : {age}</p>
                  <input type="text" defaultValue={age} onChange={onchangeHandle}></input>
                  Welcome {match.params.fName} {match.params.lName}
                </h2>
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>
        </header>
      </div>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
