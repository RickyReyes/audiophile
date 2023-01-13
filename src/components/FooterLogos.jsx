import React from "react";

const FooterLogos = () => {
  return (
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
  );
};

export default FooterLogos;
