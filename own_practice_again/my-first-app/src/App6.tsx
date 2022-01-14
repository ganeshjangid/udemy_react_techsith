import React, { useState, useEffect, useRef } from "react";
import "./App.css";
function App() {
  const nameRef: any = useRef();
  const ageRef: any = useRef();
  const marriedRef: any = useRef();
  const submitRef: any = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleKeyPress = (e: any) => {
    //console.dir(e.keyCode);

    if (e.keyCode === 13) {
      switch (e.target.id) {
        case "nameInput":
          ageRef.current.focus();
          break;
        case "ageInput":
          marriedRef.current.focus();
          break;
        case "marriedInput":
          submitRef.current.focus();
          break;
        default:
          nameRef.current.focus();
          break;
      }
    }
  };
  return (
    <>
      <h1>Use Ref</h1>
      <div className="form-field">
        <span>Name:</span>
        <input
          ref={nameRef}
          type="text"
          id="nameInput"
          onKeyDown={handleKeyPress}
        ></input>
      </div>
      <div className="form-field">
        <span>Age:</span>
        <span>
          <input
            ref={ageRef}
            type="text"
            id="ageInput"
            onKeyDown={handleKeyPress}
          ></input>
        </span>
      </div>
      <div className="form-field">
        <span>Married:</span>
        <span>
          <input
            ref={marriedRef}
            type="checkbox"
            onKeyDown={handleKeyPress}
            id="marriedInput"
          ></input>
        </span>
      </div>
      <div className="form-field">
        <span>
          <input
            ref={submitRef}
            type="button"
            value="Submit"
            onKeyDown={handleKeyPress}
          />
        </span>
      </div>
    </>
  );
}

export default App;
