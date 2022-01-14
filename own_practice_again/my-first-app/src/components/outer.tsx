import React from "react";
import Inner from "./inner";

function outer() {
  return (
    <>
      <h3>Hello Outer Component</h3>
      <Inner />
    </>
  );
}

export default outer;
