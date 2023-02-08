import React, { useContext } from "react";
import CartSummary from "./CartSummary";

import { CartContext } from "../cartContext";

const CheckoutSummary = () => {
  const { cart, totalAmountDue } = useContext(CartContext);
  const SHIPPING_COST = 50.0;
  const VAT_FEE = totalAmountDue * 0.2;

  /* from stack overflow */
  function numberWithCommas(x) {
    return x
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <section className="checkout__summary">
      <h2 className="checkout__summary__heading">Summary</h2>
      <CartSummary cart={cart} />
      <ul className="checkout__summary__review-ul">
        <li className="total-flex">
          <div className="total-flex__item">Total</div>
          <strong>$ {numberWithCommas(totalAmountDue)}</strong>
        </li>
        <li className="total-flex">
          <div className="total-flex__item">Shipping</div>
          <strong>$ {SHIPPING_COST}</strong>
        </li>
        <li className="total-flex">
          <div className="total-flex__item">VAT (Included)</div>
          <strong>$ {VAT_FEE.toFixed(2).toLocaleString("en-US")}</strong>
        </li>
        <li className="total-flex">
          <div className="total-flex__item">Grand Total</div>
          <strong>
            $
            {numberWithCommas(
              parseFloat(totalAmountDue) +
                parseFloat(VAT_FEE) +
                parseFloat(SHIPPING_COST)
            )}
          </strong>
        </li>
      </ul>
      <button className="btn btn--orange" type="submit">
        Continue & Pay
      </button>
    </section>
  );
};

export default CheckoutSummary;
