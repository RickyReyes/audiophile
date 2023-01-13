import CategoryCard from "./CategorySectionCard";

/* This component is used in the flow of all of the pages of this site, as well as the mobile menu, when mobileMenu === true.
 */
const CategorySection = ({ mobileMenu }) => {
  console.log(mobileMenu);
  return (
    <section className={`category-section ${mobileMenu ? "mobile" : ""}`}>
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
