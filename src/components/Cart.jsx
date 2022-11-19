import React from "react";

const Cart = ({ cart }) => {
  return (
    <section className="cart">
      <div className="cart-header">
        <h1>{`CART (${1})`}</h1>
        <p className="remove-all">Remove all</p>
      </div>
      <ul className="cart-rows">
        {cart.map((cartItem) => (
          <li className="cart-row">
            <img src={cartItem.image.mobile.substring(1)} alt={cartItem.name} />
            <div className="name-and-price">
              <strong>{cartItem.name.split(" ")[0]}</strong>
              <p className="price">${cartItem.price.toLocaleString("en-US")}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="total-flex">
        <div className="total-word">Total</div>
        <strong>$ 5,396</strong>
      </div>
      <button>Checkout</button>
    </section>
  );
};

export default Cart;
