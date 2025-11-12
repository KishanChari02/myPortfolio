import React, { useState } from "react";
import "../styles/Contacts.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-desc">
        Have a question, collaboration idea, or just want to say hello?  
        Feel free to reach out using the form below or connect with me on social platforms.
      </p>

      <div className="contact-container">
        {/* --- Contact Form --- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            />
          </label>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

          {sent && <p className="success">✅ Message sent successfully!</p>}
        </form>

        {/* --- Contact Info / Social --- */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><FaEnvelope /> charikishan069@gmail.com</p>
          <p>
            <FaLinkedin />{" "}
            <a
              href="https://linkedin.com/in/kishan-chari"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/kishan-chari
            </a>
          </p>
          <p>
            <FaGithub />{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              github.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
