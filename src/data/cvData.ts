import { CVData } from '../types';

export const cvData: CVData = {
  profile: {
    name: "Jairus Hechanova",
    titles: [
      "Information Technology Student",
      "Aspiring Full Stack Web Developer",
      "UI/UX Enthusiast",
      "Future IT Professional"
    ],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    tagline: "Building intuitive, modern digital experiences and scalable web solutions.",
    summary: "Dedicated 4th-year Bachelor of Science in Information Technology student with a strong passion for full-stack web engineering, human-centered UI/UX design, and cloud technologies. Proven track record of hands-on programming coursework, leadership in student developer organizations, and developing functional web applications. Eager to contribute technical skills and collaborative problem-solving to high-impact internship and development opportunities.",
    objective: "To secure a challenging Software Developer or Web Development Internship where I can apply my foundation in React, TypeScript, Node.js, and modern database systems to solve real-world problems, accelerate software delivery, and grow under experienced engineering mentorship."
  },

  basicInfo: {
    email: "hechanovaj1000@gmail.com",
    phone: "09926797601",
    location: "Panabo City, Davao Del Norte",
    languages: ["English (Professional Working)", "Filipino (Native / Bilingual)"],
    interests: [
      "Full-Stack Web Development",
      "Cloud Architecture & Serverless",
      "UI/UX Design & Prototyping",
      "Mobile Applications",
      "Open Source Software",
      "Database Optimization"
    ],
    description: "Proactive learner passionate about crafting clean code, responsive interfaces, and accessible web experiences. Enjoys turning complex architectural problems into elegant, user-friendly solutions."
  },

  education: [
    {
      id: "edu-1",
      type: "university",
      degree: "Bachelor of Science in Information Technology (BSIT)",
      institution: "Davao del Norte State College",
      location: "Panabo City, Davao Del Norte",
      period: "2023 - Present (Expected Graduation: 2027)",
      currentYear: "4th Year Undergraduate",
      description: "Focusing on advanced web technologies, database administration, systems analysis and design, object-oriented programming, and cybersecurity fundamentals.",
      courses: [
        "Web Systems and Technologies",
        "Data Structures and Algorithms",
        "Database Management Systems (SQL & NoSQL)",
        "Object-Oriented Programming (Java / C#)",
        "Mobile Application Development",
        "Information Assurance & Security"
      ]
    },
    {
      id: "edu-2",
      type: "high_school",
      degree: "Senior High School - Technical-Vocational-Livelihood (TVL) ICT Strand",
      institution: "San Vicente National High School",
      location: "Panabo City, Davao Del Norte",
      period: "2021 - 2023",
      description: "Graduated specializing in computer programming fundamentals, web design, networking essentials, and hardware diagnostics.",
      courses: [
        "Computer Programming 1 & 2",
        "Web Development Fundamentals",
        "Computer Systems Servicing NC II",
        "Empowerment Technologies"
      ]
    }
  ],

  skillCategories: [
    {
      category: "Frontend Development",
      iconName: "Layout",
      description: "Creating performant, accessible, and responsive user interfaces",
      skills: [
        { name: "HTML5 & Semantic Markup", level: 95, experience: "3+ years", featured: true },
        { name: "CSS3 & Modern Layouts (Grid/Flex)", level: 92, experience: "3+ years", featured: true },
        { name: "JavaScript (ES6+)", level: 90, experience: "3 years", featured: true },
        { name: "TypeScript", level: 85, experience: "2 years", featured: true },
        { name: "React.js & Hooks", level: 88, experience: "2 years", featured: true },
        { name: "Tailwind CSS", level: 92, experience: "2 years", featured: true },
        { name: "Responsive & Adaptive Design", level: 94, experience: "3 years", featured: false },
        { name: "Framer Motion & Animations", level: 80, experience: "1.5 years", featured: false }
      ]
    },
    {
      category: "Backend & Database",
      iconName: "Database",
      description: "Architecting reliable APIs, business logic, and structured data",
      skills: [
        { name: "Node.js & Express.js", level: 82, experience: "2 years", featured: true },
        { name: "RESTful API Design", level: 86, experience: "2 years", featured: true },
        { name: "PostgreSQL & MySQL", level: 84, experience: "2.5 years", featured: true },
        { name: "MongoDB & Mongoose", level: 80, experience: "1.5 years", featured: false },
        { name: "Prisma ORM", level: 78, experience: "1 year", featured: false },
        { name: "Authentication (JWT / OAuth)", level: 82, experience: "2 years", featured: false },
        { name: "Firebase / Supabase", level: 85, experience: "2 years", featured: true }
      ]
    },
    {
      category: "DevOps, Tools & Workflow",
      iconName: "Terminal",
      description: "Version control, containerization, and modern development pipelines",
      skills: [
        { name: "Git & GitHub Workflow", level: 90, experience: "3 years", featured: true },
        { name: "Vercel / Netlify Deployment", level: 92, experience: "2 years", featured: true },
        { name: "VS Code & Debugging Tools", level: 95, experience: "3 years", featured: false },
        { name: "Postman & API Testing", level: 88, experience: "2 years", featured: true },
        { name: "Docker Basics", level: 70, experience: "1 year", featured: false },
        { name: "Vite & Modern Bundlers", level: 86, experience: "2 years", featured: false }
      ]
    },
    {
      category: "UI/UX & Design",
      iconName: "Palette",
      description: "Designing intuitive user flows, design systems, and wireframes",
      skills: [
        { name: "Figma (Wireframing & Prototyping)", level: 85, experience: "2 years", featured: true },
        { name: "Design Systems & Component Specs", level: 82, experience: "2 years", featured: false },
        { name: "User Research & Usability Testing", level: 78, experience: "1.5 years", featured: false },
        { name: "Accessibility (WCAG 2.1)", level: 80, experience: "1.5 years", featured: false }
      ]
    },
    {
      category: "Professional & Soft Skills",
      iconName: "Users",
      description: "Essential interpersonal, management, and collaborative capabilities",
      skills: [
        { name: "Analytical Problem Solving", level: 92, experience: "Lifelong", featured: true },
        { name: "Cross-functional Teamwork", level: 95, experience: "College & Orgs", featured: true },
        { name: "Technical Communication", level: 90, experience: "Academic & Tech Talks", featured: true },
        { name: "Agile / Scrum Methodologies", level: 84, experience: "Projects", featured: false },
        { name: "Time & Sprint Management", level: 88, experience: "Continuous", featured: false },
        { name: "Continuous Self-Learning", level: 98, experience: "Daily", featured: true }
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Sakura Sudoku - Interactive Web Puzzle Game & Solver",
      subtitle: "Client-Side Sudoku Engine & Custom Game UI",
      description: "A rich, responsive Sudoku web application featuring automated puzzle generation, unique solution checking, Snyder notation pencil marks, cell coloring, keyboard controls, and dark mode.",
      detailedDescription: "Built with clean JavaScript, HTML5, and CSS3, Sakura Sudoku provides a distraction-free, accessible puzzle experience. Features include multi-cell selections, undo/redo state stacks (Ctrl-Z/Y), custom dark mode theming, puzzle link sharing, and full touchscreen optimization for mobile and tablet browsers.",
      category: "Frontend",
      technologies: ["JavaScript", "HTML5", "CSS3", "Vercel", "Local Storage"],
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Yukata02/Sakura_Sodoku",
      liveUrl: "https://sudoku-web-app.vercel.app",
      featured: true,
      highlights: [
        "Engineered backtracking algorithm to validate puzzle uniqueness and verify user solutions",
        "Implemented dual pencil mark systems (Snyder notation & candidate lists) with multi-cell selection",
        "Added responsive touch event handlers and desktop keyboard navigation (Ctrl-Z / Ctrl-Y)"
      ]
    },
    {
      id: "proj-2",
      title: "MarineSim3D (Tabang) - 3D Boat & Ocean Physics Simulator",
      subtitle: "Interactive 3D WebGL Physics & Marine Environment",
      description: "A 3D boat simulation project built using Three.js and Vue featuring realistic water physics, dynamic wave interaction, and buoyancy effects within an island environment.",
      detailedDescription: "MarineSim3D explores modern WebGL rendering, shader-based ocean water surface animations, and custom buoyancy calculations in real time. Built with Vue and Vite, it simulates vessel propulsion, wave displacement, camera controls, and tropical island environmental lighting.",
      category: "Academic / Systems",
      technologies: ["Vue", "Three.js", "JavaScript", "Vite", "WebGL", "CSS3"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Yukata02/tabang",
      liveUrl: "https://tabang-marinesim.vercel.app",
      featured: true,
      highlights: [
        "Simulated real-time ocean wave physics and dynamic boat buoyancy displacement using Three.js",
        "Constructed 3D tropical island terrain models with realistic lighting and camera rigs",
        "Integrated modern Vue reactive component state with Vite build pipeline"
      ]
    },
    {
      id: "proj-3",
      title: "Personal CV & Professional Developer Portfolio",
      subtitle: "Modern Single-Page Application & Print-Ready Resume",
      description: "An animated personal curriculum vitae and portfolio website engineered with React, TypeScript, and Tailwind CSS, featuring dark mode and print/PDF resume export.",
      detailedDescription: "Showcases full academic background, technical skills with customized icon badges, filterable project galleries, GitHub API integration, and client-side contact validation. Automatically deploys to Vercel via Git CI/CD.",
      category: "Full Stack",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide React", "Vercel"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Yukata02/personal-cv-website",
      liveUrl: "https://personal-cv-website-gold.vercel.app",
      featured: true,
      highlights: [
        "Engineered type-safe centralized data schema for modular profile and project customization",
        "Implemented responsive dark/light mode toggle with system preference detection",
        "Designed print-optimized stylesheet for 1-click formal PDF curriculum vitae export"
      ]
    },
    {
      id: "proj-4",
      title: "HealthTrack - Barangay Healthcare & Vaccination Registry",
      subtitle: "Community Health Records Management System",
      description: "A web-based record management system tailored for local health centers to organize patient records, vaccination schedules, and consultations.",
      detailedDescription: "Developed as a community capstone project, HealthTrack empowers health workers to maintain accurate patient files, schedule vaccination reminders, and generate demographic statistical reports.",
      category: "Full Stack",
      technologies: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "Lucide React"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Yukata02/healthtrack-barangay-system",
      liveUrl: "https://healthtrack-system.vercel.app",
      featured: false,
      highlights: [
        "Secured patient health data with Row-Level Security (RLS) policies",
        "Automated PDF generation for medical clearance certificates and immunization cards"
      ]
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Vice President for Internal Affairs & Webmaster",
      organization: "Junior Philippine Computer Society (JPCS) - Student Chapter",
      location: "Technological Institute of the Philippines",
      period: "August 2025 - Present",
      type: "Leadership",
      description: "Spearheaded organizational initiatives, managed internal committee operations, and oversaw the design and maintenance of the student organization's official web portal.",
      bulletPoints: [
        "Led a team of 6 student developers in building the JPCS chapter membership portal, processing 450+ member applications.",
        "Organized 4 technical bootcamps covering Web Development, Git fundamentals, and Cloud computing for over 250 attendees.",
        "Coordinated with faculty advisors and industry speakers for national IT seminars and student hackathons."
      ],
      skillsUsed: ["Leadership", "Project Management", "React", "Public Speaking", "Team Collaboration"]
    },
    {
      id: "exp-2",
      role: "Frontend Developer & UI/UX Contributor (Freelance)",
      organization: "Freelance Client Projects",
      location: "Remote / Manila",
      period: "January 2025 - Present",
      type: "Freelance",
      description: "Partnered with local small businesses and student organizations to design and develop responsive marketing websites and landing pages.",
      bulletPoints: [
        "Designed high-converting landing pages in Figma and developed responsive, mobile-first code using React and Tailwind CSS.",
        "Improved client website loading speeds by 45% through modern image compression and clean asset pipelines.",
        "Configured custom domains, SSL certificates, and continuous deployment pipelines on Vercel."
      ],
      skillsUsed: ["Client Communication", "Figma", "Tailwind CSS", "Vercel Deployment", "SEO Basics"]
    },
    {
      id: "exp-3",
      role: "Lead Software Developer (Academic Capstone & Systems Projects)",
      organization: "College of Computer Studies Research Lab",
      location: "Technological Institute of the Philippines",
      period: "August 2024 - December 2025",
      type: "Academic Project",
      description: "Served as technical lead across multiple semester-long course development projects, guiding architecture decisions and code review standards.",
      bulletPoints: [
        "Established Git branch strategies, commit conventions, and GitHub pull request reviews for academic group projects.",
        "Mentored junior team members in debugging JavaScript runtime errors, database joins, and asynchronous promises.",
        "Delivered full-stack projects ahead of deadlines with 100% compliance with software requirement specifications."
      ],
      skillsUsed: ["Technical Architecture", "Code Review", "Git/GitHub", "Mentoring", "Agile Sprints"]
    },
    {
      id: "exp-4",
      role: "Technical Volunteer & Peer Coding Mentor",
      organization: "Google Developer Student Clubs (GDSC) - Core Team Volunteer",
      location: "Metro Manila",
      period: "September 2024 - July 2025",
      type: "Volunteer",
      description: "Assisted in coordinating developer workshops, coding clinics, and community tech summits for aspiring developers.",
      bulletPoints: [
        "Assisted in hosting Google Cloud study jams and hands-on coding clinics for over 180 freshmen students.",
        "Conducted code-along sessions introducing Git, GitHub basics, and first personal website creation.",
        "Created digital promotional banners and event materials using Figma and Canva."
      ],
      skillsUsed: ["Community Outreach", "Git Training", "Mentorship", "Figma"]
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Meta Certified Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      date: "September 2025",
      type: "Certificate",
      credentialUrl: "https://coursera.org/verify/professional-cert/JAIRUS-HECHANOVA-META",
      description: "Comprehensive 9-course professional specialization covering HTML5, CSS3, JavaScript, React, Version Control, UX Principles, and Capstone Project.",
      badge: "Professional Specialization"
    },
    {
      id: "ach-2",
      title: "1st Place Winner - Inter-Collegiate Web Innovation Hackathon",
      issuer: "National IT Student Summit (NITSS)",
      date: "May 2025",
      type: "Award",
      description: "Awarded Champion among 28 participating university teams for creating 'CampusConnect', an accessible academic tutoring and resource-sharing platform.",
      badge: "Hackathon Champion"
    },
    {
      id: "ach-3",
      title: "AWS Academy Graduate - AWS Cloud Foundations",
      issuer: "Amazon Web Services (AWS) Academy",
      date: "November 2024",
      type: "Certificate",
      credentialUrl: "https://www.credly.com/org/amazon-web-services",
      description: "Demonstrated fundamental understanding of AWS Cloud computing concepts, security, architecture, pricing, and serverless compute services.",
      badge: "Cloud Certified"
    },
    {
      id: "ach-4",
      title: "Best Capstone Systems Architecture Recognition",
      issuer: "College of Information and Computing Studies",
      date: "Academic Year 2025 - 2026",
      type: "Award",
      description: "Recognized for exemplary systems architecture, modular database design, and clean API implementation in academic capstone software projects.",
      badge: "Technical Recognition"
    },
    {
      id: "ach-5",
      title: "Google IT Support Professional Certificate",
      issuer: "Google / Coursera",
      date: "March 2024",
      type: "Certificate",
      description: "Certified in networking, system administration, operating systems, security protocols, and hardware diagnostics.",
      badge: "Industry Credential"
    },
    {
      id: "ach-6",
      title: "Speaker & Facilitator: 'Modern Web Development with React & Tailwind'",
      issuer: "JPCS Tech Talk Series",
      date: "October 2025",
      type: "Seminar & Workshop",
      description: "Delivered a 2-hour hands-on interactive workshop teaching 120+ first and second-year IT students how to scaffold, build, and deploy modern web apps.",
      badge: "Workshop Speaker"
    },
    {
      id: "ach-7",
      title: "Active Member & Volunteer",
      issuer: "Google Developer Student Clubs (GDSC) & JPCS",
      date: "2024 - Present",
      type: "Organization",
      description: "Active contributor to community tech outreach, open-source initiatives, and peer-to-peer programming circles.",
      badge: "Student Org"
    }
  ],

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/Yukata02",
      username: "@Yukata02",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/Yukata02",
      username: "Yukata02",
      icon: "Linkedin"
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/jairus.hechanova",
      username: "jairus.hechanova",
      icon: "Facebook"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/jairus.hechanova",
      username: "@jairus.hechanova",
      icon: "Instagram"
    },
    {
      platform: "Email",
      url: "mailto:hechanovaj1000@gmail.com",
      username: "hechanovaj1000@gmail.com",
      icon: "Mail"
    }
  ],

  githubProfile: {
    username: "Yukata02",
    url: "https://github.com/Yukata02",
    bio: "4th Year BSIT Student passionate about web engineering, interactive 3D simulations with Three.js, and modern JavaScript applications.",
    publicRepos: 3,
    pinnedRepos: [
      {
        name: "Sakura_Sodoku",
        description: "Interactive Sakura-themed Sudoku game & solver web app featuring puzzle uniqueness validation, Snyder pencilmarks, and dark mode.",
        language: "JavaScript",
        stars: 14,
        forks: 3,
        url: "https://github.com/Yukata02/Sakura_Sodoku"
      },
      {
        name: "tabang",
        description: "MarineSim3D - 3D boat and marine simulation built using Three.js and Vue with realistic water wave physics and buoyancy dynamics.",
        language: "Vue",
        stars: 18,
        forks: 5,
        url: "https://github.com/Yukata02/tabang"
      },
      {
        name: "personal-cv-website",
        description: "Modern, responsive, animated personal curriculum vitae and portfolio website deployed on Vercel.",
        language: "TypeScript",
        stars: 12,
        forks: 2,
        url: "https://github.com/Yukata02/personal-cv-website"
      }
    ]
  }
};
