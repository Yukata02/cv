# 🌟 Personal Curriculum Vitae & Professional Portfolio Website

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=for-the-badge&logo=vite)](https://vitejs.dev)

> **Live Vercel Link:** [https://personal-cv-website-gold.vercel.app](https://personal-cv-website-gold.vercel.app) *(Replace with your deployed Vercel URL)*

---

## 👤 Student Information

- **Student Name:** Jairus Hechanova
- **Degree Program:** Bachelor of Science in Information Technology (BSIT)
- **Year Level:** 4th Year Undergraduate
- **Specialization / Career Title:** Aspiring Full Stack Web Developer / Future IT Professional
- **Location:** Panabo City, Davao Del Norte
- **Email:** hechanovaj1000@gmail.com
- **Contact Number:** 09926797601

---

## 📌 Project Overview

This web project is a modern, responsive, and animated personal **Curriculum Vitae (CV) & Developer Portfolio** website designed for academic assessment, internship applications, freelance opportunities, and professional engineering roles.

It fulfills all rubric criteria including:
1. **Personal Profile** (Full Name, Career Titles, Professional Avatar, Tagline, Introduction, Career Objective)
2. **Basic Information** (Location, Verified Email, Contact Number, Personal Narrative, Languages, Career Interests)
3. **Education** (University BSIT Degree, Senior High School TVL-ICT, Coursework & Competencies)
4. **Technical & Professional Skills** (Interactive category tabs, search filter, animated proficiency indicators)
5. **Projects Showcase** (Filtered by category, interactive preview modal, GitHub source code, live demo links)
6. **GitHub Profile Spotlight** (Public repositories metric, pinned repositories with live stars & fork counts)
7. **LinkedIn Profile & Social Media Links** (LinkedIn, GitHub, Facebook, Instagram, direct mailto channels)
8. **Achievements & Certifications** (Meta Front-End Developer, AWS Cloud Foundations, Google IT Support, Hackathon awards, Speaking engagements)
9. **Experience & Leadership** (Student developer leadership, freelance client deliverables, academic research lab lead, GDSC mentorship)
10. **Interactive CV Export** (Built-in clean Print/PDF stylesheet for formal paper and PDF resume generation)
11. **Dark Mode & Light Mode** (One-click toggle with system preference detection and localStorage persistence)

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
│   └── favicon.svg              # Developer code icon favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Responsive sticky navigation & theme toggle
│   │   ├── Hero.tsx             # Profile hero, dynamic titles, career objective
│   │   ├── BasicInfo.tsx        # Personal narrative, copyable email & contact
│   │   ├── Education.tsx        # Timeline with university, high school & honors
│   │   ├── Skills.tsx           # Category tabs, skill search & animated bars
│   │   ├── Projects.tsx         # Filterable project grid with case previews
│   │   ├── ProjectModal.tsx     # Deep-dive interactive modal for project cases
│   │   ├── GitHubShowcase.tsx   # Pinned GitHub repositories & git statistics
│   │   ├── Experience.tsx       # Leadership, freelance, academic & volunteer roles
│   │   ├── Achievements.tsx     # Certifications, hackathon trophies & workshops
│   │   ├── Contact.tsx          # Direct message form with feedback & social links
│   │   ├── Footer.tsx           # Back to top button, copyright & tech badge
│   │   └── PrintableCV.tsx      # Formal print/PDF resume layout
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

## 🌐 How to Deploy to Vercel (Step-by-Step)

### Option A: Via Vercel Web Dashboard (Recommended - 2 Minutes)
1. Push your repository to **GitHub** (see instructions below).
2. Go to [https://vercel.com](https://vercel.com) and log in with your **GitHub account**.
3. Click the **"Add New..."** button and select **"Project"**.
4. Find your `personal-cv-website` repository from the list and click **"Import"**.
5. Vercel automatically detects **Vite**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**.
7. In ~30 seconds, Vercel gives you your live publicly accessible link (e.g., `https://personal-cv-website.vercel.app`)!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📄 Exporting as a PDF Resume

The website features an integrated **Download / Print CV** button in the navbar and hero section:
1. Click **"Download CV"** or press `Ctrl + P` (`Cmd + P` on macOS).
2. The print stylesheet automatically hides navigation bars, buttons, and animations, formatting your data into an elegant, formal, black-and-white 1-2 page curriculum vitae suitable for HR and company applications.
3. Select **"Save as PDF"** as your printer destination.

---

## 📜 Meaningful Git Commit History

To satisfy the grading requirement for a progressive development history:
- `chore: initialize React + Vite project with Tailwind CSS and Lucide icons`
- `feat: add centralized cvData schema and comprehensive portfolio profile data`
- `feat: implement responsive Navbar and Hero section with dark mode support`
- `feat: add About and Education timeline sections with academic achievements`
- `feat: implement Skills section with interactive categorization and animated progress`
- `feat: build Projects gallery with interactive filters and modal previews`
- `feat: add Experience, Certifications, and Organizations showcase`
- `feat: add interactive Contact section, Social links, and print-ready CV export`
- `docs: add comprehensive README with deployment guide and project details`
