import './Cart.css';
import { useEffect, useState } from 'react';
import ProductInCart from '../productInCart/ProductInCart';

function Cart({ cart, addInCart, decreaseCount, removeFromCart, countItemChanging, cleanCart }) {
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [result, setResult] = useState(cart.reduce((acc, cur) => acc + cur.count * cur.price, 0));
  const [isButtonActive, setIsButtonActive] = useState(cart.length > 0);

  function onCartSubmit() {
    setOrderCompleted(true);
    cleanCart();
  }

  useEffect(() => {
    setResult(cart.reduce((acc, cur) => acc + cur.count * cur.price, 0));
    setIsButtonActive(cart.length > 0);
  }, [cart, countItemChanging]);
  return (
    <div className="cart">
      {orderCompleted ? <h2>Заказ оформлен</h2> : <>
        <ul className="list cart__content">
          {cart.map((item, i) => {
            return <ProductInCart key={i} product={item} addInCart={addInCart}
                                  removeFromCart={removeFromCart} decreaseCount={decreaseCount}/>;
          })}
        </ul>
        <div className="cart__footer">
          <div>
            <p className="cart__amount">ИТОГО </p>
            <p className="cart__amount">₽ {result}</p>
          </div>
          <button onClick={onCartSubmit} disabled={!isButtonActive} type="button"
                  className="button cart__submit">{isButtonActive ? 'Перейти к оформлению' : 'Корзина пуста'}</button>
        </div>
      </>}
    </div>

  );
}

export default Cart;
