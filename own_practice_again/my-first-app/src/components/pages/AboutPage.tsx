import React, { useContext } from "react";
import messageContext from "../../contexts/messageContext";
import Outer from "../outer";

function About() {
  return (
    <>
      <h1>Hello To About Page</h1>
      <h2>Message : {useContext(messageContext)}</h2>
      <Outer />
    </>
  );
}

export default About;
