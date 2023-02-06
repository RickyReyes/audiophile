import React from "react";

const CartSummary = ({ cart, confirmationModal }) => {
  return (
    <ul
      className={`checkout__summary__cart-ul ${
        confirmationModal && "confirmation"
      }`}
    >
      {cart.map((cartItem) => {
        return (
          <li key={cartItem} className="checkout__summary__li">
            <img
              className="checkout__summary__img"
              src={cartItem.product.image.mobile.substring(1)}
              alt={cartItem.product.name}
            />
            <div className="checkout__summary__info-flex">
              <div className="checkout__summary__name-quantity-flex">
                <strong>{cartItem.product.shortName}</strong>
                <div className="summary__quantity">x{cartItem.quantity}</div>
              </div>
              <div className="checkout__cart__price">
                $ {cartItem.product.price.toLocaleString("en-US")}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartSummary;
