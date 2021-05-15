import React, { useState } from 'react';
import './App.css';
import useContextPage from './useContextPage';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleCheckoutDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <div className="App">
      <h1>Learn Use Context in React</h1>
      <useContextPage.Provider value={{ showDrawer, toggleCheckoutDrawer }}>
        <section className="cart-checkout">
          <CartDrawer selectedCartItems={selectedCartItems} />
        </section>
      </useContextPage.Provider>
    </div>
  );
}

export default App;
