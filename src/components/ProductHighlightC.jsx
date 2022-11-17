import React from "react";
import { Link } from "react-router-dom";

const ProductHighlightC = ({ product }) => {
  return (
    <div className="product-highlight-c">
      <div className="product-highlight-c__flex-img" />
      <div className="product-highlight-c__flex-main">
        <h3 className="product-highlight-c__name">YX1 Earphones</h3>
        <Link to={`/product/${product.slug}`}>
          <button className="btn btn--black-border">See Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductHighlightC;
