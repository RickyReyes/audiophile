import React from "react";
import CheckoutMain from "../components/CheckoutMain";
import CheckoutSummary from "../components/CheckoutSummary";

import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <main className="checkout">
      <p className="go-back" onClick={() => navigate(-1)}>
        Go Back
      </p>
      <div className="checkout__grid">
        <CheckoutMain />
        <CheckoutSummary />
      </div>
    </main>
  );
};

export default CheckoutPage;
