import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setShowMobileMenu, setShowCart }) => {
  return (
    <header>
      <img
        className="hamburger"
        onClick={() => setShowMobileMenu((prev) => !prev)}
        src="/assets/shared/tablet/icon-hamburger.svg"
        alt="hamburger icon"
      />
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="audiophile logo" />
      </Link>
      <img
        className="cart-icon"
        src="/assets/shared/desktop/icon-cart.svg"
        onClick={() => setShowCart((prev) => !prev)}
        alt="cart icon"
      />
    </header>
  );
};

export default Header;
