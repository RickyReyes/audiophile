import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <section className="cart">
      <div className="cart__header">
        <h1 className="cart__heading">{`CART (${cart.length})`}</h1>
        <p className="cart__remove-all" onClick={() => setCart([])}>
          Remove all
        </p>
      </div>
      <ul className="cart__rows">
        {cart.map(({ product, quantity }) => (
          <li className="cart__row">
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
            <div className="product-detail__amount-container">
              <div className="product-detail__amount__operator">-</div>
              <div className="product-detail__amount">{quantity}</div>
              <div className="product-detail__amount__operator">+</div>
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
