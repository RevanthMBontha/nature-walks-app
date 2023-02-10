import React from 'react';
import { pageLinks, pageIcons } from '../data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;

          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {pageIcons.map((icon) => {
          const { id, href, iconInfo } = icon;

          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={iconInfo}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; NatureWalks travel tours company
        <span id="date"></span> all rights reserved
      </p>
      <p className="footer-link">{year}</p>
    </footer>
  );
};

export default Footer;
