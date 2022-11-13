import "./App.css";
import data from "./starter-code/data.json";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import CategorySection from "./components/CategorySection";
import About from "./components/About";
import Footer from "./components/Footer";

import Home from "./routes/Home";
import CategoryPage from "./routes/CategoryPage";
import ProductDetailSection from "./routes/ProductDetailSection";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [productData] = useState(data);
  const categories = ["headphones", "speakers", "earphones"];
  return (
    <div className="App">
      <Header />
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
