import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="modal-backdrop"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          className="modal-dialog"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Modal Header */}
          <div className="modal-header">
            <h2 id="modal-title" className="modal-title">
              {project.title}
            </h2>
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close project preview"
            >
              Close [ESC]
            </button>
          </div>

          {/* Modal Content */}
          <div className="modal-body">
            <div
              className="modal-preview-frame"
              style={{
                border: `1px solid ${project.accentColor}`,
              }}
            >
              <img
                src={project.staticMedia}
                alt={`${project.title} preview`}
                className="modal-preview-img"
              />
            </div>

            <p className="modal-desc">{project.description}</p>

            {project.statsSummary && (
              <div className="modal-stats">
                <strong>SPECIFICATION:</strong> {project.statsSummary}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
            >
              Dismiss
            </button>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              style={{
                backgroundColor: project.accentColor,
                borderColor: project.accentColor,
              }}
            >
              Open Live Project →
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
