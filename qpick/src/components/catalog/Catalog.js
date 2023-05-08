import './Catalog.css';
import Product from '../product/Product';

function Catalog({ headphones, sectionName, addInBasket }) {
  return (
    <section>
      <h2>{sectionName}</h2>
      <ul className="catalog">
        {headphones.map((product, i) => (
          <Product key={product.id} product={product} addInBasket={addInBasket}/>
        ))}
      </ul>
    </section>

  );
}

export default Catalog;
