import React from "react";
import { Link } from "react-router-dom";

const ProductHighlightA = ({ product }) => {
  return (
    <div className="product-highlight-a">
      <div className="img-container">
        <img src={"/assets/home/tablet/image-speaker-zx9.png"} alt="" />
      </div>
      <h2>{product.name}</h2>
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
