import React from "react";
import QuantityBar from "./QuantityBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../cartContext";

const Cart = () => {
  const { cart, setCart, setShowCart, totalAmountDue } =
    useContext(CartContext);

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
            {cart.map(({ product }) => (
              <li key={product.id} className="cart__row">
                <img
                  className="cart__img"
                  src={product.image.mobile.substring(1)}
                  alt={product.name}
                />
                <div className="cart__name-and-price">
                  <strong>{product.shortName}</strong>
                  <p className="cart__price">
                    $ {product.price.toLocaleString("en-US")}
                  </p>
                </div>
                <QuantityBar cart={cart} id={product.id} />
              </li>
            ))}
          </ul>
          <div className="total-flex">
            <div className="total-flex__item">Total</div>
            <strong>$ {totalAmountDue}</strong>
          </div>
          <Link to="/checkout">
            <button
              onClick={() => setShowCart(false)}
              className="btn btn--orange"
            >
              Checkout
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
