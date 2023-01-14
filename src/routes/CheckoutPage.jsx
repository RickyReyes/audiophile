import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <main className="checkout">
      <p className="go-back" onClick={() => navigate(-1)}>
        Go Back
      </p>
      <section className="checkout__container">
        <h1 className="checkout__heading">Checkout</h1>
        <h2 className="checkout__subheading">Billing Details</h2>
        <form action="#">
          <label className="checkout__label">Name</label>
          <input type="text" placeholder="Alexei Ward" />

          <label className="checkout__label">Email Address</label>
          <input type="email" placeholder="alexei@gmail.com" />

          <label className="checkout__label">Phone Number</label>
          <input type="phone" placeholder="+1 202-555-0136" />
        </form>
        <h2 className="checkout__subheading">Shipping Info</h2>
        <form action="#">
          <label className="checkout__label">Your Address</label>
          <input type="text" placeholder="1137 Williams Avenue" />

          <label className="checkout__label">Zip Code</label>
          <input type="text" placeholder="10001" />

          <label className="checkout__label">City</label>
          <input type="text" placeholder="New York" />

          <label className="checkout__label">Country</label>
          <input type="text" placeholder="United States" />
        </form>
        <h2 className="checkout__subheading">Payment Details</h2>
        <form action="#">
          <label className="checkout__label">Payment Method</label>
          <input
            type="radio"
            id="e-money"
            name="payment-method"
            placeholder="e-Money"
          />
          <label for="e-money" checked>
            eMoney
          </label>
          <input
            type="radio"
            name="payment-method"
            id="cash-on-delivery"
            placeholder="1137 Williams Avenue"
          />{" "}
          <label for="cash-on-delivery">Cash on Delivery</label>
          <label className="checkout__label">e-Money Number</label>
          <input type="number" placeholder="238521993" />
          <label className="checkout__label">e-Money PIN</label>
          <input type="number" placeholder="6891" />
        </form>
      </section>
    </main>
  );
};

export default CheckoutPage;
