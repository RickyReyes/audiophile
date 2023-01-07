import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <section className="cart">
      <div className="cart__header">
        <h1>{`CART (${cart.length})`}</h1>
        <p className="remove-all">Remove all</p>
      </div>
      <ul className="cart__rows">
        {cart.map(({ product }) => (
          <li className="cart__row">
            <img src={product.image.mobile.substring(1)} alt={product.name} />
            <div className="cart__name-and-price">
              <strong>{product.name.split(" ")[0]}</strong>
              <p className="cart__price">
                ${product.price.toLocaleString("en-US")}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart__total-flex">
        <div className="cart__total-word">Total</div>
        <strong>$ 5,396</strong>
      </div>
      <button className="btn cart__checkout-btn">Checkout</button>
    </section>
  );
};

export default Cart;
