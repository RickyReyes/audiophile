import React from "react";

const CheckoutMain = () => {
  return (
    <section className="checkout__main">
      <h1 className="checkout__main__heading">Checkout</h1>
      <h2 className="checkout__main__subheading">Billing Details</h2>
      <form action="#">
        <label className="checkout__main__label">Name</label>
        <input
          className="checkout__main__input"
          type="text"
          placeholder="Alexei Ward"
        />

        <label className="checkout__main__label">Email Address</label>
        <input
          className="checkout__main__input"
          type="email"
          placeholder="alexei@gmail.com"
        />

        <label className="checkout__main__label">Phone Number</label>
        <input
          className="checkout__main__input"
          type="phone"
          placeholder="+1 202-555-0136"
        />
      </form>
      <h2 className="checkout__main__subheading">Shipping Info</h2>
      <form action="#">
        <label className="checkout__main__label">Your Address</label>
        <input
          className="checkout__main__input"
          type="text"
          placeholder="1137 Williams Avenue"
        />

        <label className="checkout__main__label">Zip Code</label>
        <input
          className="checkout__main__input"
          type="text"
          placeholder="10001"
        />

        <label className="checkout__main__label">City</label>
        <input
          className="checkout__main__input"
          type="text"
          placeholder="New York"
        />

        <label className="checkout__main__label">Country</label>
        <input
          className="checkout__main__input"
          type="text"
          placeholder="United States"
        />
      </form>
      <h2 className="checkout__main__subheading">Payment Details</h2>
      <form action="#">
        <label className="checkout__main__label">Payment Method</label>
        <div className="checkout__main__radio-container">
          <label className="checkout__main__radio-label" for="e-money">
            e-Money
          </label>
          <input
            className="checkout__main__input checkout__main__input--radio"
            type="radio"
            id="e-money"
            name="payment-method"
            placeholder="e-Money"
            checked
          />
          <span></span>
        </div>
        <div className="checkout__main__radio-container">
          <label className="checkout__main__radio-label" for="cash-on-delivery">
            Cash on Delivery
          </label>
          <input
            className="checkout__main__input checkout__main__input--radio"
            type="radio"
            name="payment-method"
            id="cash-on-delivery"
            placeholder="1137 Williams Avenue"
          />
          <span></span>
        </div>
        <label className="checkout__main__label">e-Money Number</label>
        <input
          className="checkout__main__input"
          type="text"
          placeholder="238521993"
        />
        <label className="checkout__main__label">e-Money PIN</label>
        <input
          className="checkout__main__input"
          type="text"
          placeholder="6891"
        />
      </form>
    </section>
  );
};

export default CheckoutMain;
