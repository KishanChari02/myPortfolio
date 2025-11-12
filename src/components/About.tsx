import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I’m <strong>Kishan Chari</strong>, a Computer Engineering graduate and
          passionate software professional with experience in web development,
          testing, and system operations. My focus lies in creating reliable,
          user-centric software with clean architecture and efficient testing
          workflows.
        </p>
        <p>
          I enjoy turning ideas into functional solutions — whether it’s
          developing responsive web apps or ensuring that every feature passes
          rigorous quality checks. I believe in continuous learning and always
          keep myself updated with modern tools and technologies.
        </p>

        <div className="about-details">
          <div>
            <h3>Education</h3>
            <p>
              <strong>B.E. Computer Engineering</strong> — Shree Rayeshwar Institute of Engineering and IT, Goa (2024)
            </p>
          </div>
          <div>
            <h3>Location</h3>
            <p>Goa, India</p>
          </div>
          <div>
            <h3>Interests</h3>
            <p>UI/UX Design, Testing Automation, AI Tools, and Problem Solving</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
