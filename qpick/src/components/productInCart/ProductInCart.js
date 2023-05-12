import './ProductInCart.css';
import deleteIcon from '../../assets/img/Vector-2.svg';

function ProductInCart({ product, addInCart, decreaseCount, removeFromCart}) {
  function increaseItemCount() {
    addInCart(product);
  }

  function decreaseItemCount(e) {

    decreaseCount(product);
  }

  function removeItem() {
    removeFromCart(product);
  }

  const { img, price, title, id, count } = product;

  return (
    <li className="cart__item">
      <button onClick={removeItem} className="cart__delete-button" type="button">
        <img src={deleteIcon} alt="delete"/>
      </button>
      <div className="cart__img-wrapper">
        <img className="cart__item-img" src={img} alt={title}/>
        <div className="cart__buttons-ctrl">
          <button onClick={increaseItemCount}
                  className="cart__button cart__button_ctrl cart__button_add-item">
            <div className="icon-plus icon-plus_h"></div>
            <div className="icon-plus icon-plus_v"></div>
            <div></div>
          </button>
          <p>{count}</p>
          <button onClick={decreaseItemCount}
                  className="cart__button cart__button_ctrl cart__button_delete-item">
            <div className="icon-plus icon-plus_h"></div>
          </button>
        </div>
      </div>

      <div className="cart__body">
        <h3>{title}</h3>
        <p>{price} P</p>
      </div>
    </li>);
}

export default ProductInCart;
