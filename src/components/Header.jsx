import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img
        src="/assets/shared/tablet/icon-hamburger.svg"
        alt="hamburger icon"
      />
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="audiophile logo" />
      </Link>
      <img src="/assets/shared/desktop/icon-cart.svg" alt="cart icon" />
    </header>
  );
};

export default Header;
