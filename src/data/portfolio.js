import profileImg from "./../assets/Talal_Image.jpg";
import portfolioImg from "./../assets/portfolio.png";
import zemoImg from "./../assets/ZemoWork.png";
import hrmsImg from "./../assets/HR_zemoworks.png";
import sopImg from "./../assets/sop.jpg";


export const profile = {
  name: "Talal Qadir",
  title: "Full Stack Developer",
  tagline:
    "I build modern, responsive, and high-performance web applications using React and Django. I love turning ideas into real-world digital products.",
  email: "qadirmuhammadtalal@gmail.com",
  phone: "+92 336 1303 071",
  location: "Pakistan",
  availability: "Available for freelance & full-time roles",
  image: "/profile.jpg",
  roles: [
    "React Developer",
    "Django Backend Developer",
    "Python Developer",
    "Full Stack Engineer",
  ],
  stats: [
    { value: "5+", label: "Projects" },
    { value: "1+", label: "Years Experience" },
    { value: "100%", label: "Dedication" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const sectionIds = navLinks.map((link) => link.href.slice(1));

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Talal-Qadir", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-talal-qadir/", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Email", href: "mailto:qadirmuhammadtalal@gmail.com", icon: "mail" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML / CSS", level: 88 },
      { name: "Tailwind CSS", level: 81 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "Node.js", level: 65 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "MongoDB", level: 60 },
      { name: "PostgreSQL", level: 65 },
      { name: "Docker", level: 60 },
    ],
  },
];

export const techTags = [
  "React",
  "JavaScript",
  "TypeScript",
  "Django",
  "Python",
  "REST API",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Figma",
];

export const projects = [
 
  {
    title: "Zemo Works",
    description:
      "A full-stack project management system that helps teams organize tasks, manage workspaces, and improve collaboration efficiently.",
    tags: ["Python", "Django", "RestAPI","React", "MySQL"],
    image: zemoImg,
    liveUrl: "https://zemoworks.com/",
    githubUrl: "https://github.com/Talal-Qadir/zemoworks",
  },
  {
    title: "HRMS Zemotifty",
    description:
      "Centralizing employee data, payroll, attendance, and performance management into a unified platform, HRMS streamlines HR operations through automation and delivers real-time insights to support efficient and data-driven decision-making.",
    tags: ["Python", "Django", "RestAPI","React", "MySQL"],
    image: hrmsImg,
    liveUrl: "https://hr.zemoworks.com/",
    githubUrl: "https://github.com/Talal-Qadir/hr.zemoworks",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive developer portfolio built with React, Vite and Django for backend, featuring smooth animations, dark theme support, and optimized performance to showcase projects and skills effectively.",
    tags: ["React", "Vite", "CSS"],
    image: portfolioImg,
    liveUrl: "https://muhammadtalalqadirportfolio.site",
    githubUrl: "https://github.com/Talal-Qadir/talal-qadir-portfolio",
  },
  {
    title: "Error Validation Fro SOP",
    description:
      "An AI-powered SOP (Statement of Purpose) validation tool designed to analyze, review, and improve SOP content by providing structured feedback and enhancement suggestions for better clarity and impact.",
    tags: ["Python", "AI/ML", "Colab"],
    // image: sopImg,
    liveUrl: "https://colab.research.google.com/drive/1Q7xY5l0kmmkP6rV8_zfd583_IbiS73cx",
    githubUrl: "https://github.com/Talal-Qadir/Error_verficaion_from_sop",
  },
];

export const experience = [
  {
    title: "Django Backend Developer",
    company: "Zemotify",
    period: "March 2026 – Present",
    type: "Full Time",
    description:
      "Design and deliver full stack web applications for clients using React, Django, and REST APIs. Focus on responsive UI, clean architecture, and on-time delivery.",
    highlights: [
      "Built 10+ production-ready web apps for startups and individuals",
      "Improved page load performance by optimizing API calls and assets",
      "Maintained reusable component libraries for faster project delivery",
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "Systems Limited",
    period: "October 2025 – March 2026",
    type: "Internship",
    description:
      "Supported the development team in building and testing web features across frontend and backend stacks.",
    highlights: [
      "Developed REST API endpoints and integrated them with React views",
      "Fixed bugs and improved UI consistency across multiple modules",
      "Collaborated with senior developers using Git and agile workflows",
    ],
  },
  // {
  //   title: "Junior Frontend Developer",
  //   company: "Digital Agency Name",
  //   period: "2022 – 2023",
  //   type: "Part-time",
  //   description:
  //     "Created responsive landing pages and dashboard interfaces with modern JavaScript frameworks.",
  //   highlights: [
  //     "Converted Figma designs into pixel-perfect responsive layouts",
  //     "Implemented reusable UI components to speed up development",
  //     "Ensured cross-browser compatibility and mobile-first design",
  //   ],
  // },
];

export const education = [
  {
    degree: "BS Information Technology",
    institute: "Baha Uddin Zakariya University, Multan",
    period: "2021 – 2025",
    description:
      "Studying core computer science concepts including web development, software engineering, databases, and machine learning fundamentals.",
  },
  // {
  //   degree: "Intermediate (ICS / FSc)",
  //   institute: "College Name Here",
  //   period: "2019 – 2021",
  //   description:
  //     "Focused on Computer Science, Mathematics, and Physics with a strong foundation in programming logic.",
  // },
  // {
  //   degree: "Matriculation",
  //   institute: "School Name Here",
  //   period: "2017 – 2019",
  //   description:
  //     "Basic education with focus on science subjects and introduction to computing concepts.",
  // },
];
