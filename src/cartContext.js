import { React, createContext, useState } from "react";
const CartContext = createContext();

function CartContextProvider(props) {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  function handleAddToCart(productObj, quantity) {
    setShowCart(true);
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
    // Handle REMOVE from cart (quantity goes from 1 to 0)
    let product = cart.find((item) => item.product.id === id);
    if (value === -1 && product.quantity === 1) {
      setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
      return;
    }

    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.product.id === id) {
          let newQuantity = cartItem.quantity + value;
          return { ...cartItem, quantity: newQuantity };
        }
        return cartItem;
      })
    );
  }

  let totalAmountDue = cart.reduce((total, cartItem) => {
    return total + cartItem?.product.price * cartItem.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        showCart,
        setShowCart,
        handleAddToCart,
        handleQuantityChange,
        totalAmountDue,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
