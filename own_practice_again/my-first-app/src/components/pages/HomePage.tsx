import React, { useContext } from "react";
import messageContext from "../../contexts/messageContext";

function HomePage() {
  return (
    <>
      <h1>Hello To Home Page</h1>
      <h2>Message : {useContext(messageContext)}</h2>
    </>
  );
}

export default HomePage;
