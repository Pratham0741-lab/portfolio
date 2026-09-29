import React from 'react';
import { ProjectRow } from './ProjectRow';

/**
 * FeaturedProjects Component
 * 
 * Header:
 * - Section label "FEATURED PROJECTS" (small tracked uppercase)
 * - "View all projects →" link right-aligned on the same line
 * 
 * Stack:
 * - Exactly FOUR full-width project rows, stacked vertically with NO gap between rows
 *   (touching edge to edge, each row is its own colored block)
 * - Rendered from the single projects config array via reusable <ProjectRow>
 */
export function FeaturedProjects({ projects }) {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-eyebrow">
      <div className="page-container">
        {/* Section Header: Eyebrow label left, "View all projects →" right */}
        <div className="section-header-row">
          <span id="projects-eyebrow" className="eyebrow-label">
            FEATURED PROJECTS
          </span>
          <a
            href="#projects"
            className="view-all-link"
          >
            <span>View all projects</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Exactly FOUR full-width project rows, stacked vertically with NO gap between rows */}
      <div className="projects-fullwidth-stack">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
