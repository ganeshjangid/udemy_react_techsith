import React, { useEffect } from "react";

let renderCnt = 0;

const Child = () => {
  useEffect(() => {
    renderCnt++;
  });

  return (
    <>
      <p>Render Count : {renderCnt}</p>
    </>
  );
};

export default Child;
