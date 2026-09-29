import React, { useState } from 'react';
import { siteConfig } from '../data/portfolioData';

/**
 * Navbar component.
 * Exact Animation Requirements:
 * - Nav links: underline draws in from left to right on hover over 200ms.
 * - "Get in touch" button: background darkens by ~10% AND the arrow icon translates 4px right (150ms spring).
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header" role="banner">
      <div className="page-container">
        <nav className="nav-inner" role="navigation" aria-label="Main Navigation">
          {/* Logo / Initials + Colored Dot Accent */}
          <a href="#home" className="brand-link" aria-label={`${siteConfig.name} Home`}>
            <span className="brand-badge">{siteConfig.initials}</span>
            <span className="brand-title">
              {siteConfig.name}
              <span className="brand-dot" aria-hidden="true" />
            </span>
          </a>

          {/* Navigation Links + CTA Button */}
          <div className={`nav-links-wrap ${isMobileMenuOpen ? 'open' : ''}`}>
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-anchor"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}

            <a
              href={siteConfig.contactLinks?.[0]?.href || '#contact'}
              className="nav-cta-btn"
              onClick={closeMobileMenu}
            >
              <span>Get in touch</span>
              <span className="nav-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={toggleMobileMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
