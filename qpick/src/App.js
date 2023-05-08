import './App.css';
import {headphones} from './utils/headphones';
import Catalog from './components/catalog/Catalog';
import { useState } from 'react';
import Header from './components/header/Header';

function App() {
  const [cart, setCart] = useState([])
  function addInBasket(product) {
    setCart([product, ...cart])
    localStorage.setItem('cart', JSON.stringify() )
  }
  return (
    <div className="App">
      <Header/>
      <Catalog headphones={headphones} addInBasket={addInBasket}/>
    </div>
  );
}

export default App;
