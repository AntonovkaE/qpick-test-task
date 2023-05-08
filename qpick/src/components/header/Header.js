import './Header.css';
import heartIcon from '../../assets/img/heart.svg'
import cartIcon from '../../assets/img/cart.svg'


function Header({cartCounter = 2, favoriteCounter=2}) {
  return (
    <header className="header">
      <a href='#'>
        <h1 className="header__logo">QPICK</h1>
      </a>
      <a href="" className="header__favorite-link">
        <img src={heartIcon} alt="избранное" className="header__favorite"/>
        <div className="header__favorite-counter">{favoriteCounter}</div>
      </a>
      <a href="" className="header__cart-link">
        <img src={cartIcon} alt="Корзина" className="header__cart"/>
        <div className="header__cart-counter">{cartCounter}</div>
      </a>
    </header>
  );
}

export default Header;
