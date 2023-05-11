import './Product.css';
import startIcon from '../../assets/img/star.svg'

function Product({ product, addInCart }) {
  const { img, title, price, rate, old_price } = product;
  function buy (e) {
    e.preventDefault()
    addInCart(product)
  }
  return (
    <li className="product">
      <img className="product__img" src={img}/>
      <div className="product__body">
        <div className="product__description">
          <h3 className="product__title">{title}</h3>
          <div className="product__prices">
            <p className="product__price">{price} Р</p>
            {old_price ? <p className="product__price product__price_old">{old_price} Р</p> : ''}
          </div>
        </div>
        <div className="product__description">
          <div className="product__rate">
            <img className="product__rate-icon" alt="starIcon" src={startIcon}/> {rate}
          </div>
          <button onClick={buy} type='button' className="product__buy">Купить</button>
        </div>
      </div>
    </li>
  );
}

export default Product;
