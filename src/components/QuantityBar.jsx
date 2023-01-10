import React, { useContext } from "react";
import { CartContext } from "../cartContext";

const QuantityBar = ({ cart, id }) => {
  const { handleQuantityChange } = useContext(CartContext);
  const [cartItem] = cart.filter((cartItem) => {
    return cartItem.product.id === id;
  });

  return (
    <div className="quantity-bar">
      <div
        onClick={() => handleQuantityChange(cartItem.product.id, -1)}
        className="quantity-bar__operator"
      >
        -
      </div>
      <div className="quantity-bar__quantity">{cartItem.quantity}</div>
      <div
        onClick={() => handleQuantityChange(cartItem.product.id, 1)}
        className="quantity-bar__operator"
      >
        +
      </div>
    </div>
  );
};

export default QuantityBar;
