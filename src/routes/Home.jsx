import React from "react";

import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductHighlightA from "../components/ProductHighlightA";
import ProductHighlightB from "../components/ProductHighlightB";
import ProductHighlightC from "../components/ProductHighlightC";
import Footer from "../components/Footer";

const Home = ({ productData }) => {
  const heroProduct = productData.find(
    (product) => product.name === "XX99 Mark II Headphones"
  );
  return (
    <main>
      <Hero heroProduct={heroProduct} />
      <CategorySection />
      <ProductHighlightA />
      <ProductHighlightB />
      <ProductHighlightC />
    </main>
  );
};

export default Home;
