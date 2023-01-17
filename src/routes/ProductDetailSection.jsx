import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CategorySection from "../components/CategorySection";
import About from "../components/About";
import { CartContext } from "../cartContext";

const ProductDetailSection = ({ product }) => {
  const navigate = useNavigate();
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [amountToAdd, setAmountToAdd] = useState(1);
  const { handleAddToCart } = useContext(CartContext);
  return (
    <section className="product-detail">
      <p className="product-detail__go-back" onClick={() => navigate(-1)}>
        Go Back
      </p>
      <div className="product-detail__main-flex">
        <picture className="product-detail__picture">
          <source
            media="(min-width: 1200px)"
            srcSet={`/assets/product-${product.slug}/desktop/image-product.jpg`}
          />
          <source
            media="(min-width: 750px)"
            srcSet={`/assets/product-${product.slug}/tablet/image-product.jpg`}
          />
          <img
            className={`product-detail__product-img ${
              product.new ? "new" : ""
            }`}
            src={product.image.mobile.substring(1)}
            alt={product.name}
          />
        </picture>
        <div className="product-detail__flex--right">
          {product.new && (
            <small className="new-product--orange">New Product</small>
          )}
          <h3 className={`product-detail__name ${product.new ? "new" : ""}`}>
            {product.name}
          </h3>
          <p className="product-detail__p product-detail__description">
            {product.description}
          </p>
          <strong className="product-detail__price">
            $ {product.price.toLocaleString("en-US")}
          </strong>
          <div className="product-detail__amount-and-btn">
            <div className="quantity-bar">
              <div
                onClick={() =>
                  setAmountToAdd((prev) => (prev === 1 ? prev : prev - 1))
                }
                className="quantity-bar__operator"
              >
                -
              </div>
              <div className="quantity-bar__quantity">{amountToAdd}</div>
              <div
                onClick={() => setAmountToAdd((prev) => prev + 1)}
                className="quantity-bar__operator"
              >
                +
              </div>
            </div>
            <button
              className="btn btn--orange"
              onClick={() => handleAddToCart(product, amountToAdd)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-detail__features-box-flex">
        <div className="product-detail__features">
          <h4 className="product-detail__subheading">Features</h4>
          <p className="product-detail__p">{product.features}</p>
        </div>
        <div className="product-detail__in-the-box">
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
        </div>
      </div>
      <div className="product-detail__images-container">
        <ul className="product-detail__images">
          <li>
            <picture>
              <source
                media="(min-width: 750px)"
                srcSet={product.gallery.first.tablet.substring(1)}
              ></source>
              <img
                src={product.gallery.first.mobile.substring(1)}
                alt={`${product.name} showcase`}
              />
            </picture>
          </li>
          <li>
            <picture>
              <source
                media="(min-width: 750px)"
                srcSet={product.gallery.second.tablet.substring(1)}
              ></source>
              <img
                src={product.gallery.second.mobile.substring(1)}
                alt={`${product.name} showcase`}
              />
            </picture>
          </li>
          <li className="product-detail__images--third">
            <picture>
              <source
                media="(min-width: 750px)"
                srcSet={product.gallery.third.tablet.substring(1)}
              ></source>
              <img
                src={product.gallery.third.mobile.substring(1)}
                alt={`${product.name} showcase`}
              />
            </picture>
          </li>
        </ul>
      </div>
      <section className="product-detail__others">
        <h4 className="product-detail__subheading center">You may also like</h4>
        <ul className="product-detail__others-ul">
          {product.others.map((otherObj) => {
            return (
              <li key={otherObj.name} className="product-detail__other">
                <picture>
                  <source
                    media="(min-width: 750px)"
                    srcSet={otherObj.image.tablet.substring(1)}
                  ></source>
                  <img
                    className="product-detail__other__img"
                    src={otherObj.image.mobile.substring(1)}
                    alt={otherObj.name}
                  />
                </picture>
                <h4 className="product-detail__other__name">{otherObj.name}</h4>
                <Link to={`/product/${otherObj.slug}`}>
                  <button className="btn btn--orange">See Product</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <CategorySection />
      <About />
    </section>
  );
};

export default ProductDetailSection;
