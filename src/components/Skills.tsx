// import React from "react";
// import "../styles/Skills.css";

// const Skills: React.FC = () => {
//   const skills = [
//     { name: "React", icon: "/icons/react.svg" },
//     { name: "JavaScript", icon: "/icons/javascript-1.svg" },
//     { name: "TypeScript", icon: "/icons/ts.svg" },
//     { name: "Python", icon: "/icons/python.svg" },
//     { name: "HTML", icon: "/icons/html.svg" },
//     { name: "CSS", icon: "/icons/css.svg" },
//     { name: "MySQL", icon: "/icons/mysql.svg" },
//     { name: "Postman", icon: "/icons/postman.svg" },
//     { name: "Jira", icon: "/icons/jira.svg" },
//     { name: "Figma", icon: "/icons/figma.svg" },
//   ];

//   return (
//     <section className="skills" id="skills">
//       <h2>Technical Skills</h2>
//       <p className="skills-desc">
//         A blend of development and testing expertise — from creating efficient web interfaces
//         to validating complex systems for performance and reliability.
//       </p>

//       <div className="skills-grid">
//         {skills.map((skill, index) => (
//           <div key={index} className="skill-card">
//             <img src={skill.icon} alt={skill.name} />
//             <span>{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from "react";
import "../styles/Skills.css";

import reactIcon from "../assets/icons/react.svg";
import jsIcon from "../assets/icons/javascript-1.svg";
import tsIcon from "../assets/icons/typescript-2.svg";
import pythonIcon from "../assets/icons/python-5.svg";
import htmlIcon from "../assets/icons/html-5-logo-svg-1.svg";
import cssIcon from "../assets/icons/css-3.svg";
import mysqlIcon from "../assets/icons/mysql-3.svg";
import postmanIcon from "../assets/icons/postman.svg";
// import jiraIcon from "../assets/icons/jira.svg";
import figmaIcon from "../assets/icons/figma-icon.svg";

const Skills: React.FC = () => {
  const skills = [
    { name: "React", icon: reactIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Python", icon: pythonIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Postman", icon: postmanIcon },
    // { name: "Jira", icon: jiraIcon },
    { name: "Figma", icon: figmaIcon },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <p className="skills-desc">
        A blend of development, testing, and problem-solving expertise — from creating efficient web interfaces
        to validating complex systems for performance and reliability.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
