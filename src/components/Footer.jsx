import React from "react";

const Footer = () => {
  return (
    <footer>
      <img src="/assets/shared/desktop/logo.svg" alt="audiophile logo" />
      <ul className="footer-nav" aria-roledescription="navigation">
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p></p>
      <small>Copyright 2021. All Rights Reserved</small>
      <ul className="footer-logos">
        <li>
          <img
            src="/assets/shared/desktop/icon-facebook.svg"
            alt="facebook logo"
          />
        </li>
        <li>
          <img
            src="/assets/shared/desktop/icon-twitter.svg"
            alt="twitter logo"
          />
        </li>
        <li>
          <img
            src="/assets/shared/desktop/icon-instagram.svg"
            alt="instagram logo"
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
