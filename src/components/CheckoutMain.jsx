import { computeHeadingLevel } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";

const CheckoutMain = () => {
  const cashOnDeliveryRef = useRef(null);
  return (
    <section className="checkout__main">
      <h1 className="checkout__main__heading">Checkout</h1>
      <h2 className="checkout__main__subheading">Billing Details</h2>
      <form className="checkout__main__grid" action="#">
        <div>
          <label className="checkout__main__label">Name</label>
          <input
            className="checkout__main__input"
            type="text"
            placeholder="Alexei Ward"
          />
        </div>

        <div>
          <label className="checkout__main__label">Email Address</label>
          <input
            className="checkout__main__input"
            type="email"
            placeholder="alexei@gmail.com"
          />
        </div>

        <div>
          <label className="checkout__main__label">Phone Number</label>
          <input
            className="checkout__main__input"
            type="phone"
            placeholder="+1 202-555-0136"
          />
        </div>
      </form>
      <h2 className="checkout__main__subheading">Shipping Info</h2>
      <form action="#" className="checkout__main__grid">
        <div className="checkout__main__address">
          <label className="checkout__main__label">Your Address</label>
          <input
            className="checkout__main__input"
            type="text"
            placeholder="1137 Williams Avenue"
          />
        </div>

        <div>
          <label className="checkout__main__label">Zip Code</label>
          <input
            className="checkout__main__input"
            type="text"
            placeholder="10001"
          />
        </div>

        <div>
          <label className="checkout__main__label">City</label>
          <input
            className="checkout__main__input"
            type="text"
            placeholder="New York"
          />
        </div>

        <div>
          <label className="checkout__main__label">Country</label>
          <input
            className="checkout__main__input"
            type="text"
            placeholder="United States"
          />
        </div>
      </form>
      <h2 className="checkout__main__subheading">Payment Details</h2>
      <form action="#" className="checkout__main__grid">
        <label className="checkout__main__label">Payment Method</label>
        <div className="checkout__main__radio-container">
          <label className="checkout__main__radio-label" htmlFor="e-money">
            e-Money
          </label>
          <input
            className="checkout__main__input checkout__main__input--radio"
            type="radio"
            id="e-money"
            name="payment-method"
            placeholder="e-Money"
            defaultChecked
          />
          <span></span>
        </div>
        <div className="checkout__main__radio-container checkout__main__cash-on-d">
          <label
            className="checkout__main__radio-label"
            htmlFor="cash-on-delivery"
          >
            Cash on Delivery
          </label>
          <input
            className="checkout__main__input checkout__main__input--radio"
            type="radio"
            name="payment-method"
            id="cash-on-delivery"
            placeholder="1137 Williams Avenue"
            ref={cashOnDeliveryRef}
          />
          <span></span>
        </div>
        {cashOnDeliveryRef ? (
          <section>
            <img src="../assets/checkout/icon-order-confirmation.svg" alt="" />
          </section>
        ) : (
          <>
            <div>
              <label className="checkout__main__label">e-Money Number</label>
              <input
                className="checkout__main__input"
                type="text"
                placeholder="238521993"
              />
            </div>
            <div>
              <label className="checkout__main__label">e-Money PIN</label>
              <input
                className="checkout__main__input"
                type="text"
                placeholder="6891"
              />
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default CheckoutMain;
