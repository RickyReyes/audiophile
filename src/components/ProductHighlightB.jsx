import React from "react";
import { Link } from "react-router-dom";
const ProductHighlightB = ({ product }) => {
  return (
    <div
      className="product-highlight-b"
      style={{
        backgroundImage: `url("/assets/home/mobile/image-speaker-zx7.jpg")`,
      }}
    >
      <h3>{product.name}</h3>
      <Link to={`/product/${product.slug}`}>
        <button>See Product</button>
      </Link>
    </div>
  );
};

export default ProductHighlightB;
