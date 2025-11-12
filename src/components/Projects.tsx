import React from "react";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Sight Speak for Visually Impaired",
      period: "2024",
      description:
        "An assistive AI system that uses YOLOv5 for real-time object detection and gTTS for multilingual speech output (including Konkani). Recognized at ICCNT 2024 for innovation and societal impact.",
      tech: ["Python", "YOLOv5", "gTTS", "OpenCV"],
      github: "https://github.com/", // replace with actual repo if available
      demo: "#", // optional
    },
    {
      title: "Portfolio Website",
      period: "2025",
      description:
        "A personal developer portfolio built with React, TypeScript, and Vite — highlighting my projects, skills, and career journey.",
      tech: ["React", "TypeScript", "CSS3", "Vite"],
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Test Automation Dashboard",
      period: "2024",
      description:
        "Created an internal QA dashboard to track test results, bug reports, and deployment readiness using Postman collections and custom APIs.",
      tech: ["Postman", "MySQL", "JavaScript", "HTML"],
      github: "https://github.com/",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p className="projects-desc">
        A collection of my academic and professional projects, showcasing my
        skills in web development, testing, and automation.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="period">{project.period}</span>
            </div>

            <p className="description">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-item">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
