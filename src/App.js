import "./App.css";
import data from "./starter-code/data.json";

import { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CategorySection from "./components/CategorySection";
import ConfirmationModal from "./components/ConfirmationModal";

import Home from "./routes/Home";
import CategoryPage from "./routes/CategoryPage";
import CheckoutPage from "./routes/CheckoutPage";
import ProductDetailSection from "./routes/ProductDetailSection";
import { CartContext } from "./cartContext";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMobileMenu(false);
  }, [pathname]);

  // Gather the category names (i.e. "headphones", "earphones", "speakers" from the data)
  const categoryNames = data.reduce((categoriesArray, currentProduct) => {
    if (!categoriesArray.includes(currentProduct.category)) {
      categoriesArray.push(currentProduct.category);
    }
    return categoriesArray;
  }, []);

  const [productData] = useState(data);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { cartRef, showCart, setShowCart, showConfirmationModal } =
    useContext(CartContext);

  console.log(showMobileMenu);
  return (
    <div className={`App ${showMobileMenu ? "mobile-menu" : ""}`}>
      <Header setShowMobileMenu={setShowMobileMenu} setShowCart={setShowCart} />
      {showMobileMenu && <CategorySection mobileMenu={true} />}
      {showConfirmationModal && <ConfirmationModal />}
      {showCart && <Cart />}
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {categoryNames.map((category) => (
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
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
