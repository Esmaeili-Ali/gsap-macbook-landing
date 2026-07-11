import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1-800-MY-APPLE (1-800-692-7753).
        </p>
        <img src="logo.svg" alt="apple" />
      </div>
      <hr />

      <div className="links">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
        <ul>
          {footerLinks.map(({ link, label }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
