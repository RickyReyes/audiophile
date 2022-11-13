import React from "react";
import { useNavigate } from "react-router-dom";
import AmountAndButton from "../components/AmountAndButton";
import CategorySection from "../components/CategorySection";

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
      {product.new && <small className="new-product">New Product</small>}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>$ {product.price.toLocaleString("en-US")}</strong>
      <AmountAndButton />
      <h4>Features</h4>
      <p>{product.features.replace("\n", "\n")}</p>
      <h4>In the box</h4>
      <ul className="in-the-box">
        {product.includes.map(({ quantity, item }) => (
          <li>
            <span>{quantity}x</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <ul className="product-detail__images">
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
      <h4>You may also like</h4>
      <ul className="product-detail__others">
        {product.others.map((otherObj) => (
          <li>
            <img src={otherObj.image.mobile.substring(1)} alt={otherObj.name} />
            <h4>{otherObj.name}</h4>
            <button>See Product</button>
          </li>
        ))}
      </ul>
      <CategorySection />
    </section>
  );
};

export default ProductDetailSection;
