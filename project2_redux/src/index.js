import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore,combineReducers,applyMiddleware } from "redux";
import balanceReducer from "./store/balanceReducer";
import loadReducer from "./store/loadReducer";

import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(combineReducers({
    balanceReducer,
    loadReducer

}),applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
