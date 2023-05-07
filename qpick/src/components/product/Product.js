import './Product.css';

function Product(product) {
  const { img, title, price, rate, old_price } = product;
  return (
    <li className="product">
      <img className="product__img" src={img}/>
      <div className="product__body">
        <div className="">
          <h3 className="product__title">{title}</h3>
          <div className="product__prices">
            <p className="product__price">{price} Р</p>
            <p className="product__price_old">{old_price} Р</p>
          </div>
        </div>
        <div>
          <div className="product__rate">
            <img src="../../assets/img/star.svg"/> {rate}
          </div>
          <button type='button' className="product__buy">Купить</button>
        </div>
      </div>
    </li>
  );
}

export default Product;
