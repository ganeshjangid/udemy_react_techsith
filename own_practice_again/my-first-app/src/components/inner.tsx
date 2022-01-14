import React, { useContext } from "react";
import messageContext from "../contexts/messageContext";

function Inner() {
  const [message, setMessage] = useContext(messageContext);
  return (
    <>
      <h4>Hello inner Component</h4>
      <button onClick={() => setMessage(Math.random().toString())}>
        Click Me
      </button>
    </>
  );
}

export default Inner;
