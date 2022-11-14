import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <li className="product-card">
      <img
        className="product-card__img"
        src={product.image.mobile.substring(1)}
        alt={product.name}
      />
      {product.new && <small className="new-product">New Product</small>}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Link to={`/product/${product.slug}`}>
        <button>See Product</button>
      </Link>
    </li>
  );
};

export default ProductCard;
