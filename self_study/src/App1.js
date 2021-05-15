import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const styleContent = {
  color: 'pink',
  background: 'yellow',
  border: '2px solid black',
};

function App() {
  const [length, setLength] = useState(3);
  const [name, setName] = useState('ganesh');

  const doSomething = useMemo(() => {
    console.log('call dosomething');
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += i;
    }
    return sum;
  }, [length]);

  return (
    <div className="App">
      <h1 style={{ color: 'gray', background: 'blue' }}>Hello World1</h1>
      <h1 style={styleContent}>Hello World2</h1>
      <h1>UseMemo Exaple</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <hr />
      <input type="text" onChange={(e) => setLength(Number(e.target.value))} />
      <p>Your Name is {name}</p>
      <p>
        Sum of number of length :{length} is {doSomething}
      </p>

      <hr></hr>
      <h1>Use Callback use</h1>
    </div>
  );
}

export default App;
