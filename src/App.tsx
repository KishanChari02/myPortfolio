// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App



    

// import Home from "./Pages/Home";
// import CertificatesPage from "./Pages/CertificatesPage";
// import { Routes, Route } from "react-router-dom";
// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import  Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import  Certifications from "./components/Certificates";
// import  Contact from "./components/Contacts";
// import Footer from "./components/Footer";

// const App: React.FC = () => {
//   return (
//     <div>
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/certificates" element={<CertificatesPage />} />
//     </Routes>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Certifications />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Pages/Home";
import CertificatesPage from "./Pages/CertificatesPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  );
};

export default App;
