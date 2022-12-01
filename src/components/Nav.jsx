import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <ul className="nav" aria-roledescription="navigation">
      <li className="nav__item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav__item">
        <Link to="/headphones">Headphones</Link>
      </li>
      <li className="nav__item">
        <Link to="/speakers">Speakers</Link>
      </li>
      <li className="nav__item">
        <Link to="/earphones">Earphones</Link>
      </li>
    </ul>
  );
};

export default Nav;
