import './App.css';
import { headphones } from './utils/headphones';
import Catalog from './components/catalog/Catalog';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const [cart, setCart] = useState(localStorage.cart ? JSON.parse(localStorage.cart) : []);
  const [itemQuantity, setItemQuantity] = useState(localStorage.cart ? JSON.parse(localStorage.cart).length : 0)
  // const cartArray = cart.length === 0 ? [] : cart
  console.log(localStorage.cart)
  function addInCart(product) {
   // cartArray.push(product)
    setCart([product, ... cart]);
    // console.log(cartArray)
    // console.log(localStorage.cart)
  }
  useEffect(()=> {
    setItemQuantity(cart.length)
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <>
      <Header cartCounter={itemQuantity}/>
      {Object.entries(headphones).map((section, index) => {
        return <Catalog key={index} headphones={section[1]} addInCart={addInCart}
                        sectionName={section[0]}/>;
      })
      }
      <Footer/>
    </>
  );
}

export default App;
