import React, { useState } from "react";

const CheckoutMain = () => {
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  return (
    <section className="checkout__main">
      <h1 className="checkout__main__heading">Checkout</h1>
      <h2 className="checkout__main__subheading">Billing Details</h2>
      <div className="checkout__main__grid" action="#">
        <div>
          <label className="checkout__main__label" htmlFor="name">
            Name
          </label>
          <input
            className="checkout__main__input"
            type="text"
            id="name"
            placeholder="Alexei Ward"
            required
          />
        </div>

        <fieldset>
          <label className="checkout__main__label email" htmlFor="email">
            Email Address
            <p className="wrong-format">Wrong format</p>
          </label>
          <input
            className="checkout__main__input email"
            type="email"
            id="email"
            placeholder="alexei@gmail.com"
            required
          />
        </fieldset>

        <div>
          <label className="checkout__main__label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="checkout__main__input"
            type="phone"
            id="phone"
            placeholder="+1 202-555-0136"
            required
          />
        </div>
      </div>
      <h2 className="checkout__main__subheading">Shipping Info</h2>
      <div className="checkout__main__grid">
        <div className="checkout__main__address">
          <label className="checkout__main__label" htmlFor="address">
            Your Address
          </label>
          <input
            className="checkout__main__input"
            type="text"
            id="address"
            placeholder="1137 Williams Avenue"
            required
          />
        </div>

        <div>
          <label className="checkout__main__label" htmlFor="zip">
            Zip Code
          </label>
          <input
            className="checkout__main__input"
            type="text"
            id="zip"
            placeholder="10001"
            required
          />
        </div>

        <div>
          <label className="checkout__main__label" htmlFor="city">
            City
          </label>
          <input
            className="checkout__main__input"
            type="text"
            id="city"
            placeholder="New York"
            required
          />
        </div>

        <div>
          <label className="checkout__main__label" htmlFor="country">
            Country
          </label>
          <input
            className="checkout__main__input"
            type="text"
            id="country"
            placeholder="United States"
            required
          />
        </div>
      </div>
      <h2 className="checkout__main__subheading">Payment Details</h2>
      <div className="checkout__main__grid">
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
            value={!cashOnDelivery}
            defaultChecked
            onChange={() => setCashOnDelivery(false)}
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
            value={cashOnDelivery}
            onChange={() => setCashOnDelivery(true)}
          />
          <span></span>
        </div>
      </div>
      {cashOnDelivery ? (
        <section className="cash-on-d-desc">
          <img
            src="../assets/checkout/icon-cash-on-delivery.svg"
            alt="Cash on delivery icon"
          />
          <p className="cash-on-d-desc__p">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </section>
      ) : (
        <section>
          <div>
            <label className="checkout__main__label">e-Money Number</label>
            <input
              className="checkout__main__input"
              type="text"
              placeholder="238521993"
              required
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
        </section>
      )}
    </section>
  );
};

export default CheckoutMain;
