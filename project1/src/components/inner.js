import React,{useContext} from "react";
import messageContext from "../context/messageContext";

function Inner(){

    const [msg,setMsg]=useContext(messageContext);    

    return (
        <>
        <h3>Inner:</h3>
        <button onClick={()=>{setMsg(Math.random().toString())}}>Change Msg</button>
        </>
    )
}

export default Inner;