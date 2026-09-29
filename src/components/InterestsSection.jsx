import React from 'react';
import { interestsText, siteConfig } from '../data/portfolioData';

/**
 * InterestsSection Component
 * 
 * - Section label "INTERESTS"
 * - One to two sentences of body-serif-sized text (larger than normal body text)
 * - ONE phrase wrapped in a <span> with solid burgundy background (#5C1A22) and white text (#F5F0E6)
 * - Built by splitting the sentence into beforeText, highlightedText, afterText fields in config
 */
export function InterestsSection({ data = interestsText || siteConfig.interests }) {
  const { beforeText, highlightedText, afterText } = data || {};

  return (
    <section id="about" className="interests-section" aria-labelledby="interests-eyebrow">
      <div className="page-container">
        {/* Section Label */}
        <span id="interests-eyebrow" className="eyebrow-label">
          INTERESTS
        </span>

        {/* Body-serif-sized text with solid burgundy highlight */}
        <p className="interests-body">
          <span>{beforeText}</span>
          <span className="interests-highlight-solid">
            {highlightedText}
          </span>
          <span>{afterText}</span>
        </p>
      </div>
    </section>
  );
}
