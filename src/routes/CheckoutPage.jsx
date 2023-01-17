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
      <CheckoutMain />
      <CheckoutSummary />
    </main>
  );
};

export default CheckoutPage;
