import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SkillsSection } from './components/SkillsSection';
import { InterestsSection } from './components/InterestsSection';
import { Footer } from './components/Footer';

import { projects } from './data/portfolioData';

function App() {
  return (
    <>
      {/* Keyboard Accessibility: Skip to Content Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 1. Navbar */}
      <Navbar />

      {/* Main Landmark */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Projects Section */}
        <FeaturedProjects projects={projects} />

        {/* 4. Skills Section */}
        <SkillsSection />

        {/* 5. Interests Section */}
        <InterestsSection />
      </main>

      {/* 6. Footer */}
      <Footer />
    </>
  );
}

export default App;
