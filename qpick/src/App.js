import './App.css';
import { headphones } from './utils/headphones';
import Catalog from './components/catalog/Catalog';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';

function App() {
  const [cart, setCart] = useState(localStorage.cart ? JSON.parse(localStorage.cart) : []);
  const [fullCart, setFullCart] = useState(localStorage.fullCart ? JSON.parse(localStorage.fullCart) : [])
  const [itemQuantity, setItemQuantity] = useState(localStorage.cart ? JSON.parse(localStorage.cart).reduce((acc, curr) => {
    return acc + curr.count;}, 0) : 0)

  function addInCart(product) {
    setFullCart([product, ...fullCart])
    if (!cart.includes(product)) {
      product.count = 1
      setCart([product, ... cart]);
    } else {
      cart.map((item) => {
        if (item.id === product.id) {
          item.count = item.count + 1
        }
      })
    }
  }
  useEffect(()=> {
    setItemQuantity(fullCart.length)
    // setItemQuantity(cart.reduce((acc, curr) => acc + curr.count, 0))
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('fullCart', JSON.stringify(fullCart))
  }, [fullCart])

  return (
    <>
      <Header cartCounter={itemQuantity}/>
      <Routes>
        <Route path='/' element={<Catalog headphones={headphones} addInCart={addInCart}/>}/>
        <Route path='/cart' element={<Cart itemQuantity={itemQuantity} cart={cart}/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
