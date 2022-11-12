import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetailSection = ({ product }) => {
  const navigate = useNavigate();
  return (
    <section className="product-detail">
      <p className="go-back" onClick={() => navigate(-1)}>
        Go Back
      </p>
      <img
        className="product-detail-img"
        src={product.image.mobile.substring(1)}
        alt={product.name}
      />
      {product.new && <small>New Product</small>}
      <h3>{product.name}</h3>
      <p className="product-detail__desc">{product.description}</p>
      <strong>$ {product.price.toLocaleString("en-US")}</strong>
      <div className="amt-and-btn-flex">
        <div className="amt-flex">
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </section>
  );
};

export default ProductDetailSection;
