import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        Kishan<span>Portfolio</span>
      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </header>
  );
};

export default Navbar;
