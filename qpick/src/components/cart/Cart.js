import './Cart.css';
import { useEffect, useState } from 'react';
import deleteIcon from '../../assets/img/Vector-2.svg';
import product from '../product/Product';
import Product from '../product/Product';
import ProductInCart from '../productInCart/ProductInCart';

function Cart({ cart, addInCart, decreaseCount, removeFromCart, countItemChanging }) {
  const [result, setResult] = useState(cart.reduce((acc, cur) => acc + cur.count*cur.price, 0));
  useEffect(() => {
    setResult(cart.reduce((acc, cur) => acc + cur.count*cur.price, 0))
  }, [cart, countItemChanging])
  return (
    <div className="cart">
      <ul className="list cart__content">
        {cart.map((item, i) => {
          return <ProductInCart key={i} product={item} addInCart={addInCart} removeFromCart={removeFromCart} decreaseCount={decreaseCount}/>})}
      </ul>
      <div className="cart__footer">
        <div>
          <p className="cart__amount">ИТОГО </p>
          <p className="cart__amount">₽ {result}</p>
        </div>

        <button type="button" className="button cart__submit">Перейти к оформлению</button>
      </div>
    </div>

  );
}

export default Cart;
