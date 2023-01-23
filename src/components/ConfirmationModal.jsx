import React, { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../cartContext";
import CartSummary from "./CartSummary";

const ConfirmationModal = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { cart, setCart, setShowConfirmationModal } = useContext(CartContext);

  function handleBackToHome() {
    setShowConfirmationModal(false);
    setCart([]);
  }

  return (
    <div className="conf-modal">
      <h2 className="conf-modal__heading">Thank You For Your Order</h2>
      <p className="conf-modal__p">
        You will receive an email confirmation shortly.
      </p>

      <section className="conf-modal__flex">
        <div className="conf-modal__flex--light">
          <CartSummary cart={cart.slice(0, 1)} confirmationModal={true} />
          {cart.length > 1 && (
            <div className="conf-modal__flex--light-btm">
              and {cart.length - 1} other item(s)
            </div>
          )}
        </div>
        <div className="conf-modal__flex--dark">
          <p className="conf-modal__total-heading">Grand Total</p>
          <p className="conf-modal__total">$ 5,446</p>
        </div>
      </section>
      <Link to="/">
        <button onClick={handleBackToHome}>Back To Home</button>
      </Link>
    </div>
  );
};

export default ConfirmationModal;
