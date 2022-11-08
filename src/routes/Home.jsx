import React from "react";

import Hero from "../components/Hero";
import HomeCategorySection from "../components/HomeCategorySection";
import ProductHighlightA from "../components/ProductHighlightA";
import ProductHighlightB from "../components/ProductHighlightB";
import ProductHighlightC from "../components/ProductHighlightC";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <HomeCategorySection />
        <ProductHighlightA />
        <ProductHighlightB />
        <ProductHighlightC />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
