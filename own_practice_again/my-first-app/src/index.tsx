import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import BalanceReducer from "./store/balanceReducer";
import LoanReducer from "./store/loanReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    BalanceReducer,
    LoanReducer,
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
