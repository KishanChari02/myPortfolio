# myPortfolio
Personal portfolio website built with React and TypeScript, highlighting my work as an Assistant Engineer, Web Developer, and Tester — featuring my projects, skills, and professional journey.
# 🌐 Kishan Chari — Portfolio Website

Welcome to my personal developer portfolio!  
This project showcases my skills, projects, certifications, and experience as a **Software Engineer, Web Developer, and Tester**.  
Built with modern web technologies and deployed on **Vercel**, it highlights my journey in technology and my growing interest in **Data Science**.

---

## 🚀 Live Demo
🔗 **[View Portfolio](https://your-vercel-deployment-url.vercel.app)**  
*(Replace the link above once deployed on Vercel)*

---

## 🧠 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, TypeScript, Vite |
| **Styling** | CSS3 (Custom Styles), Responsive Layout |
| **Icons** | React Icons |
| **Deployment** | Vercel |
| **Version Control** | Git & GitHub |

---

## 📁 Project Structure
myPortfolio/
├── public/ # Static assets (resume, images, certificates)
│ ├── Kishan_Chari_Resume.pdf
│ ├── Kishan1.jpeg
│ └── certs/
│ ├── AdvancedCPP.pdf
│ └── ...
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Hero.tsx
│ │ ├── About.tsx
│ │ ├── Skills.tsx
│ │ ├── Experience.tsx
│ │ ├── Projects.tsx
│ │ ├── Certifications.tsx
│ │ ├── Contact.tsx
│ │ └── Footer.tsx
│ ├── pages/ # Standalone pages
│ │ └── CertificatesPage.tsx
│ ├── layouts/ # Page layouts (HomeLayout.tsx)
│ ├── styles/ # CSS files for each component
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
└── package.json

## 💼 Features

✅ Fully responsive portfolio website  
✅ Clean dark UI theme  
✅ Smooth scroll navigation  
✅ Downloadable Resume  
✅ Dedicated **Certificates Page** with PDF previews and downloads  
✅ “Back to Portfolio” navigation button  
✅ Hosted seamlessly on **Vercel**

---

## 🧾 Sections Overview

- **Hero** — Intro with title, role, and resume link  
- **About Me** — Quick bio + education + interests  
- **Skills** — Key technical skills and tools  
- **Experience** — Professional and internship experience (INET, Tangentia, Codanto)  
- **Projects** — Real projects with GitHub/demo links  
- **Certifications** — Achievements from IIT Bombay & Infosys  
- **Contact** — Contact form and social links  
- **Footer** — Copyright & “Back to Top” button  

---

## 📜 Setup & Run Locally

```bash
# 1️⃣ Clone this repository
git clone https://github.com/KishanChari02/myPortfolio.git

# 2️⃣ Navigate into the project folder
cd myPortfolio

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev

# 5️⃣ Build for production
npm run build


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
