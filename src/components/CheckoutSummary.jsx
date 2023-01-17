import React, { useContext } from "react";
import { CartContext } from "../cartContext";

const CheckoutSummary = () => {
  const { cart, totalAmountDue } = useContext(CartContext);
  const SHIPPING_COST = 50;
  const VAT_FEE = 1079;
  return (
    <section className="summary">
      <h2 className="summary__heading">Summary</h2>
      <ul className="summary__cart-ul">
        {cart.map((cartItem) => {
          return (
            <li className="summary__li">
              <img
                className="summary__img"
                src={cartItem.product.image.mobile.substring(1)}
                alt={cartItem.product.name}
              />
              <div className="summary__info-flex">
                <div className="summary__name-quantity-flex">
                  <strong>{cartItem.product.shortName}</strong>
                  <div className="summary__quantity">x{cartItem.quantity}</div>
                </div>
                <div className="cart__price">
                  $ {cartItem.product.price.toLocaleString("en-US")}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="summary__review-ul">
        <li className="total-flex">
          <div className="total-flex__item">Total</div>
          <strong>$ {totalAmountDue.toLocaleString("en-US")}</strong>
        </li>
        <li className="total-flex">
          <div className="total-flex__item">Shipping</div>
          <strong>$ {SHIPPING_COST.toLocaleString("en-US")}</strong>
        </li>
        <li className="total-flex">
          <div className="total-flex__item">VAT (Included)</div>
          <strong>$ {VAT_FEE.toLocaleString("en-US")}</strong>
        </li>
        <li className="total-flex">
          <div className="total-flex__item">Grand Total</div>
          <strong>
            $ {(totalAmountDue + SHIPPING_COST).toLocaleString("en-US")}
          </strong>
        </li>
      </ul>
      <button className="btn btn--orange">Continue & Pay</button>
    </section>
  );
};

export default CheckoutSummary;
