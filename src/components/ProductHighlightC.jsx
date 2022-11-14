import React from "react";
import { Link } from "react-router-dom";

const ProductHighlightC = ({ product }) => {
  return (
    <section className="product-highlight-c">
      <img src="/assets/home/mobile/image-earphones-yx1.jpg" alt="earphones" />
      <div>
        <h3>{product.name}</h3>
        <Link to={`/product/${product.slug}`}>
          <button>See Product</button>
        </Link>
      </div>
    </section>
  );
};

export default ProductHighlightC;
