import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '../data/portfolioData';

/**
 * Hero Section Component
 * 
 * Layout:
 * - Left: ~50% width with Eyebrow, Two-line Display Serif Name, Bio, and "View my work →" link
 * - Right: Info column (3 stacked label/value pairs) + Pull-quote column separated by a hairline
 * 
 * Animation:
 * - Name lines reveal via clip-path line-wipe (inset 100% -> 0%), 600ms, cubic-bezier(0.65, 0, 0.35, 1)
 *   Staggered 150ms between line 1 and line 2
 * - Bio + link fade up (20px offset, 400ms) starting 200ms after name finishes (delay: 0.95s)
 * - Right-side info column and pull-quote fade in (opacity only, 300ms, delay: 1.05s)
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Custom cubic-bezier: [0.65, 0, 0.35, 1] (sharp, confident ease for line-wipe)
  const wipeEase = [0.65, 0, 0.35, 1];
  // Smooth ease for secondary elements
  const smoothEase = [0.22, 1, 0.36, 1];

  // Eyebrow unmask variant
  const eyebrowVariants = {
    hidden: {
      clipPath: shouldReduceMotion ? 'none' : 'inset(0 100% 0 0)',
      opacity: 1,
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: wipeEase,
      },
    },
  };

  // Line 1 clip-path line-wipe reveal (0s - 0.6s)
  const line1Variants = {
    hidden: {
      clipPath: shouldReduceMotion ? 'none' : 'inset(0 100% 0 0)',
      opacity: 1,
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: wipeEase,
        delay: 0,
      },
    },
  };

  // Line 2 (burgundy): staggered 150ms after Line 1 starts (0.15s - 0.75s)
  const line2Variants = {
    hidden: {
      clipPath: shouldReduceMotion ? 'none' : 'inset(0 100% 0 0)',
      opacity: 1,
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: wipeEase,
        delay: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  // Bio line & "View my work" link: starts 200ms after name completes (0.75s + 0.20s = 0.95s)
  // Fade + slide up together: 20px y-offset, 400ms duration
  const bioCtaVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: smoothEase,
        delay: shouldReduceMotion ? 0 : 0.95,
      },
    },
  };

  // Right-side info column and pull-quote: simple opacity fade (300ms, no slide), starts at 1.05s
  const rightColumnVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : 1.05,
      },
    },
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-name">
      <div className="page-container">
        <div className="hero-grid">
          {/* Left Column: Eyebrow, Display Name (Line-wipe), Bio & Link (Fade-slide) */}
          <div className="hero-left-col">
            <motion.div
              className="hero-eyebrow-wrap"
              variants={eyebrowVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="eyebrow-label">{siteConfig.eyebrow}</span>
            </motion.div>

            {/* Display Name with clip-path line-wipe unmasking */}
            <h1 id="hero-name" className="hero-headline">
              <motion.span
                className="hero-headline-first"
                variants={line1Variants}
                initial="hidden"
                animate="visible"
                style={{ display: 'block', willChange: 'clip-path' }}
              >
                {siteConfig.firstName}
              </motion.span>
              <motion.span
                className="hero-headline-last"
                variants={line2Variants}
                initial="hidden"
                animate="visible"
                style={{ display: 'block', willChange: 'clip-path' }}
              >
                {siteConfig.lastName}
              </motion.span>
            </h1>

            {/* Bio statement & CTA link fade+slide up together */}
            <motion.div
              variants={bioCtaVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="hero-bio">
                {siteConfig.bio}
              </p>

              <div>
                <a href={siteConfig.ctaHref || "#projects"} className="hero-cta-link">
                  <span>{siteConfig.ctaText}</span>
                  <span className="hero-cta-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Info column + Pull-quote top-aligned, separated by a vertical hairline */}
          <motion.div
            className="hero-right-col"
            variants={rightColumnVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Info Column (3 stacked label/value pairs with thin horizontal dividers) */}
            <div className="hero-info-column">
              {siteConfig.infoColumn.map((item, idx) => (
                <div key={idx} className="hero-info-item">
                  <span className="hero-info-label">{item.label}</span>
                  <p className="hero-info-value">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Pull-Quote Column */}
            <div className="hero-quote-column">
              <blockquote className="hero-pullquote">
                {siteConfig.quoteBlock.quoteBefore}
                <span className="quote-highlight">{siteConfig.quoteBlock.quoteHighlight}</span>
                {siteConfig.quoteBlock.quoteAfter}
              </blockquote>
              <div className="hero-quote-divider" />
              <p className="hero-quote-supporting">
                {siteConfig.quoteBlock.supportingSentence}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
