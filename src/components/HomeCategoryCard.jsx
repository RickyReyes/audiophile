import React from "react";
import { Link } from "react-router-dom";

const HomeCategoryCard = ({ src, name }) => {
  return (
    <li className="home-category-card">
      <Link to={`/${name}`}>
        <img className="home-category-photo" src={src} alt="product category" />
        <p className="home-category-name">{name}</p>
        <div className="shop-arrow-flex">
          <small className="home-category__shop">Shop</small>
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="arrow right"
          />
        </div>
      </Link>
    </li>
  );
};

export default HomeCategoryCard;
