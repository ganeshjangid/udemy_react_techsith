import React, { useReducer } from "react";
import "./App.css";

const initalState = {
  count: 0,
};

function reducerFunction(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case "PLUS":
      return { count: state.count + 1 };
    case "MINUS":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initalState);

  function handlePlusAndMinus(option: string) {
    dispatch({ type: option });
  }
  return (
    <>
      <h1>Learn use Reducer </h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => handlePlusAndMinus("PLUS")}>Plus Only</button>
      <button onClick={() => handlePlusAndMinus("MINUS")}>Minus Only</button>
    </>
  );
}

export default App;
