import React from "react";
import ProductCard from "../components/ProductCard";

const CategoryPage = ({ productData, category }) => {
  let products = productData
    .filter((product) => product.category === category)
    .sort((x, y) => {
      return x.new === y.new ? 0 : x ? 1 : -1;
    });

  // Sorted by putting products whose "new" property is true first
  return (
    <>
      <h1 className="category-page__heading">{category}</h1>
      <main className="category-page">
        <ul className="product-cards">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default CategoryPage;
