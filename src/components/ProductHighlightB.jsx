import React from "react";
import { Link } from "react-router-dom";

const ProductHighlightB = ({ product }) => {
  return (
    <div className="product-highlight-b">
      <h3 className="product-highlight-b__name">{product.name}</h3>
      <Link to={`/product/${product.slug}`}>
        <button className="btn--black-border">See Product</button>
      </Link>
    </div>
  );
};

export default ProductHighlightB;
