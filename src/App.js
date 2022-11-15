import "./App.css";
import data from "./starter-code/data.json";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import About from "./components/About";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import CategoryPage from "./routes/CategoryPage";
import ProductDetailSection from "./routes/ProductDetailSection";
import CategorySection from "./components/CategorySection";

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

  const [cart, setCart] = useState([productData[0]]);
  console.log(cart);
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
            element={<ProductDetailSection product={product} />}
          />
        ))}
      </Routes>
      <About />
      <Footer />
    </div>
  );
}

export default App;
