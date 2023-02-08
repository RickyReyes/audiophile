import React, { useContext } from "react";
import CheckoutMain from "../components/CheckoutMain";
import CheckoutSummary from "../components/CheckoutSummary";

import { useNavigate } from "react-router-dom";
import { CartContext } from "../cartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { setShowConfirmationModal } = useContext(CartContext);
  function handleSubmit() {
    setShowConfirmationModal(true);
  }

  return (
    <main className="checkout">
      <p className="go-back" onClick={() => navigate(-1)}>
        Go Back
      </p>
      <div className="checkout__grid">
        <form onSubmit={handleSubmit} action="#">
          <CheckoutMain />
          <CheckoutSummary />
        </form>
      </div>
    </main>
  );
};

export default CheckoutPage;
