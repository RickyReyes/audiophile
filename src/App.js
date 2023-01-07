import "./App.css";
import data from "./starter-code/data.json";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import About from "./components/About";
import Footer from "./components/Footer";
import CategorySection from "./components/CategorySection";

import Home from "./routes/Home";
import CategoryPage from "./routes/CategoryPage";
import ProductDetailSection from "./routes/ProductDetailSection";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMobileMenu(false);
  }, [pathname]);

  const categories = ["headphones", "speakers", "earphones"];
  const [productData] = useState(data);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
    console.log(cart);
  }

  return (
    <div className="App">
      <Header setShowMobileMenu={setShowMobileMenu} setShowCart={setShowCart} />
      {showMobileMenu && <CategorySection mobileMenu={true} />}
      {showCart && <Cart cart={cart} />}
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        {categories.map((category) => (
          <Route
            key={category}
            path={`/${category}`}
            element={
              <CategoryPage category={category} productData={productData} />
            }
          />
        ))}
        {productData.map((product) => (
          <Route
            key={product.id}
            path={`/product/${product.slug}`}
            element={
              <ProductDetailSection
                product={product}
                productData={productData}
                cart={cart}
                setCart={setCart}
                handleAddToCart={handleAddToCart}
              />
            }
          />
        ))}
      </Routes>
      <About />
      <Footer />
    </div>
  );
}

export default App;
