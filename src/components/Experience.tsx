import React from "react";
import "../styles/Experience.css";

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Assistant Engineer (Testing)",
      company: "INET Computer Services (Goa Electronics Limited)",
      date: "Jul 2025 – Present",
      description: [
        "Developed and executed detailed test cases and scenarios based on requirements.",
        "Performed functional, regression, and integration testing ensuring 99% defect-free releases.",
        "Reported and tracked bugs using JIRA, collaborating with developers for quick fixes.",
        "Validated data accuracy and conducted cross-browser testing for multiple modules."
      ],
    },
    {
      role: "System Administrator",
      company: "INET Computer Services (Goa Electronics Limited)",
      date: "Mar 2025 – Jun 2025",
      description: [
        "Organized and managed e-Governance renewal camps across 40+ constituencies.",
        "Configured biometric systems and ensured technical readiness on-site.",
        "Provided real-time troubleshooting and coordinated with field support teams."
      ],
    },
    {
      role: "Project Intern",
      company: "Tangentia India",
      date: "Jul 2024 – Oct 2024",
      description: [
        "Automated data loading processes and optimized system configurations.",
        "Reduced manual interventions by 30% through process scripting and testing automation.",
        "Worked closely with senior engineers to maintain database and project deliverables."
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Codanto",
      date: "Aug 2023 – Sep 2023",
      description: [
        "Developed responsive front-end layouts using HTML, CSS, and JavaScript.",
        "Integrated APIs to enhance dynamic content and user interactions.",
        "Built and deployed a portfolio website combining multiple web technologies."
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="date">{exp.date}</span>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
