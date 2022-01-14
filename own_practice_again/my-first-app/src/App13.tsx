import React from "react";
import "./App.css";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/redux/homePage";
import DepositPage from "./components/pages/redux/depositPage";
import WithdrawPage from "./components/pages/redux/withdrawPage";

function App() {
  return (
    <>
      <h1>Learn Redux </h1>
      <BrowserRouter>
        <ul>
          <li className="li-style">
            <NavLink
              to="/"
              exact
              activeClassName="activeLink"
              className="app-link"
            >
              Home
            </NavLink>
          </li>
          <li className="li-style">
            <NavLink
              to="/deposit"
              className="app-link"
              exact
              activeClassName="activeLink"
            >
              Deposit
            </NavLink>
          </li>
          <li className="li-style">
            <NavLink
              to="/withdraw"
              className="app-link"
              exact
              activeClassName="activeLink"
            >
              Withdraw
            </NavLink>
          </li>
        </ul>
        <br />
        <br />
        <Route exact path="/" component={HomePage} />
        <Route path="/deposit" component={DepositPage} />
        <Route path="/withdraw" component={WithdrawPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
