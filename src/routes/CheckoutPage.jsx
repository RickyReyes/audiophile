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
      <form className="checkout__grid" onSubmit={handleSubmit} action="#">
        <CheckoutMain />
        <CheckoutSummary />
      </form>
    </main>
  );
};

export default CheckoutPage;
