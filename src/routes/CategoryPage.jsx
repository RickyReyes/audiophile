import React from "react";
import CategoryPageCard from "../components/CategoryPageCard";
import CategorySection from "../components/CategorySection";
import About from "../components/About";

const CategoryPage = ({ productData, category }) => {
  // Sorted by putting products whose "new" property is true first
  let products = productData
    .filter((product) => product.category === category)
    .sort((x, y) => {
      return x.new === y.new ? 0 : x ? 1 : -1;
    });

  return (
    <section>
      <h2 className="category-page__heading">{category}</h2>
      <main className="category-page">
        <ul className="category-page__cards">
          {products.map((product) => (
            <CategoryPageCard key={product.id} product={product} />
          ))}
        </ul>
        <CategorySection />
        <About />
      </main>
    </section>
  );
};

export default CategoryPage;
