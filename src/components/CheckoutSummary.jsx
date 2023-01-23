import React, { useContext } from "react";
import CartSummary from "./CartSummary";

import { CartContext } from "../cartContext";

const CheckoutSummary = () => {
  const { cart, setCart, totalAmountDue, setShowConfirmationModal } =
    useContext(CartContext);
  const SHIPPING_COST = 50;
  const VAT_FEE = 1079;

  function handlePay() {
    setShowConfirmationModal(true);
  }
  return (
    <section className="checkout__summary">
      <h2 className="checkout__summary__heading">Summary</h2>
      <CartSummary cart={cart} />
      <ul className="checkout__summary__review-ul">
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
      <button className="btn btn--orange" onClick={() => handlePay(true)}>
        Continue & Pay
      </button>
    </section>
  );
};

export default CheckoutSummary;
