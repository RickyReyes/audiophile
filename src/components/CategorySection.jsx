import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <section className="category-section">
      <ul className="category-cards">
        <CategoryCard
          src="/assets/home/mobile/image-speaker-zx9.png"
          name="headphones"
        />
        <CategoryCard
          src="/assets/home/mobile/image-speaker-zx9.png"
          name="speakers"
        />
        <CategoryCard
          src="/assets/home/mobile/image-speaker-zx9.png"
          name="earphones"
        />
      </ul>
    </section>
  );
};

export default CategorySection;
