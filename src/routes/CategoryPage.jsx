import React from "react";
import ProductCard from "../components/ProductCard";
import CategorySection from "../components/CategorySection";

const CategoryPage = ({ productData, category }) => {
  // Sorted by putting products whose "new" property is true first
  let products = productData
    .filter((product) => product.category === category)
    .sort((x, y) => {
      return x.new === y.new ? 0 : x ? 1 : -1;
    });

  return (
    <>
      <h2 className="category-page__heading">{category}</h2>
      <main className="category-page">
        <ul className="product-cards">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <CategorySection />
      </main>
    </>
  );
};

export default CategoryPage;
