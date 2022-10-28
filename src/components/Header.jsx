import React from "react";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import hamburger from "../assets/shared/tablet/icon-hamburger.svg";

const Header = () => {
  return (
    <header>
      <img src={hamburger} alt="audiophile logo" />
      <img src={logo} alt="audiophile logo" />
      <img src={cart} alt="audiophile logo" />
    </header>
  );
};

export default Header;
