import React from "react";
import speakersCategory from "../assets/home/tablet/image-speaker-zx9.png";

const ProductHighlightA = () => {
  return (
    <aside className="product-highlight-a">
      <div className="img-container">
        <img src={speakersCategory} alt="" />
      </div>
      <h2>
        ZX9
        <br />
        speaker
      </h2>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <button>See product</button>
    </aside>
  );
};

export default ProductHighlightA;