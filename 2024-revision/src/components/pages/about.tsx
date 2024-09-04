import React, { useContext } from 'react';
import { messageContext } from '../Contexts/messageContext';

function About() {
  return (
    <>
      <h1>
        Welcome to About Page
      </h1>
      <h2>Message: {useContext(messageContext)} </h2>
    </>

  )
}
export default About;