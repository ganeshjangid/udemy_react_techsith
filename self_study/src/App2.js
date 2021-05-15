import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const doSomeThing = () => {
    console.log('Hello World');
    return fullName('ganesh');
  };

  const fullName = (prop) => {
    //console.log(prop);
    setName(`${prop} Madanlal suthar`);
  };

  return (
    <div className="App">
      <p>You name is {name}</p>
      <p>
        <button onClick={doSomeThing}>Click Me</button>
      </p>
    </div>
  );
}

export default App;
