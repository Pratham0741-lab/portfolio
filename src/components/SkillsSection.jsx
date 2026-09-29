import React from 'react';
import { skillGroups } from '../data/portfolioData';
import { SkillGroup } from './SkillGroup';

/**
 * SkillsSection Component
 * 
 * Section label "SKILLS"
 * Four columns (Programming, Machine Learning & AI, Web Development, Tools & Platforms)
 * Mapped through reusable <SkillGroup>
 */
export function SkillsSection({ groups = skillGroups }) {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-eyebrow">
      <div className="page-container">
        {/* Section Header Label */}
        <span id="skills-eyebrow" className="eyebrow-label">
          SKILLS
        </span>

        {/* 4 Grouped Columns */}
        <div className="skills-grid">
          {groups.map((group) => (
            <SkillGroup key={group.id} category={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
