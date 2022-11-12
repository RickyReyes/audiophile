import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ src, name }) => {
  return (
    <li className="category-card">
      <Link to={`/${name}`}>
        <img className="category-photo" src={src} alt="product category" />
        <p className="category-name">{name}</p>
        <div className="shop-arrow-flex">
          <small className="category-shop">Shop</small>
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="arrow right"
          />
        </div>
      </Link>
    </li>
  );
};

export default CategoryCard;
