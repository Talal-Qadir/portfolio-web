import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import Section from "./Section";
import "./About.css";

export default function About() {
  return (
    <Section
      id="about"
      label="About Me"
      title="Crafting Full Stack Solutions"
      subtitle="Passionate about building scalable web apps with clean architecture and polished user experiences."
    >
      <div className="about__grid">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p>
            I am a passionate <strong>Full Stack Developer</strong> specializing
            in building modern, responsive, and scalable web applications using
            React, Django, and Python.
          </p>
          <p>
            I love turning ideas into real-world digital products with clean UI,
            strong backend systems, and smooth user experiences. From concept to
            deployment, I focus on performance, maintainability, and detail.
          </p>
          <p>{profile.availability}.</p>
        </motion.div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="about__stat-card">
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
