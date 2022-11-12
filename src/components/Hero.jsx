import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ heroProduct }) => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url("/assets/home/mobile/image-header.jpg")` }}
    >
      <small>New product</small>
      <h2>XX99 Mark II Headphones</h2>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button>
        <Link to={`/product/${heroProduct.slug}`}>See Product</Link>
      </button>
      {/* Headphones Shop Speakers Shop Earphones Shop ZX9 speaker Upgrade to
      premium speakers that are phenomenally built to deliver truly remarkable
      sound. See product ZX7 speaker See product YX1 earphones See product
       Home Headphones Speakers Earphones Audiophile is an all in one
      stop to fulfill your audio needs. We're a small team of music lovers and
      sound specialists who are devoted to helping you get the most out of
      personal audio. Come and visit our demo facility - we’re open 7 days a
      week. Copyright 2021. All Rights Reserved */}
    </section>
  );
};

export default Hero;
