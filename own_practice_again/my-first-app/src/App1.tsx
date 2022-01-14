import React from "react";
import "./App.css";
import NameTag from "./components/nameTag";

function App() {
  return (
    <>
      <NameTag name="Ganesh" Age="28"/>
      <NameTag name="Madanlal" Age="60"/>
      <NameTag name="Tarachand" Age="85"/>
      <NameTag name="Suthar" Age="29"/>
    </>
  );
}

export default App;
