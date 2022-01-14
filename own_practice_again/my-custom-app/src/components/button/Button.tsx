import React from "react";
import "../../styles/commons.scss";
import "./Button.scss";

function Button({ text, type }: any) {
  let localClass = "primary";
  if (type === "disabled") {
    localClass = "disabled";
  }

  const cls =
    `radius40 fontWeight700 fontSize25 bgYellow fontBlack pad8 width150 height100 ${localClass}`.trim();
  return (
    <>
      <div className="btnClass">
        <button className={cls}>{text}</button>
      </div>
    </>
  );
}

export default Button;
