import './App.css';
import { headphones } from './utils/headphones';
import Catalog from './components/catalog/Catalog';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const [cart, setCart] = useState([]);

  function addInBasket(product) {
    setCart([product, ... cart]);
    localStorage.setItem('cart', JSON.stringify());
  }

  return (
    <>
      <Header/>
      {Object.entries(headphones).map((section, index) => {
        return <Catalog key={index} headphones={section[1]} addInBasket={addInBasket} sectionName={section[0]}/>;
      })
      }
      <Footer/>
    </>
  );
}

export default App;
