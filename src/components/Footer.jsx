import React from 'react';
import { siteConfig } from '../data/portfolioData';

/**
 * Footer Component
 * 
 * Left: Initials in small badge/box + colored dot accent (matching navbar brand)
 * Right: Plain text contact links (Email, GitHub, LinkedIn) separated by thin vertical dividers
 * Border: Thin hairline border above the footer
 */
export function Footer() {
  return (
    <footer id="contact" className="site-footer" role="contentinfo">
      <div className="page-container">
        <div className="footer-inner">
          {/* Left: Initials badge + colored dot */}
          <div className="footer-left">
            <span className="brand-badge">{siteConfig.initials}</span>
            <span className="brand-title">
              {siteConfig.name}
              <span className="brand-dot" aria-hidden="true" />
            </span>
          </div>

          {/* Right: Plain text contact links separated by thin vertical dividers */}
          <div className="footer-links-wrap">
            {siteConfig.contactLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                {idx > 0 && <span className="footer-divider" aria-hidden="true" />}
                <a
                  href={link.href}
                  className="footer-link-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
