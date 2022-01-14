import React, { useState } from "react";
import "./App.css";
import {
  Route,
  Link,
  NavLink,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import messageContext from "./contexts/messageContext";
import HomePage from "./components/pages/HomePage";
function App() {
  const [login, setLogin] = useState(false);
  const [message, setMessage] = useState("I am being shared");

  const handleLoginAndLogout = () => {
    setLogin(!login);
  };

  return (
    <messageContext.Provider value={[message, setMessage]}>
      <BrowserRouter>
        <h1>Learn Routing in React JS</h1>
        <ul>
          <li>
            <NavLink to={"/"} exact activeClassName="activeLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} exact activeClassName="activeLink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/user/Ganesh/Suthar"}
              exact
              activeClassName="activeLink"
            >
              User John Doe
            </NavLink>
          </li>
          <li>
            {/* {login.toString()} */}
            <button onClick={handleLoginAndLogout}>
              {login ? "Logout" : "Login"}
            </button>
          </li>
        </ul>

        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route
          exact
          path="/user/:fName/:lName"
          render={({ match }) => {
            return login ? (
              <h1>
                Hello Mr/Ms. {match.params.fName} {match.params.lName}
              </h1>
            ) : (
              <Redirect to="/"></Redirect>
            );
          }}
        ></Route>
      </BrowserRouter>
    </messageContext.Provider>
  );
}

export default App;
