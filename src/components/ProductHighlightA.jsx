import React from "react";
import { Link } from "react-router-dom";

const ProductHighlightA = ({ product }) => {
  return (
    <article className="product-highlight-a">
      <div className="product-highlight-a__img"></div>
      <div className="product-highlight-a__content">
        <h2 className="product-highlight-a__name">
          ZX9
          <br />
          Speaker
        </h2>
        <p className="product-highlight-a__p">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link to={`/product/${product.slug}`}>
          <button className="btn btn--black">See product</button>
        </Link>
      </div>
      =
    </article>
  );
};

export default ProductHighlightA;
