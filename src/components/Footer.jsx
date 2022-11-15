import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="orange-line"></div>
      <Link to="/">
        <img
          className="footer-logo"
          src="/assets/shared/desktop/logo.svg"
          alt="audiophile logo"
        />
      </Link>
      <ul className="footer-nav" aria-roledescription="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/headphones">Headphones</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
        <li>
          <Link to="/earphones">Earphones</Link>
        </li>
      </ul>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="copyright-logos-flex">
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
      </div>
    </footer>
  );
};

export default Footer;
