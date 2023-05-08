import './App.css';
import { headphones } from './utils/headphones';
import Catalog from './components/catalog/Catalog';
import { useState } from 'react';
import Header from './components/header/Header';

function App() {
  const [cart, setCart] = useState([]);

  function addInBasket(product) {
    setCart([product, ... cart]);
    localStorage.setItem('cart', JSON.stringify());
  }

  return (
    <div className="App">
      <Header/>
      {Object.entries(headphones).map((section, index) => {
        return <Catalog key={index} headphones={section[1]} addInBasket={addInBasket} sectionName={section[0]}/>;
      })
      }
    </div>
  );
}

export default App;
