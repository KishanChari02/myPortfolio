import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Kishan Chari</span>
        </h1>
        <h2>Assistant Engineer | Web Developer | Tester</h2>
        <p>
          I’m a Computer Engineering graduate passionate about building efficient web solutions, 
          ensuring software quality, and exploring innovative technologies. 
          With hands-on experience in testing, development, and system operations, 
          I strive to deliver seamless user experiences.
        </p>

        <div className="hero-buttons">
          <a href="../assets/Kishan_Chari_Resume.pdf" download="Kishan_Chari_Resume.pdf" className="btn primary">
            Download Resume
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/Kishan1.jpeg"
          alt="Kishan Chari"
        />
      </div>
    </section>
  );
};

export default Hero;
