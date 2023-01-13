import React from "react";
import { Link } from "react-router-dom";

const CategorySectionCard = ({ src, name, mobileMenu }) => {
  return (
    <li
      className="category-section-card"
      style={mobileMenu ? { width: "100%" } : {}}
    >
      <Link className="category-section-card--flex" to={`/${name}`}>
        <img
          className="category-section-card__img"
          src={src}
          alt="product category"
        />
        <h5 className="category-section-card__name">{name}</h5>
        <div className="category-section-card__shop-arrow">
          <small className="category-section-card__shop">Shop</small>
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="arrow right"
            className="category-card__arrow"
          />
        </div>
      </Link>
    </li>
  );
};

export default CategorySectionCard;
