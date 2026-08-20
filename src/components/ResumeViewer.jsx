import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  Globe,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import "./ResumeViewer.css";

const resumeUrl = "/Muhammad%20_Talal%20_Qadir_Resume.pdf";

const resumeSkills = [
  ["Languages", "Python, JavaScript, Dart (basic)"],
  [
    "Backend & APIs",
    "Django, Django REST Framework (DRF), REST API Design, Celery, JWT Authentication, Session-Based Authentication, Redis, Facebook/Meta Graph API Integration, OAuth 2.0",
  ],
  [
    "Frontend",
    "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, API Integration",
  ],
  ["Databases", "MySQL, PostgreSQL, Azure Cosmos DB"],
  [
    "AI & Machine Learning",
    "AI/ML Model Testing & Validation, Model Performance Monitoring, AI-Based Dashboard Development, Model Reliability & System Checks",
  ],
  [
    "Cloud & DevOps",
    "AWS, Microsoft Azure, Azure Service Bus, Git, GitHub, Jenkins, CI/CD Pipelines, Jira",
  ],
  [
    "Other / Familiar",
    "Flutter & Dart (UI & navigation basics), Agile/Scrum practices, Software Development Lifecycle (SDLC), Problem Solving",
  ],
];

const experiences = [
  {
    title: "Django Backend Developer Intern",
    company: "Zemotify - Lahore, Pakistan",
    period: "March 2026 - Present",
    bullets: [
      "Developed and maintained backend services using Django and Django REST Framework, powering RESTful APIs for production web applications.",
      "Designed relational database schemas and optimized queries to improve data handling efficiency and application response time.",
      "Implemented JWT and session-based authentication and authorization mechanisms, strengthening application security across user roles.",
      "Built and integrated React.js UI components with backend APIs, contributing to frontend feature delivery alongside the core backend role.",
      "Collaborated cross-functionally with frontend developers to ensure seamless integration between client and server layers.",
      "Debugged and optimized application performance, improving reliability and scalability of backend services.",
      "Set up asynchronous task processing using Celery and Redis to handle background jobs and improve application responsiveness.",
    ],
  },
  {
    title: "Technical Support Intern",
    company: "Systems Limited - Lahore, Pakistan",
    period: "October 2025 - March 2026",
    bullets: [
      "Assisted in developing and testing an AI-based monitoring dashboard, supporting AI/ML model validation, performance tracking, and system reliability checks.",
      "Partnered with the Automation and Problem Management team to automate recurring operational tasks, reducing manual effort.",
      "Monitored production platforms using logs, alerts, and dashboards to proactively identify and flag system issues, including AI model behavior anomalies.",
      "Collaborated with Development and DevOps teams to resolve bugs, performance issues, and infrastructure incidents on Azure.",
      "Managed and resolved support tickets within SLA targets, ensuring consistent service quality.",
      "Resolved stuck-file errors across Azure Server and Storage environments and escalated unresolved issues to L2/L3 teams.",
    ],
  },
];

export default function ResumeViewer({ isOpen, onClose, returnFocusRef }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const scrollY = window.scrollY;
    const originalBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      Object.assign(document.body.style, originalBodyStyles);
      window.scrollTo(0, scrollY);
      returnFocusRef?.current?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  const viewer = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-viewer"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            className="resume-viewer__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-viewer-title"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <header className="resume-viewer__header">
              <h2 id="resume-viewer-title">
                <span className="resume-viewer__title-full">
                  Muhammad Talal Qadir - Resume
                </span>
                <span className="resume-viewer__title-short">Resume</span>
              </h2>

              <div className="resume-viewer__actions">
                <a
                  className="btn btn--ghost resume-viewer__download"
                  href={resumeUrl}
                  download
                >
                  <Download size={17} aria-hidden="true" />
                  <span>Download Resume</span>
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="resume-viewer__close"
                  onClick={onClose}
                  aria-label="Close resume"
                >
                  <X size={21} aria-hidden="true" />
                </button>
              </div>
            </header>

            <div className="resume-viewer__document">
              <article className="resume-document">
                <header className="resume-document__identity">
                  <h1>MUHAMMAD TALAL QADIR</h1>
                  <p className="resume-document__role">
                    Django Backend Developer | Python Full-Stack Engineer
                  </p>
                  <div className="resume-document__contact">
                    <span><MapPin size={15} />Pakistan</span>
                    <a href="mailto:qadirmuhammadtalal@gmail.com"><Mail size={15} /> qadirmuhammadtalal@gmail.com</a>
                    <a href="tel:+923361303071"><Phone size={15} /> +92 336 1303071</a>
                  </div>
                  <div className="resume-document__links">
                    <a href="https://www.linkedin.com/in/muhammad-talal-qadir/" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn: Muhammad Talal Qadir</a>
                    <a href="https://github.com/Talal-Qadir" target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub: Talal-Qadir</a>
                    <a href="https://portfolio.talalqadir.site" target="_blank" rel="noopener noreferrer"><Globe size={15} /> Portfolio: Talal-Qadir</a>
                  </div>
                </header>

                <ResumeSection title="Professional Summary">
                  <p>
                    Backend-focused Software Engineer with hands-on experience
                    building scalable RESTful APIs using Django and Django REST
                    Framework, integrated with React.js front ends. Skilled in
                    database design (MySQL, PostgreSQL, Azure Cosmos DB),
                    JWT/session-based authentication, and cloud infrastructure
                    on Azure and AWS, with added exposure to AI/ML model
                    testing, validation, and dashboard development.
                  </p>
                </ResumeSection>

                <ResumeSection title="Technical Skills">
                  <dl className="resume-document__skills">
                    {resumeSkills.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </ResumeSection>

                <ResumeSection title="Professional Experience">
                  <div className="resume-document__experience">
                    {experiences.map((experience) => (
                      <section key={experience.title} className="resume-document__job">
                        <div className="resume-document__job-heading">
                          <div>
                            <h3>{experience.title}</h3>
                            <p>{experience.company}</p>
                          </div>
                          <time>{experience.period}</time>
                        </div>
                        <ul>
                          {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                      </section>
                    ))}
                  </div>
                </ResumeSection>

                <ResumeSection title="Education">
                  <div className="resume-document__education">
                    <h3>BS, Information Technology</h3>
                    <p>Baha Uddin Zakariya University - Multan, Punjab, Pakistan</p>
                    <time>October 2021 - June 2025</time>
                  </div>
                </ResumeSection>

                <ResumeSection title="Languages">
                  <p>English (Fluent) | Urdu (Native)</p>
                </ResumeSection>
              </article>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(viewer, document.body);
}

function ResumeSection({ title, children }) {
  return (
    <section className="resume-document__section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
