import './Catalog.css';
import Product from '../product/Product';

function Catalog({ headphones, addInBasket }) {
  return (
    <ul className="catalog">
      {headphones.map((product, i) => (
        <Product key={product.id} product={product} addInBasket={addInBasket}/>
      ))}
    </ul>
  );
}

export default Catalog;
