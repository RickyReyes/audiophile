import React from "react";

const About = () => {
  return (
    <article className="about">
      <div className="about__img" />
      <div>
        <h4 className="about__heading">
          Bringing you the{" "}
          <span className="about__heading--highlight">best</span> audio gear
        </h4>
        <p className="about__p">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </article>
  );
};

export default About;
