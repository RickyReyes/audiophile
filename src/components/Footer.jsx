import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__orange-line" />
      <Link to="/">
        <img
          className="logo"
          src="/assets/shared/desktop/logo.svg"
          alt="audiophile logo"
        />
      </Link>
      <ul className="footer__nav" aria-roledescription="navigation">
        <li className="footer__nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="footer__nav__item">
          <Link to="/headphones">Headphones</Link>
        </li>
        <li className="footer__nav__item">
          <Link to="/speakers">Speakers</Link>
        </li>
        <li className="footer__nav__item">
          <Link to="/earphones">Earphones</Link>
        </li>
      </ul>
      <p className="footer__p">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="footer__copyright-logos">
        <small className="footer__copyright">
          Copyright 2021. All Rights Reserved
        </small>
        <ul className="footer__logos">
          <li>
            <img
              className="footer__logos__logo"
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook logo"
            />
          </li>
          <li>
            <img
              className="footer__logos__logo"
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter logo"
            />
          </li>
          <li>
            <img
              className="footer__logos__logo"
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
