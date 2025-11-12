// import React from "react";
// import "../styles/Certificates.css";

// const Certifications: React.FC = () => {
//   const certifications = [
//     {
//       title: "Advanced C++",
//       issuer: "IIT Bombay",
//       date: "2023",
//       logo: "/certs/iitbombay.png",
//     },
//     {
//       title: "Java Training",
//       issuer: "IIT Bombay",
//       date: "2023",
//       logo: "/certs/iitbombay.png",
//     },
//     {
//       title: "Linux Training",
//       issuer: "IIT Bombay",
//       date: "2023",
//       logo: "/certs/iitbombay.png",
//     },
//     {
//       title: "Fundamentals of Cyber Security",
//       issuer: "Infosys Springboard",
//       date: "2024",
//       logo: "/certs/infosys.png",
//     },
//     {
//       title: "Basics of Python",
//       issuer: "Infosys Springboard",
//       date: "2024",
//       logo: "/certs/infosys.png",
//     },
//   ];

//   return (
//     <section className="certifications" id="certifications">
//       <h2>Certifications & Achievements</h2>
//       <p className="cert-desc">
//         A summary of my technical certifications and learning milestones that
//         strengthened my foundation in programming, systems, and cybersecurity.
//       </p>

//       <div className="cert-grid">
//         {certifications.map((cert, index) => (
//           <div key={index} className="cert-card">
//             <div className="cert-header">
//               <img src={cert.logo} alt={cert.issuer} />
//               <h3>{cert.title}</h3>
//             </div>
//             <p className="issuer">{cert.issuer}</p>
//             <span className="date">{cert.date}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;
import React from "react";
import "../styles/Certificates.css";
import { Link } from "react-router-dom";

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Advanced C++",
      issuer: "IIT Bombay",
      date: "2023",
      logo: "/Certs/Advanced Cpp.png",
      file: "/Certs/Advanced CPP spoken tutorial.pdf",
    },
    {
      title: "Java Training",
      issuer: "IIT Bombay",
      date: "2023",
      logo: "/Certs/Java Training.png",
      file: "/Certs/Java spoken tutorial.pdf",
    },
    {
      title: "Linux Training",
      issuer: "IIT Bombay",
      date: "2023",
      logo: "/Certs/Redhat Python.png",
      file: "/Certs/LinuxTraining.pdf",
    },
    {
      title: "Fundamentals of Cyber Security",
      issuer: "Infosys Springboard",
      date: "2024",
      logo: "/Certs/information security.png",
      file: "/Certs/information security fundamentals.pdf",
    },
    {
      title: "Basics of Python",
      issuer: "Infosys Springboard",
      date: "2024",
      logo: "/Certs/Python.png",
      file: "/Certs/Basics of python.pdf",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications & Achievements</h2>
      <p className="cert-desc">
        A summary of my certifications and learning milestones that strengthened my foundation in software and system development.
      </p>

      <div className="cert-grid">
        {certifications.slice(0, 3).map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-header">
              <img src={cert.logo} alt={cert.issuer} />
              <h3>{cert.title}</h3>
            </div>
            <p className="issuer">{cert.issuer}</p>
            <span className="date">{cert.date}</span>
            <a href={cert.file} download className="cert-btn">
              Download</a>
          </div>
        ))}
      </div>

      {/* Link to full page */}
      {/* <Link to="/certificates" target="_blank" className="view-all">
        View All Certificates →
      </Link> */}

      <Link to="/certificates" target="_blank" rel="noreferrer" className="view-all">
      View All Certificates →
    </Link>

    </section>
  );
};

export default Certifications;
