import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} <strong>Kishan Chari</strong>. All rights reserved.</p>

        <div className="social-links">
          <a
            href="https://linkedin.com/in/kishan-chari"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a href="mailto:charikishan069@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to Top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
