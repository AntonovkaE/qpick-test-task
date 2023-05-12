import './Catalog.css';
import Product from '../product/Product';

function Catalog({ headphones, addInCart }) {
  return (
    Object.entries(headphones).map((section, index) => {
      return (
          <section key={index} className="section ">
            <h2 className="section__heading">{section[0]}</h2>
            <ul className="catalog">
              {section[1].map((product, i) => (
                <Product key={product.id} product={product} addInCart={addInCart}/>
              ))}
            </ul>
          </section>
        )
    })


  );
}

export default Catalog;
