import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetailSection = ({ product }) => {
  const navigate = useNavigate();
  console.log(product);
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
      <p>{product.description}</p>
      <strong>$ {product.price.toLocaleString("en-US")}</strong>
      <div className="amt-and-btn-flex">
        <div className="amt-flex">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <button>Add to Cart</button>
      </div>
      <h4>Features</h4>
      <p>{product.features}</p>
      <h4>In the box</h4>
      <ul className="in-the-box">
        {product.includes.map(({ quantity, item }) => (
          <li>
            <span>{quantity}x</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <ul className="">
        <li>
          <img
            src={product.gallery.first.mobile.substring(1)}
            alt={`${product.name} showcase`}
          />
        </li>
        <li>
          <img
            src={product.gallery.second.mobile.substring(1)}
            alt={`${product.name} showcase`}
          />
        </li>
        <li>
          <img
            src={product.gallery.third.mobile.substring(1)}
            alt={`${product.name} showcase`}
          />
        </li>
      </ul>
    </section>
  );
};

export default ProductDetailSection;