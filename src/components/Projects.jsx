import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";
import Section from "./Section";
import "./Projects.css";

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Portfolio"
      title="Featured Projects"
      subtitle="A selection of personal and academic projects showcasing my development skills."
    >
      <div className="projects__grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {/* IMAGE SECTION */}
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* TAGS */}
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* LINKS */}
              <div className="project-card__links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}