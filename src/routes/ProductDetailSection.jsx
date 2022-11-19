import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AmountAndButton from "../components/AmountAndButton";
import CategorySection from "../components/CategorySection";

const ProductDetailSection = ({ product, productData, cart, setCart }) => {
  const navigate = useNavigate();
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [amountToAdd, setAmountToAdd] = useState(1);
  return (
    <section className="product-detail">
      <p className="product-detail__go-back" onClick={() => navigate(-1)}>
        Go Back
      </p>
      <img
        className="product-detail__product-img"
        src={product.image.mobile.substring(1)}
        alt={product.name}
      />
      {product.new && (
        <small className="new-product--orange">New Product</small>
      )}
      <h3 className="product-detail__name">{product.name}</h3>
      <p className="product-detail__p">{product.description}</p>
      <strong className="product-detail__price">
        $ {product.price.toLocaleString("en-US")}
      </strong>
      <div className="product-detail__amount-and-btn">
        <div className="product-detail__amount-container">
          <div
            onClick={() => setAmountToAdd((prev) => prev - 1)}
            className="product-detail__amount__operator"
          >
            -
          </div>
          <div className="product-detail__amount">{amountToAdd}</div>
          <div
            onClick={() => setAmountToAdd((prev) => prev + 1)}
            className="product-detail__amount__operator"
          >
            +
          </div>
        </div>
        <button className="btn btn--orange">Add to Cart</button>
      </div>
      <h4 className="product-detail__subheading">Features</h4>
      <p className="product-detail__p">{product.features}</p>
      <h4 className="product-detail__subheading">In the box</h4>
      <ul className="product-detail__includes">
        {product.includes.map(({ quantity, item }) => {
          return (
            <li key={item} className="product-detail__includes-item">
              <span className="product-detail__includes-item__amount">
                {quantity}x
              </span>
              <p className="product-detail__includes-item__name">{item}</p>
            </li>
          );
        })}
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
      <h4 className="product-detail__subheading">You may also like</h4>
      <ul className="product-detail__others">
        {product.others.map((otherObj) => {
          return (
            <li key={otherObj.name} className="product-detail__other">
              <img
                className="product-detail__other__img"
                src={otherObj.image.mobile.substring(1)}
                alt={otherObj.name}
              />
              <h4 className="product-detail__other__name">{otherObj.name}</h4>
              <Link to={`/product/${otherObj.slug}`}>
                <button className="btn btn--orange">See Product</button>
              </Link>
            </li>
          );
        })}
      </ul>
      <CategorySection />
    </section>
  );
};

export default ProductDetailSection;
