import './Catalog.css';
import Product from '../product/Product';

function Catalog({ headphones, sectionName, addInCart }) {
  return (
    <section className="section ">
      <h2 className="section__heading">{sectionName}</h2>
      <ul className="catalog">
        {headphones.map((product, i) => (
          <Product key={product.id} product={product} addInCart={addInCart}/>
        ))}
      </ul>
    </section>

  );
}

export default Catalog;
