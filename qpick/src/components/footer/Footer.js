import './Footer.css';
import langIcon from '../../assets/img/lang.svg';
import vkIcon from '../../assets/img/VK.svg';
import telegramIcon from '../../assets/img/Telegram.svg';
import whatsappIcon from '../../assets/img/Whatsapp.svg';

function Footer() {
  return (
    <footer className="footer">
      <a href="#" className=" footer__column logo footer__logo">QPICK</a>
      <nav className="nav footer__nav footer__column">
        <ul className="list nav__list">
          <li className="nav__link">
            Избранное
          </li>
          <li className="nav__link">
            Корзина
          </li>
          <li className="nav__link">
            Контакты
          </li>
        </ul>
      </nav>
      <div className="footer__column">
        <a className="link nav__link" href="#">Условия сервиса</a>
        <div className="lang-switcher">
          <img src={langIcon} alt="переключить язык"/>
          <button className="lang-switcher__lang lang-switcher__lang_active" type="button">Рус
          </button>
          <button className="lang-switcher__lang" type="button">Eng</button>
        </div>
      </div>
      <div className="footer__column footer__column_contacts">
        <nav className="footer__contacts">
          <ul className="list footer__contacts-list">
            <li className="footer__contact">
              <a href="https://vk.com/.com" className="footer__contact-link">
                <img alt="vkIcon" src={vkIcon} className="footer__contact-icon"/>
              </a>
            </li>
            <li className="footer__contact">
              <a href="https://web.telegram.org/a/" className="footer__contact-link">
                <img alt="telegramIcon" src={telegramIcon} className="footer__contact-icon"/>
              </a>
            </li>
            <li className="footer__contact">
              <a href="https://web.whatsapp.com" className="footer__contact-link">
                <img alt="whatsappIcon" src={whatsappIcon} className="footer__contact-icon"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>

  );
}

export default Footer;
