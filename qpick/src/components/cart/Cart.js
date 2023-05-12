import './Cart.css';
import { useState } from 'react';
import deleteIcon from '../../assets/img/Vector-2.svg';

function Cart({ itemQuantity, cart }) {
  const [result, setResult] = useState(cart.reduce((acc, cur) => acc + cur.price, 0));

  return (
    <div className="cart">
      <ul className="list cart__content">
        {cart.map((item, i) => {
          const { img, price, title, id, count } = item;
          return (
            <li key={id} className="cart__item">
              <button className="cart__delete-button" type="button">
                <img src={deleteIcon} alt="delete"/>
              </button>
              <div className="cart__img-wrapper">
                <img className="cart__item-img" src={img} alt={title}/>
                <div className="cart__buttons-ctrl">
                  <button className="cart__button cart__button_ctrl cart__button_add-item">
                    <div className="icon-plus icon-plus_h"></div>
                    <div className="icon-plus icon-plus_v"></div>
                    <div></div>
                  </button>
                  <p>{count}</p>
                  <button className="cart__button cart__button_ctrl cart__button_delete-item">
                    <div className="icon-plus icon-plus_h"></div>
                  </button>
                </div>
              </div>

              <div className="cart__body">
                <h3>{title}</h3>
                <p>{price} P</p>
              </div>
            </li>);
        })}
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
