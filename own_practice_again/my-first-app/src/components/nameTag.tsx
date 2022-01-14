import React from "react";

// const interStyle = {
//     color: "red",
//     textDecoration: "underline",
//     fontSize: "35px",
//   };
//   const textChange = { background: "yellow" };
  
function NameTag({name,Age}:any){

return <>
      <h1>{name} And Age : {Age}</h1>
</>
}

export default NameTag;