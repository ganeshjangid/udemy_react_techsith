import React,{ useContext } from 'react'
import messageContext from './../context/messageContext';

function Home(){
    return <>
     <h2>Welcome Home</h2>
     <h2>Message:{useContext(messageContext)}</h2>
     </>
}

export default Home;