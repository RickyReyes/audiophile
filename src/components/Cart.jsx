import React from "react";
import QuantityBar from "./QuantityBar";

const Cart = ({ cart, setCart }) => {
  let totalAmountDue = cart.reduce((total, cartItem) => {
    return total + cartItem?.product.price * cartItem.quantity;
  }, 0);

  return (
    <section className="cart">
      <div className="cart__header">
        <h1 className="cart__heading">{`CART (${cart.reduce(
          (total, cartItem) => {
            return total + cartItem.quantity;
          },
          0
        )})`}</h1>
        {cart.length > 0 && (
          <p className="cart__remove-all" onClick={() => setCart([])}>
            Remove all
          </p>
        )}
      </div>
      {cart.length === 0 ? (
        <p className="cart__empty">Your cart is empty.</p>
      ) : (
        <div className="cart__main">
          <ul className="cart__rows">
            {cart.map(({ product, quantity }) => (
              <li key={product.id} className="cart__row">
                <img
                  className="cart__img"
                  src={product.image.mobile.substring(1)}
                  alt={product.name}
                />
                <div className="cart__name-and-price">
                  <strong>{product.name.split(" ")[0]}</strong>
                  <p className="cart__price">
                    $ {product.price.toLocaleString("en-US")}
                  </p>
                </div>
                <QuantityBar cart={cart} id={product.id} />
              </li>
            ))}
          </ul>
          <div className="cart__total-flex">
            <div className="cart__total-word">Total</div>
            <strong>$ {totalAmountDue}</strong>
          </div>
          <button className="btn cart__checkout-btn">Checkout</button>
        </div>
      )}
    </section>
  );
};

export default Cart;
