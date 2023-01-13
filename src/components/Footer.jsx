import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import FooterLogos from "./FooterLogos";

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
      <Nav />
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
        <FooterLogos />
      </div>
    </footer>
  );
};

export default Footer;
