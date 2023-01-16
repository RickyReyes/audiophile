import React, { useContext } from "react";
import { CartContext } from "../cartContext";

const CheckoutSummary = () => {
  const { cart } = useContext(CartContext);
  return (
    <section className="checkout__summary">
      <h2 className="checkout__summary__heading">Summary</h2>
      <ul className="checkout__summary__cart-ul">
        {cart.map((cartItem) => {
          return (
            <li className="checkout__cart__row">
              <img
                className="checkout__cart__img"
                src={cartItem.product.image.mobile.substring(1)}
                alt={cartItem.product.name}
              />
              <div className="checkout__cart__name-price-flex">
                <div className="price">{cartItem.product.name}</div>
                <div className="checkout__cart__name">
                  ${cartItem.product.price}
                </div>
              </div>
              <div className="checkout__cart__quantity">
                x{cartItem.quantity}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CheckoutSummary;
