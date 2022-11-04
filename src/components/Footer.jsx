import React from "react";
import audiophileLogo from "../assets/shared/desktop/logo.svg";
import facebookLogo from "../assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "../assets/shared/desktop/icon-twitter.svg";
import instagramLogo from "../assets/shared/desktop/icon-instagram.svg";
const Footer = () => {
  return (
    <footer>
      <img src={audiophileLogo} alt="" />
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
          <img src={facebookLogo} alt="facebook logo" />
        </li>
        <li>
          <img src={twitterLogo} alt="twitter logo" />
        </li>
        <li>
          <img src={instagramLogo} alt="instagram logo" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
