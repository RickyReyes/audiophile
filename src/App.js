import "./App.css";

import headphonesCategory from "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";

import speakersCategory from "./assets/home/mobile/image-speaker-zx9.png";

import earphonesCategory from "./assets/product-yx1-earphones/mobile/image-product.jpg";

import arrowRight from "./assets/shared/desktop/icon-arrow-right.svg";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductHighlightA from "./components/ProductHighlightA";
import ProductHighlightB from "./components/ProductHighlightB";
import ProductHighlightC from "./components/ProductHighlightC";
import About from "./components/About";
import Footer from "./components/Footer";

function HomeCategoryCard({ src, name }) {
  return (
    <li className="home-category-card">
      <img className="home-category-photo" src={src} alt="product category" />
      <p className="home-category-name">{name}</p>
      <div className="shop-arrow-flex">
        <small className="home-category__shop">Shop</small>
        <img src={arrowRight} alt="arrow right" />
      </div>
    </li>
  );
}

function HomeCategorySection() {
  return (
    <section className="home-category-section">
      <ul className="home-category-cards">
        <HomeCategoryCard src={speakersCategory} name="headphones" />
        <HomeCategoryCard src={speakersCategory} name="speakers" />
        <HomeCategoryCard src={speakersCategory} name="earphones" />
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <HomeCategorySection />
        <ProductHighlightA />
        <ProductHighlightB />
        <ProductHighlightC />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
