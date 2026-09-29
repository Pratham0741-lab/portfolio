import React from 'react';

/**
 * SkillGroup Component
 * 
 * Renders a single column in the Skills section:
 * - Small solid color-block label chip (rounded slightly, colored using matching accent)
 * - Plain vertical list of skill names (no bullets, no icons)
 */
export function SkillGroup({ category }) {
  if (!category) return null;

  return (
    <div className="skill-category-col">
      {/* Category chip: solid fill using matching accent color */}
      <div>
        <span
          className="skill-color-tag"
          style={{ backgroundColor: category.accentColor }}
        >
          {category.name}
        </span>
      </div>

      {/* Plain vertical list of skill names */}
      <ul className="skill-items-list">
        {category.skills.map((skill, idx) => (
          <li key={idx} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
