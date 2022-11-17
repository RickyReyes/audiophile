import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setShowMobileMenu, setShowCart }) => {
  return (
    <header className="header">
      <img
        className="header__hamburger"
        onClick={() => setShowMobileMenu((prev) => !prev)}
        src="/assets/shared/tablet/icon-hamburger.svg"
        alt="hamburger icon"
      />
      <Link to="/">
        <img
          className="header__logo"
          src="/assets/shared/desktop/logo.svg"
          alt="audiophile logo"
        />
      </Link>
      <img
        className="header__cart-icon"
        src="/assets/shared/desktop/icon-cart.svg"
        onClick={() => setShowCart((prev) => !prev)}
        alt="cart icon"
      />
    </header>
  );
};

export default Header;
