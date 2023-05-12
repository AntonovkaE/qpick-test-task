import './Header.css';
import heartIcon from '../../assets/img/heart.svg';
import cartIcon from '../../assets/img/cart.svg';
import { Link } from 'react-router-dom';

function Header({ cartCounter = 2, favoriteCounter = 2 }) {
  return (
    <header className="header">
      <Link className="header__logo link" to="/">
        <h1 className="header__logo">QPICK</h1>
      </Link>
      <nav className="header__nav">
        <Link to="/favorite" className="header__favorite-link">
          <img src={heartIcon} alt="избранное" className="header__favorite"/>
          <div className="header__counter header__counter_favorite">{favoriteCounter}</div>
        </Link>
        <Link to="/cart" className="header__cart-link">
          <img src={cartIcon} alt="Корзина" className="header__cart"/>
          <div className="header__counter header__counter_cart">{cartCounter}</div>
        </Link>
      </nav>

    </header>
  );
}

export default Header;
