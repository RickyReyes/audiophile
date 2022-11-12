import React from "react";

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
      <button>See Product</button>
    </li>
  );
};

export default ProductCard;
