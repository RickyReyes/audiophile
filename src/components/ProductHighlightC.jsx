import React from "react";
import earphones from "../assets/home/mobile/image-earphones-yx1.jpg";
const ProductHighlightC = () => {
  return (
    <section className="product-highlight-c">
      <img src={earphones} alt="earphones" />
      <div>
        <h3>YX1 Earphones</h3>
        <button>See Product</button>
      </div>
    </section>
  );
};

export default ProductHighlightC;
