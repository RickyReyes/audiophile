import React from "react";
import { Link } from "react-router-dom";

const CategoryPageCard = ({ product }) => {
  return (
    <li className="category-page-card">
      <picture className="category-page-card__picture">
        <source
          media="(min-width: 750px)"
          srcset={`/assets/product-${product.slug}/tablet/image-category-page-preview.jpg`}
        />
        {/* <source
          media="(min-width: 1200px)"
          srcset={product.image.desktop.substring(1)}
        /> */}
        <img
          className="category-page-card__img"
          src={product.image.mobile.substring(1)}
          alt={product.name}
        />
      </picture>
      {product.new && (
        <small className="new-product--orange">New Product</small>
      )}
      <h2 className="category-page-card__name">{product.name}</h2>
      <p className="category-page-card__desc">{product.description}</p>
      <Link to={`/product/${product.slug}`}>
        <button className="btn btn--orange">See Product</button>
      </Link>
    </li>
  );
};

export default CategoryPageCard;
