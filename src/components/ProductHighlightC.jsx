import React from "react";
import { Link } from "react-router-dom";

const ProductHighlightC = ({ product }) => {
  return (
    <div className="product-highlight-c">
      <div className="product-highlight-c__img" />
      <div>
        <h3>YX1 Earphones</h3>
        <Link to={`/product/${product.slug}`}>
          <button>See Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductHighlightC;
