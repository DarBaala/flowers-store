import React from "react";
import cartIcon from "../assets/img/cart.svg";

const Header = () => {
  return (
    <header className="header container">
      <div className="header__logo">
        <h1>FLOWERS</h1>
        <p>цветочная лавка</p>
      </div>
      <ul className="header__items">
        <li>
          <a href="/">Вопросы</a>
        </li>
        <li>
          <a href="/">Свадебная флористика</a>
        </li>
        <li>
          <a href="/">Контакты</a>
        </li>
        <li>
          <img src={cartIcon} alt="Icon: Cart" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
