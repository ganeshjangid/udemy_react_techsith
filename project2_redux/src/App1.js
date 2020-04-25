import React from "react";
import "./App.css";
import { BrowserRouter,Route,NavLink } from "react-router-dom";

import HomePage from "./pages/Home";
import DepositPage from "./pages/Deposit";
import WithdrawPage from "./pages/Withdraw";

function App(){
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Learn Redux and React</h1>

        <ul  className="ul-style">
          <li  className="li-style"><NavLink to="/" exact className="Link-Style" activeClassName="link-active-style">Home</NavLink></li>

          <li  className="li-style"><NavLink to="/deposit" exact className="Link-Style" activeClassName="link-active-style">Deposit</NavLink></li>

          <li  className="li-style"><NavLink to="/withdraw" exact className="Link-Style" activeClassName="link-active-style">Withdraw</NavLink></li>
        </ul>

        <Route path="/" exact component={HomePage} />
        <Route path="/deposit" exact component={DepositPage}/>
        <Route path="/withdraw" exact component={WithdrawPage}/>

      </header>
    </div>      
    </BrowserRouter>
    );
}

export default App;
