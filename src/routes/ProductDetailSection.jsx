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
  console.log(product.features);
  return (
    <section className="product-detail">
      <p className="product-detail__go-back" onClick={() => navigate(-1)}>
        Go Back
      </p>
      <div className="product-detail__flex">
        <picture className="product-detail__picture">
          <source
            media="(min-width: 750px)"
            srcset={`/assets/product-${product.slug}/tablet/image-product.jpg`}
          />
          {/* <source
          media="(min-width: 1200px)"
          srcset={product.image.desktop.substring(1)}
        /> */}
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
        </div>
      </div>
      <h4 className="product-detail__subheading">Features</h4>
      <p className="product-detail__p">{product.features}</p>
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
      <ul className="product-detail__images">
        <li>
          <picture>
            <source
              media="(min-width: 750px)"
              srcset={product.gallery.first.tablet.substring(1)}
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
              srcset={product.gallery.second.tablet.substring(1)}
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
              srcset={product.gallery.third.tablet.substring(1)}
            ></source>
            <img
              src={product.gallery.third.mobile.substring(1)}
              alt={`${product.name} showcase`}
            />
          </picture>
        </li>
      </ul>
      <h4 className="product-detail__subheading">You may also like</h4>
      <ul className="product-detail__others">
        {product.others.map((otherObj) => {
          return (
            <li key={otherObj.name} className="product-detail__other">
              <picture>
                <source
                  media="(min-width: 750px)"
                  srcset={otherObj.image.tablet.substring(1)}
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
      <CategorySection />
    </section>
  );
};

export default ProductDetailSection;
