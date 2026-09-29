import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useHoverCapability } from '../hooks/useHoverCapability';
import { ProjectPreviewGraphic } from './ProjectPreviewGraphic';

/**
 * Reusable ProjectRow Component
 * 
 * Exact specs:
 * - Alternating layout: row 1 & 3 = text-left/image-right, row 2 & 4 = image-left/text-right
 * - Outer accent bar (~6-8px on outer edge, widens to 10px on hover over 250ms, reverses in 200ms)
 * - Row background: diagonal gradient using ITS OWN accent color (darker toward bottom-right)
 * - Text block: White/cream display serif title (#F5F0E6), muted white description, "View project →" link
 * - Title hover interaction: subtle letter-spacing tightening (-0.5px, 250ms enter, 200ms leave)
 * - Media placeholder: contained roughly 55-60% width, scales 1 -> 1.03 & brightness(0.92) over 350ms
 * - Link: underline draws left-to-right, arrow translates 5px right over 200ms
 * - Touch devices: skips hover effects, tapping navigates to projectUrl
 * - prefers-reduced-motion respected
 */
export function ProjectRow({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const hasHover = useHoverCapability();
  const shouldReduceMotion = useReducedMotion();

  const isTextLeft = project.layout === 'text-left';
  const customEase = [0.22, 1, 0.36, 1];

  const handleMouseEnter = () => {
    if (hasHover && !shouldReduceMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasHover) {
      setIsHovered(false);
    }
  };

  const handleMediaClick = () => {
    if (project.projectUrl && project.projectUrl !== '#') {
      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const isRowActive = isHovered && hasHover && !shouldReduceMotion;

  return (
    <article
      className={`project-row layout-${project.layout || 'text-left'}`}
      style={{
        background: project.accentGradient || project.accentColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* 
        Outer Accent Bar:
        ~6-8px on outer edge (left edge for text-left rows, right edge for text-right rows)
        Widens 6px -> 10px on hover (250ms), reverses in 200ms
      */}
      <motion.div
        className={`project-accent-bar ${isTextLeft ? 'edge-left' : 'edge-right'}`}
        initial={{ width: 6 }}
        animate={{
          width: isRowActive ? 10 : 6,
        }}
        transition={{
          duration: isRowActive ? 0.25 : 0.2,
          ease: isRowActive ? customEase : 'easeOut',
        }}
        style={{
          backgroundColor: project.accentColor,
        }}
        aria-hidden="true"
      />

      <div className="page-container">
        <div className="project-row-inner">
          {/* Text Block: Title in white/cream display serif, muted white description */}
          <div className="project-text-block">
            <motion.h3
              id={`project-title-${project.id}`}
              className="project-title"
              animate={{
                letterSpacing: isRowActive && !shouldReduceMotion ? '-0.5px' : '0px',
                color: isRowActive ? '#FFFFFF' : '#F5F0E6',
              }}
              transition={{
                duration: isRowActive ? 0.25 : 0.2,
                ease: 'easeOut',
              }}
            >
              {project.title}
            </motion.h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-link-wrap">
              <a
                href={project.projectUrl || '#'}
                target={project.projectUrl && project.projectUrl !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`project-action-link ${isLinkHovered ? 'active-hover' : ''}`}
                onMouseEnter={() => setIsLinkHovered(true)}
                onMouseLeave={() => setIsLinkHovered(false)}
              >
                <span className="project-link-text">View project</span>
                <motion.span
                  className="project-link-arrow"
                  animate={
                    isLinkHovered && !shouldReduceMotion
                      ? { x: 5 }
                      : { x: 0 }
                  }
                  transition={{
                    duration: 0.2,
                    ease: 'easeOut',
                  }}
                  aria-hidden="true"
                >
                  →
                </motion.span>
              </a>
            </div>
          </div>

          {/* 
            Image Block: placeholder container for a project screenshot/video,
            roughly 55-60% of row width, contained within row with padding, NOT touching edges.
          */}
          <div
            className="project-media-block"
            onClick={handleMediaClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleMediaClick();
              }
            }}
            aria-label={`${project.title} screenshot placeholder. Tap to open project.`}
          >
            <motion.div
              className="media-placeholder-frame"
              animate={{
                scale: isRowActive ? 1.03 : 1,
                filter: isRowActive ? 'brightness(0.92)' : 'brightness(1)',
              }}
              transition={{
                duration: isRowActive ? 0.35 : 0.2,
                ease: isRowActive ? customEase : 'easeOut',
              }}
            >
              {/* replace with actual project screenshot/video */}
              <ProjectPreviewGraphic projectId={project.id} accentColor={project.accentColor} />
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
}
