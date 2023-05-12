import './utils/fonts.css';
import './App.css';
import { headphones } from './utils/headphones';
import Catalog from './components/catalog/Catalog';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';

function App() {
  const [cart, setCart] = useState(localStorage.cart ? JSON.parse(localStorage.cart) : []);
  const [countItemChanging, setCountItemChanging] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(localStorage.cart ? JSON.parse(localStorage.cart).reduce((acc, curr) => {
    return acc + curr.count;
  }, 0) : 0);

  function removeFromCart(product) {
    setCountItemChanging(!countItemChanging);
    setCart(cart.filter(item => item.id !== product.id));
  }

  function cleanCart() {
    setCart([]);
    localStorage.clear();
  }

  function decreaseCount(product) {
    cart.map((item) => {
      if (item.id === product.id) {
        setCountItemChanging(!countItemChanging);
        if (item.count <= 1) {
          removeFromCart(product);
        } else {
          item.count = item.count - 1;
        }
      }
    });
  }

  function addInCart(product) {
    setCountItemChanging(!countItemChanging);
    if (!cart.includes(product)) {
      product.count = 1;
      setCart([product, ... cart]);
    } else {
      cart.map((item) => {
        if (item.id === product.id) {
          item.count = item.count + 1;
        }
      });
    }
  }

  useEffect(() => {
    setItemQuantity(cart.reduce((acc, curr) => acc + curr.count, 0));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [countItemChanging, cart]);

  return (
    <>
      <Header cartCounter={itemQuantity}/>
      <Routes>
        <Route path="/" element={<Catalog headphones={headphones} addInCart={addInCart}/>}/>
        <Route path="/cart" element={<Cart addInCart={addInCart} removeFromCart={removeFromCart}
                                           decreaseCount={decreaseCount} cart={cart}
                                           countItemChanging={countItemChanging}
                                           cleanCart={cleanCart}/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
