import React from "react";

function item(props:any){
    return(
        <>
        <div className="row">
        <h3 key={props.keys} style={{margin:'2px'}}>{props.name}</h3>
        <button className="btnCount" onClick={()=>props.handleOnClick(props.keys)}>Remove</button>
        </div>

        </>
    )
}

export default item;
