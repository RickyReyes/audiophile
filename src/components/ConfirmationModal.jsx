import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../cartContext";
import CartSummary from "./CartSummary";

const ConfirmationModal = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { cart } = useContext(CartContext);

  return (
    <div className="conf-modal">
      <h2 className="conf-modal__heading">Thank You For Your Order</h2>
      <p className="conf-modal__p">
        You will receive an email confirmation shortly.
      </p>

      <section className="conf-modal__items-total-flex">
        <CartSummary cart={cart} />
      </section>
    </div>
  );
};

export default ConfirmationModal;
