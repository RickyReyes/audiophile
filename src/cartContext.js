import { React, createContext, useState, useRef, useEffect } from "react";
const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [showCart, setShowCart] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  let cartRef = useRef(null);

  /* Hide a modal when user clicks outside of it */
  function useClickOutside(ref, toggleFunc, urlSnippet) {
    useEffect(() => {
      let handler = (e) => {
        if (e.target.src && e.target.src.includes(urlSnippet)) {
          toggleFunc(true);
        } else if (ref.current && !ref.current.contains(e.target)) {
          toggleFunc(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }, []);
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
        totalAmountDue,
        showConfirmationModal,
        setShowConfirmationModal,
        cartRef,
        useClickOutside,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
