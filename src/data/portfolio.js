import profileImg from "./../assets/Talal_Image.jpg";
import portfolioImg from "./../assets/portfolio.png";
import zemoImg from "./../assets/ZemoWork.png";
import hrmsImg from "./../assets/HR_zemoworks.png";
import sopImg from "./../assets/sop.jpg";
import breastCancerImg from "./../assets/sop.jpg";



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
  { label: "Twitter", href: "https://x.com/talal_baloxh", icon: "twitter" },
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
  "Cloud Computing",
  "AWS",
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
    title: "Error Validation For SOP",
    description:
      "An AI-powered SOP (Statement of Purpose) validation tool designed to analyze, review, and improve SOP content by providing structured feedback and enhancement suggestions for better clarity and impact.",
    tags: ["Python", "AI/ML", "Colab"],
    image: sopImg,
    liveUrl: "https://colab.research.google.com/drive/1Q7xY5l0kmmkP6rV8_zfd583_IbiS73cx",
    githubUrl: "https://github.com/Talal-Qadir/Error_verficaion_from_sop",
  },
    {
    title: "Breast Cancer Prediction System ",
    description:
      "A deep learning-powered web application that predicts whether a breast tumor is benign or malignant using histopathological images. The system provides confidence scores, risk percentages, personalized treatment and diet recommendations, and an AI chatbot for breast cancer-related assistance.",
    tags: ["Flask", "Gemini API", "CNN", "TensorFlow", "Keras"],
    image: breastCancerImg,
    liveUrl: "https://github.com/Talal-Qadir/breast-cancer-prediction-using-deep-learning-A-flask-base-website",
    githubUrl: "https://github.com/Talal-Qadir/breast-cancer-prediction-using-deep-learning-A-flask-base-website",
  },
];

export const experience = [
  {
    title: "Django Backend Developer",
    company: "Zemotify",
    period: "March 2026 – Present",
    type: "Full-time",
    description:
      "Develop and maintain scalable backend services using Django and Django REST Framework while contributing to full-stack web applications with React. Design secure REST APIs, optimize databases, and collaborate with cross-functional teams to deliver reliable software solutions.",
    highlights: [
      "Developed and maintained backend services using Django and Django REST Framework (DRF)",
      "Designed and implemented secure RESTful APIs for web applications",
      "Managed and optimized MySQL database structures for better performance",
      "Implemented JWT and session-based authentication systems",
      "Integrated backend APIs with React frontend components",
      "Collaborated with frontend developers to ensure seamless API integration",
      "Debugged and optimized application performance for scalability and reliability",
      "Contributed to enterprise applications including HRMS and Zemo Works",
    ],
  },
  {
    title: "Technical Support Intern",
    company: "Systems Limited",
    period: "October 2025 – March 2026",
    type: "Internship",
    description:
      "Worked with automation, AI, and DevOps teams to monitor enterprise platforms, troubleshoot production issues, and support infrastructure operations while ensuring service reliability and SLA compliance.",
    highlights: [
      "Assisted in AI model development for enterprise monitoring dashboards",
      "Collaborated with Automation and Problem Management teams on process automation",
      "Monitored enterprise platforms using logs, dashboards, and alerts",
      "Worked with Development and DevOps teams to resolve bugs and performance issues",
      "Managed support tickets while maintaining SLA targets",
      "Resolved Azure server, storage, and file-processing issues",
      "Escalated complex incidents to L2 and L3 engineering teams",
    ],
  },
];
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
;

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
