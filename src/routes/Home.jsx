import React from "react";

import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductHighlightA from "../components/ProductHighlightA";
import ProductHighlightB from "../components/ProductHighlightB";
import ProductHighlightC from "../components/ProductHighlightC";

const Home = ({ productData }) => {
  const heroProduct = productData.find(
    (product) => product.name === "XX99 Mark II Headphones"
  );

  const productA = productData.find(
    (product) => product.name === "ZX9 Speaker"
  );

  const productB = productData.find(
    (product) => product.name === "ZX7 Speaker"
  );

  const productC = productData.find(
    (product) => product.name === "YX1 Wireless Earphones"
  );

  return (
    <main>
      <Hero heroProduct={heroProduct} />
      <section className="home">
        <CategorySection mobileMenu={false} />
        <section className="product-highlights">
          <ProductHighlightA product={productA} />
          <ProductHighlightB product={productB} />
          <ProductHighlightC product={productC} />
        </section>
      </section>
    </main>
  );
};

export default Home;
