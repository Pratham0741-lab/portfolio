import React from 'react';

/**
 * Data-driven pull-quote block component
 * Renders italic serif quote + supporting text
 */
export function HeroQuoteBlock({ quote, supportingText }) {
  if (!quote) return null;

  return (
    <div className="hero-quote-card">
      <blockquote className="hero-pullquote">
        {quote}
      </blockquote>
      {supportingText && (
        <p className="hero-quote-supporting">
          {supportingText}
        </p>
      )}
    </div>
  );
}
