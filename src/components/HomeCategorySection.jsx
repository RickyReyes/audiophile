import HomeCategoryCard from "../components/HomeCategoryCard";

const HomeCategorySection = () => {
  return (
    <section className="home-category-section">
      <ul className="home-category-cards">
        <HomeCategoryCard
          src="/assets/home/mobile/image-speaker-zx9.png"
          name="headphones"
        />
        <HomeCategoryCard
          src="/assets/home/mobile/image-speaker-zx9.png"
          name="speakers"
        />
        <HomeCategoryCard
          src="/assets/home/mobile/image-speaker-zx9.png"
          name="earphones"
        />
      </ul>
    </section>
  );
};

export default HomeCategorySection;
