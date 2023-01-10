import { React, createContext, useState } from "react";
const CartContext = createContext();

function CartContextProvider(props) {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  function handleAddToCart(productObj, quantity) {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.product.name === productObj.name)) {
        return prevCart.map((item) => {
          if (item.name === productObj.name) {
            return { quantity: quantity, product: productObj };
          } else {
            return item;
          }
        });
      }
      return [...prevCart, { quantity: quantity, product: productObj }];
    });
  }

  function handleQuantityChange(id, value) {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.product.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + value };
        } else {
          return cartItem;
        }
      })
    );
    console.log(cart);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        showCart,
        setShowCart,
        handleAddToCart,
        handleQuantityChange,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
