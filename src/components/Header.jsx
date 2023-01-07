import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Header = ({ setShowMobileMenu, setShowCart }) => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="hamburger"
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
        <Nav />
        <img
          className="cart-icon"
          src="/assets/shared/desktop/icon-cart.svg"
          onClick={() => setShowCart((prev) => !prev)}
          alt="cart icon"
        />
      </div>
    </header>
  );
};

export default Header;
