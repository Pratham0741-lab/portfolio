import React from 'react';

/**
 * Data-driven structured info block component
 * Renders label-value pairs (Based in, Student at, Interests, etc.)
 */
export function HeroInfoBlock({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="hero-info-card">
      {items.map((item) => (
        <div key={item.label} className="hero-info-item">
          <span className="hero-info-label">{item.label}</span>
          <p className="hero-info-value">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
