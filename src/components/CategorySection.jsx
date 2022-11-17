import CategoryCard from "./CategorySectionCard";

const CategorySection = ({ mobileMenu }) => {
  return (
    <section
      className="category-section"
      style={
        mobileMenu
          ? {
              position: "fixed",
              overflow: "scroll",
              boxShadow: "0px 500px 10px 10px rgba(0, 0, 0, 0.5)",
              zIndex: 1,
              paddingBottom: "35px",
              borderRadius: "0px 0px 8px 8px",
            }
          : {}
      }
    >
      <ul className="category-section__cards">
        <CategoryCard
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          name="headphones"
        />
        <CategoryCard
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          name="speakers"
        />
        <CategoryCard
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          name="earphones"
        />
      </ul>
    </section>
  );
};

export default CategorySection;
