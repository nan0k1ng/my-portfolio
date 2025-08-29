import React from 'react';

const projects = [
  {
    name: '🧠 Matatu OS',
    description: 'A modular transport management system with symbolic UX overlays.',
    industry: 'Mobility & Mythic Systems',
  },
  {
    name: '🌐 Portfolio Landing',
    description: 'Minimalist, enhancement-ready personal site built with Vite + React.',
    industry: 'Web Development',
  },
  {
    name: '🔥 Ritual Tracker',
    description: 'Experimental app for mapping daily rituals to archetypal patterns.',
    industry: 'Symbolic Tech',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">🚀 Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="industry-tag">{project.industry}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;