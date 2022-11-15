import React from "react";
import { Link } from "react-router-dom";

const ProductHighlightA = ({ product }) => {
  return (
    <div className="product-highlight-a">
      <div className="product-highlight-a__img"></div>
      <h2 className="product-highlight-a__name">
        ZX9
        <br />
        Speaker
      </h2>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Link to={`/product/${product.slug}`}>
        <button>See product</button>
      </Link>
    </div>
  );
};

export default ProductHighlightA;
