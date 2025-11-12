// import React from "react";
// import "../styles/CertificatesPage.css";

// const CertificatesPage: React.FC = () => {
//   const certificates = [
//     { title: "Advanced C++", file: "/Certs/Advanced CPP spoken tutorial.pdf" },
//     { title: "Java Training", file: "/Certs/Java spoken tutorial.pdf" },
//     { title: "Linux Training", file: "/Certs/LinuxTraining.pdf" },
//     { title: "Fundamentals of Cyber Security", file: "/Certs/information security fundamentals.pdf" },
//     { title: "Basics of Python", file: "/Certs/Basics of python.pdf" },
//   ];

//   return (
//     <div className="cert-page">
//       <h1>All Certificates</h1>
//       <div className="cert-page-grid">
//         {certificates.map((cert, index) => (
//           <div key={index} className="cert-page-card">
//             <iframe src={cert.file} title={cert.title} className="cert-preview"></iframe>
//             <h3>{cert.title}</h3>
//             <a href={cert.file} download className="download-btn">Download</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CertificatesPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CertificatesPage.css";

const CertificatesPage: React.FC = () => {
  const navigate = useNavigate();

  const certificates = [
    { title: "Advanced C++", file: "/Certs/Advanced CPP spoken tutorial.pdf" },
    { title: "Java Training", file: "/Certs/Java spoken tutorial.pdf" },
    { title: "Linux Training", file: "/Certs/redhat intro to python.pdf" },
    { title: "Fundamentals of Cyber Security", file: "/Certs/information security fundamentals.pdf" },
    { title: "Basics of Python", file: "/Certs/Basics of python.pdf" },
  ];

  return (
    <div className="cert-page">
      {/* === BACK BUTTON === */}
      <div className="back-container">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Portfolio
        </button>
      </div>

      <h1>All Certificates</h1>

      <div className="cert-page-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-page-card">
            <iframe src={cert.file} title={cert.title} className="cert-preview"></iframe>
            <h3>{cert.title}</h3>
            <a href={cert.file} download className="download-btn">
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
