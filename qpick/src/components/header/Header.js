import './Header.css';
import heartIcon from '../../assets/img/heart.svg'
import cartIcon from '../../assets/img/cart.svg'


function Header({cartCounter = 2, favoriteCounter=2}) {
  return (
    <header className="header">
      <a className='header__logo link' href='#'>
        <h1 className="header__logo">QPICK</h1>
      </a>
      <nav className="header__nav">
        <a href="#" className="header__favorite-link">
          <img src={heartIcon} alt="избранное" className="header__favorite"/>
          <div className="header__counter header__counter_favorite">{favoriteCounter}</div>
        </a>
        <a href="#" className="header__cart-link">
          <img src={cartIcon} alt="Корзина" className="header__cart"/>
          <div className="header__counter header__counter_cart">{cartCounter}</div>
        </a>
      </nav>

    </header>
  );
}

export default Header;
