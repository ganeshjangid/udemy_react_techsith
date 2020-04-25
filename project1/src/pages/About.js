import React,{ useContext } from 'react'
import messageContext from './../context/messageContext';
import Outer from '../components/outer';

function About(){
    return <>
     <h2>Welcome About Us</h2>
     <h2>Message:{useContext(messageContext)}</h2>
     <Outer />
     </>
}

export default About;