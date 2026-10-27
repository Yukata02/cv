# 🌟 Personal Curriculum Vitae & Professional Portfolio Website

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=for-the-badge&logo=vite)](https://vitejs.dev)

> **Live Vercel Link:** [https://personal-cv-website-gold.vercel.app](https://personal-cv-website-gold.vercel.app) *(Replace with your deployed Vercel URL)*

---

## 📌 Project Overview

This web project is a modern, responsive, and animated personal **Curriculum Vitae (CV) & Developer Portfolio** website designed for academic assessment, internship applications, freelance opportunities, and professional engineering roles.

It fulfills all rubric criteria including:
1. **Personal Profile** (Full Name, Career Titles, Professional Avatar, Tagline, Introduction, Career Objective)
2. **Basic Information** (Location, Verified Email, Contact Number, Personal Narrative, Languages, Career Interests)
3. **Education** (University BSIT Degree, Senior High School TVL-ICT, Coursework & Competencies)
4. **Technical & Professional Skills** (Interactive category tabs, technology icons, search filter)
5. **Projects Showcase** (Filtered by category, real GitHub repositories, interactive preview modal, live demo links)
6. **GitHub Profile Spotlight** (Public repositories metric, pinned repositories with live stars & fork counts)
7. **LinkedIn Profile & Social Media Links** (LinkedIn, GitHub, Facebook, Instagram, direct mailto channels)
8. **Interactive CV Export** (Built-in clean Print/PDF stylesheet for formal paper and PDF resume generation)
9. **Dark Mode & Light Mode** (One-click toggle with system preference detection and localStorage persistence)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | Component-based interactive UI architecture |
| **TypeScript** | Type-safe state management and data modeling |
| **Tailwind CSS** | Modern utility-first responsive styling and glassmorphism |
| **Lucide React** | Clean, accessible vector icons |
| **Vite** | Blazing-fast development server and optimized build bundler |
| **Canvas Confetti** | Celebratory visual interaction on contact submission |
| **Git & GitHub** | Distributed version control and semantic commit history |
| **Vercel** | Global edge hosting, continuous deployment, and instant SSL |

---

## 📂 Project Folder Structure

```text
personal-cv-website/
├── public/
│   ├── favicon.svg              # Developer code icon favicon
│   └── profile.jpg              # Professional profile portrait
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive sticky navigation & theme toggle
│   │   ├── Hero.tsx             # Profile hero, dynamic titles, career objective
│   │   ├── BasicInfo.tsx        # Personal narrative, copyable email & contact
│   │   ├── Education.tsx        # Timeline with university and secondary education
│   │   ├── Skills.tsx           # Category tabs, skill search & verified tech icons
│   │   ├── Projects.tsx         # Filterable project grid with case previews
│   │   ├── ProjectModal.tsx     # Deep-dive interactive modal for project cases
│   │   ├── GitHubShowcase.tsx   # Pinned GitHub repositories & git statistics
│   │   ├── Contact.tsx          # Direct message form with feedback & social links
│   │   ├── Footer.tsx           # Back to top button, copyright & tech badge
│   │   ├── PrintableCV.tsx      # Formal print/PDF resume layout
│   │   ├── CyberParticles.tsx   # Interactive animated background particle field
│   │   └── TacticalHudOverlay.tsx # HUD equalizer, laser progress & coordinate tracker
│   ├── context/
│   │   └── ThemeContext.tsx     # Dark/light mode theme provider
│   ├── data/
│   │   └── cvData.ts            # Centralized portfolio data (Easy to customize!)
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces for all CV entities
│   ├── App.tsx                  # Main application layout
│   ├── index.css                # Tailwind directives & print media query
│   └── main.tsx                 # DOM entrypoint
├── index.html                   # HTML template with Google Fonts & metadata
├── package.json                 # Project scripts and dependencies
├── tailwind.config.js           # Custom brand color palettes & animations
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite bundler configuration
```

---

## ⚡ How to Customize with Your Personal Information

All data displayed on the website is centralized in a single file:
👉 **[`src/data/cvData.ts`](./src/data/cvData.ts)**

To personalize the website with your own profile:
1. Open `src/data/cvData.ts`.
2. Update:
   - `profile.name`: Your full name
   - `profile.titles`: Your career titles (e.g., `"Web Developer"`, `"UI/UX Designer"`)
   - `profile.avatar`: Image URL of your professional portrait
   - `basicInfo.email` & `phone`: Your contact channels
   - `education`: Your school, year level, GWA, and honors
   - `skillCategories`: Your programming languages, frameworks, and tools
   - `projects`: Your past and current coding projects
   - `socials`: Your real GitHub, LinkedIn, Facebook, and Instagram URLs
3. Save the file — the website updates automatically!

---

## 🚀 Local Development Setup

Follow these steps to run the website locally on your computer:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/personal-cv-website.git

# 2. Enter the directory
cd personal-cv-website

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

To verify a production build:
```bash
npm run build
npm run preview
```

---

## 📄 Exporting as a PDF Resume

The website features an integrated **Download / Print CV** button in the navbar and hero section:
1. Click **"Download CV"** or press `Ctrl + P` (`Cmd + P` on macOS).
2. The print stylesheet automatically hides navigation bars, buttons, and animations, formatting your data into an elegant, formal, black-and-white 1-2 page curriculum vitae suitable for HR and company applications.
3. Select **"Save as PDF"** as your printer destination.

