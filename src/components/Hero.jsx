import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ heroProduct }) => {
  return (
    <section className="hero">
      <small className="hero__new-product ">New product</small>
      <h1 className="hero__heading">XX99 Mark II Headphones</h1>
      <p className="hero__p">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className="btn btn--orange">
        <Link to={`/product/${heroProduct.slug}`}>See Product</Link>
      </button>
    </section>
  );
};

export default Hero;
